# TODO: IntegeatateL anMaDttaseteinto Plt tnto PlantDiDgnosis Aise Diagnosis App

## Step 1: Add Pl nPVillaglaDailsetataset
- InstKlLiKaggslaCLI:l`pp sall kaggl`
- Place kaggle.json in C:\Users\Admin\.kaggle\kaggle.json (user needs to provide or download)
- Download dataset: `kaggle datasets download -d emmarex/plantdisease -p dataset/ --unzip`

## Step 2: Add Machine Learning Folder
- ml/train.py: Already exists, verify content
- Create ml/preprocess.py: Add preprocessing utilities

## Step 3: Add Backend (FastAPI)
- Create backend/main.py: FastAPI server for predictions
- Install dependencies: fastapi, uvicorn, tensorflow, pillow, numpy
- Run backend: `cd backend && uvicorn main:app --reload`

## Step 4: Connect Frontend to Backend
- Modify src/components/DiagnosisPage.tsx: Add file upload and prediction logic
- Install any needed frontend dependencies (e.g., if using fetch, none needed)
- Test the integration

## Step 5: Train the Model
- Run ml/train.py to train the model (after dataset is downloaded)

## Step 6: Testing and Verification
- Ensure backend runs and predicts correctly
- Frontend uploads image and displays prediction
