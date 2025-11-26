import React from 'react';
import { Leaf, Brain, Zap, Users, Github, Mail } from 'lucide-react';

export const AboutPage: React.FC = () => {
  const stats = [
    { label: 'Plant Diseases', value: '10+' },
    { label: 'Accuracy Rate', value: '92%' },
    { label: 'Analysis Speed', value: '<3s' },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-20">
        <div className="mb-16">
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">About PlantDoc AI</h1>
          <p className="text-xl text-gray-600">
            Leveraging advanced machine learning to diagnose plant diseases accurately and quickly
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {stats.map((stat, index) => (
            <div key={index} className="bg-white rounded-xl shadow-md p-8 text-center">
              <p className="text-4xl font-bold text-green-600 mb-2">{stat.value}</p>
              <p className="text-gray-600 font-semibold">{stat.label}</p>
            </div>
          ))}
        </div>

        <div className="bg-white rounded-xl shadow-lg p-8 mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">How It Works</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center gap-3">
                <Brain className="w-6 h-6 text-green-600" />
                AI Technology
              </h3>
              <p className="text-gray-700 leading-relaxed">
                PlantDoc AI uses a deep learning model trained on thousands of plant leaf images from the PlantVillage dataset. The model is based on transfer learning with EfficientNet architecture, achieving high accuracy in disease classification.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center gap-3">
                <Zap className="w-6 h-6 text-green-600" />
                Fast & Accurate
              </h3>
              <p className="text-gray-700 leading-relaxed">
                Our system analyzes plant images in under 3 seconds, identifying diseases with over 92% accuracy. The model continuously learns and improves to provide better diagnoses.
              </p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <div className="bg-white rounded-xl shadow-lg p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
              <Leaf className="w-7 h-7 text-green-600" />
              Supported Plants
            </h2>
            <div className="grid grid-cols-2 gap-4">
              {['Tomato', 'Potato', 'Apple', 'Corn', 'Grape', 'Pepper'].map((plant, index) => (
                <div key={index} className="bg-green-50 rounded-lg p-4">
                  <p className="text-gray-900 font-semibold">{plant}</p>
                </div>
              ))}
            </div>
            <p className="text-sm text-gray-600 mt-6">
              More plant species are being added regularly to expand our disease detection capabilities.
            </p>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
              <Users className="w-7 h-7 text-green-600" />
              Who We Serve
            </h2>
            <ul className="space-y-4">
              {[
                'Farmers & Agricultural Workers',
                'Gardening Enthusiasts',
                'Agricultural Researchers',
                'Extension Services',
                'Educational Institutions',
              ].map((user, index) => (
                <li key={index} className="flex gap-3">
                  <span className="flex-shrink-0 w-2 h-2 bg-green-600 rounded-full mt-2"></span>
                  <span className="text-gray-700">{user}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="bg-gradient-to-r from-green-600 to-green-700 rounded-xl shadow-lg p-8 text-white mb-12">
          <h2 className="text-2xl font-bold mb-4">Dataset & Model</h2>
          <p className="mb-4 leading-relaxed">
            Our AI is trained on the PlantVillage dataset from Kaggle, which contains over 50,000 images of plant leaves with various diseases. We use state-of-the-art transfer learning techniques with EfficientNet to achieve excellent accuracy while maintaining fast inference times.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-6">
            <div className="bg-white bg-opacity-20 rounded-lg p-4">
              <p className="text-sm font-semibold">Training Samples</p>
              <p className="text-2xl font-bold">50K+</p>
            </div>
            <div className="bg-white bg-opacity-20 rounded-lg p-4">
              <p className="text-sm font-semibold">Disease Classes</p>
              <p className="text-2xl font-bold">38</p>
            </div>
            <div className="bg-white bg-opacity-20 rounded-lg p-4">
              <p className="text-sm font-semibold">Model Accuracy</p>
              <p className="text-2xl font-bold">92%</p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-lg p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Disclaimer</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            PlantDoc AI is an educational and informational tool designed to assist in plant disease identification. While our model achieves high accuracy, diagnoses should not be considered a replacement for professional agricultural expertise or advice from certified agronomists.
          </p>
          <p className="text-gray-700 leading-relaxed">
            Always verify results with multiple sources and consider environmental factors, plant history, and other symptoms when making treatment decisions. For critical agricultural decisions, consult with local agricultural extension services or professional plant pathologists.
          </p>
        </div>

        <div className="mt-16 text-center">
          <h3 className="text-2xl font-bold text-gray-900 mb-8">Get in Touch</h3>
          <div className="flex justify-center gap-6">
            <a
              href="mailto:support@plantdocai.com"
              className="flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors"
            >
              <Mail className="w-5 h-5" />
              Contact Us
            </a>
            <a
              href="#"
              className="flex items-center gap-2 bg-gray-200 hover:bg-gray-300 text-gray-900 font-semibold py-3 px-6 rounded-lg transition-colors"
            >
              <Github className="w-5 h-5" />
              GitHub
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
