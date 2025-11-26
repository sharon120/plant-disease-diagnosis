import React, { useRef, useState } from 'react';
import { Upload, Leaf, Zap, Shield, Eye, Camera, X } from 'lucide-react';

interface HomePageProps {
  onImageSelected: (imageData: string, fileName: string) => void;
}

export const HomePage: React.FC<HomePageProps> = ({ onImageSelected }) => {
  const fileInputRef = useRef<HTMLInputElement>(null);
  const cameraInputRef = useRef<HTMLInputElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [showCamera, setShowCamera] = useState(false);
  const [cameraStream, setCameraStream] = useState<MediaStream | null>(null);
  const dragOverRef = useRef(false);

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    dragOverRef.current = true;
  };

  const handleDragLeave = () => {
    dragOverRef.current = false;
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    dragOverRef.current = false;
    const files = e.dataTransfer.files;
    if (files.length > 0) {
      processFile(files[0]);
    }
  };

  const handleFileInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.currentTarget.files;
    if (files && files.length > 0) {
      processFile(files[0]);
    }
  };

  const processFile = (file: File) => {
    if (!file.type.startsWith('image/')) {
      alert('Please upload an image file');
      return;
    }

    const reader = new FileReader();
    reader.onload = (e) => {
      const imageData = e.target?.result as string;
      onImageSelected(imageData, file.name);
    };
    reader.readAsDataURL(file);
  };

  const startCamera = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({
        video: { facingMode: 'environment' },
      });
      setCameraStream(stream);
      setShowCamera(true);
      if (videoRef.current) {
        videoRef.current.srcObject = stream;
      }
    } catch (error) {
      console.error('Error accessing camera:', error);
      alert('Unable to access camera. Please check permissions.');
    }
  };

  const stopCamera = () => {
    if (cameraStream) {
      cameraStream.getTracks().forEach((track) => track.stop());
      setCameraStream(null);
    }
    setShowCamera(false);
  };

  const capturePhoto = () => {
    if (videoRef.current && canvasRef.current) {
      const context = canvasRef.current.getContext('2d');
      if (context) {
        canvasRef.current.width = videoRef.current.videoWidth;
        canvasRef.current.height = videoRef.current.videoHeight;
        context.drawImage(videoRef.current, 0, 0);
        const imageData = canvasRef.current.toDataURL('image/jpeg');
        onImageSelected(imageData, `camera-${new Date().getTime()}.jpg`);
        stopCamera();
      }
    }
  };

  const features = [
    {
      icon: Zap,
      title: 'Instant Analysis',
      description: 'Get disease diagnosis in seconds using advanced AI technology',
    },
    {
      icon: Shield,
      title: 'Accurate Results',
      description: 'ML model trained on thousands of plant disease samples',
    },
    {
      icon: Eye,
      title: 'Detailed Reports',
      description: 'Receive comprehensive treatment recommendations and guidance',
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <section className="py-12 sm:py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 leading-tight">
                  Diagnose Plant Diseases with AI
                </h1>
                <p className="text-xl text-gray-600">
                  Upload a photo of your plant leaf and get instant disease diagnosis with treatment recommendations.
                </p>
              </div>

              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-gray-900">How it works:</h3>
                <ol className="space-y-3">
                  <li className="flex gap-4">
                    <span className="flex-shrink-0 w-8 h-8 bg-green-600 text-white rounded-full flex items-center justify-center font-bold">
                      1
                    </span>
                    <span className="text-gray-700">Upload a clear photo of an affected leaf</span>
                  </li>
                  <li className="flex gap-4">
                    <span className="flex-shrink-0 w-8 h-8 bg-green-600 text-white rounded-full flex items-center justify-center font-bold">
                      2
                    </span>
                    <span className="text-gray-700">AI analyzes the image using a trained neural network</span>
                  </li>
                  <li className="flex gap-4">
                    <span className="flex-shrink-0 w-8 h-8 bg-green-600 text-white rounded-full flex items-center justify-center font-bold">
                      3
                    </span>
                    <span className="text-gray-700">Get diagnosis, confidence level, and treatment options</span>
                  </li>
                  <li className="flex gap-4">
                    <span className="flex-shrink-0 w-8 h-8 bg-green-600 text-white rounded-full flex items-center justify-center font-bold">
                      4
                    </span>
                    <span className="text-gray-700">Download a detailed PDF report for your records</span>
                  </li>
                </ol>
              </div>
            </div>

            <div
              onDragOver={handleDragOver}
              onDragLeave={handleDragLeave}
              onDrop={handleDrop}
              onClick={() => fileInputRef.current?.click()}
              className={`cursor-pointer rounded-2xl border-2 border-dashed p-12 text-center transition-all duration-200 ${
                dragOverRef.current
                  ? 'border-green-500 bg-green-50 scale-105'
                  : 'border-green-300 bg-green-50 hover:border-green-500'
              }`}
            >
              <input
                ref={fileInputRef}
                type="file"
                accept="image/*"
                onChange={handleFileInput}
                className="hidden"
              />
              <Upload className="w-16 h-16 mx-auto text-green-600 mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Upload Plant Image</h3>
              <p className="text-gray-600 mb-4">
                Drag and drop your image here, or click to browse
              </p>
              <p className="text-sm text-gray-500">
                Supported formats: JPG, PNG, WebP (Max 10MB)
              </p>
            </div>
          </div>

          <div className="flex gap-4 justify-center mt-8">
            <button
              onClick={() => fileInputRef.current?.click()}
              className="flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors"
            >
              <Upload className="w-5 h-5" />
              Upload Image
            </button>
            <button
              onClick={startCamera}
              className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors"
            >
              <Camera className="w-5 h-5" />
              Take Photo
            </button>
          </div>
        </section>

        <section className="py-16 sm:py-24">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Why Choose PlantDoc AI?</h2>
            <p className="text-lg text-gray-600">Powerful features for accurate disease detection</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div key={index} className="bg-white rounded-xl shadow-md p-8 hover:shadow-lg transition-shadow">
                  <Icon className="w-12 h-12 text-green-600 mb-4" />
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </div>
              );
            })}
          </div>
        </section>

        <section className="py-16 sm:py-24 bg-green-600 rounded-2xl px-8 sm:px-12 text-white text-center mb-12">
          <Leaf className="w-16 h-16 mx-auto mb-4 opacity-90" />
          <h2 className="text-3xl font-bold mb-4">Protect Your Plants Today</h2>
          <p className="text-lg text-green-100 max-w-2xl mx-auto">
            Early detection is key to managing plant diseases. Start by uploading an image of your plant.
          </p>
        </section>
      </div>

      {/* Camera Modal */}
      {showCamera && (
        <div className="fixed inset-0 bg-black bg-opacity-75 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl max-w-2xl w-full overflow-hidden shadow-2xl">
            <div className="flex items-center justify-between p-6 border-b border-gray-200">
              <h2 className="text-2xl font-bold text-gray-900">Capture Plant Photo</h2>
              <button
                onClick={stopCamera}
                className="p-1 hover:bg-gray-100 rounded-lg transition-colors"
              >
                <X className="w-6 h-6 text-gray-600" />
              </button>
            </div>
            <div className="relative bg-black">
              <video
                ref={videoRef}
                autoPlay
                playsInline
                className="w-full h-auto"
              />
              <canvas ref={canvasRef} className="hidden" />
            </div>
            <div className="flex gap-4 p-6 bg-gray-50 justify-center">
              <button
                onClick={capturePhoto}
                className="flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white font-semibold py-3 px-8 rounded-lg transition-colors"
              >
                <Camera className="w-5 h-5" />
                Capture Photo
              </button>
              <button
                onClick={stopCamera}
                className="flex items-center gap-2 bg-gray-400 hover:bg-gray-500 text-white font-semibold py-3 px-8 rounded-lg transition-colors"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
