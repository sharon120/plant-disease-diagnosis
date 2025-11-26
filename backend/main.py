from fastapi import FastAPI, UploadFile, HTTPException
from fastapi.middleware.cors import CORSMiddleware
import uvicorn
import tensorflow as tf
import numpy as np
from PIL import Image
import json
import io

app = FastAPI()

# Add CORS middleware
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000"],  # React dev server
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

try:
    model = tf.keras.models.load_model("../model/model.h5")
    labels = json.load(open("../model/label_map.json"))
    print(f"Model loaded successfully. Classes: {len(labels)}")
except Exception as e:
    print(f"Error loading model: {e}")
    model = None
    labels = []

IMG_SIZE = 224

def preprocess(img):
    """Preprocess image for model prediction."""
    img = img.resize((IMG_SIZE, IMG_SIZE))
    img = np.array(img) / 255.0
    return np.expand_dims(img, 0)

def enhance_image(img):
    """Apply basic image enhancement."""
    # Convert to array
    img_array = np.array(img)

    # Normalize and enhance contrast
    img_array = img_array.astype(np.float32) / 255.0

    # Simple contrast enhancement
    mean = np.mean(img_array)
    img_array = np.clip((img_array - mean) * 1.2 + mean, 0, 1)

    # Convert back to PIL
    img_array = (img_array * 255).astype(np.uint8)
    return Image.fromarray(img_array)

@app.post("/predict")
async def predict(file: UploadFile):
    if model is None:
        raise HTTPException(status_code=503, detail="Model not loaded")

    try:
        # Read image
        contents = await file.read()
        image = Image.open(io.BytesIO(contents))

        # Convert to RGB if necessary
        if image.mode != 'RGB':
            image = image.convert('RGB')

        # Enhance image
        image = enhance_image(image)

        # Preprocess
        input_tensor = preprocess(image)

        # Predict
        pred = model.predict(input_tensor, verbose=0)[0]

        # Get top 3 predictions
        top_indices = np.argsort(pred)[-3:][::-1]
        predictions = [
            {
                "class": labels[idx],
                "confidence": float(pred[idx])
            }
            for idx in top_indices
        ]

        return {
            "predictions": predictions,
            "top_prediction": predictions[0]
        }

    except Exception as e:
        raise HTTPException(status_code=400, detail=f"Prediction failed: {str(e)}")

@app.get("/health")
async def health():
    return {"status": "healthy", "model_loaded": model is not None}

if __name__ == "__main__":
    uvicorn.run(app, host="0.0.0.0", port=8000)
