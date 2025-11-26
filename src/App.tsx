import { useState } from 'react';
import { Navigation, HomePage, DiagnosisPage, AboutPage } from './components';

interface AppState {
  currentPage: 'home' | 'diagnose' | 'about';
  imageData: string | null;
  fileName: string | null;
}

function App() {
  const [state, setState] = useState<AppState>({
    currentPage: 'home',
    imageData: null,
    fileName: null,
  });

  const handleNavigate = (page: string) => {
    setState((prev) => ({
      ...prev,
      currentPage: page as 'home' | 'diagnose' | 'about',
      imageData: page === 'home' ? null : prev.imageData,
      fileName: page === 'home' ? null : prev.fileName,
    }));
  };

  const handleImageSelected = (imageData: string, fileName: string) => {
    setState((prev) => ({
      ...prev,
      currentPage: 'diagnose',
      imageData,
      fileName,
    }));
  };

  const handleReset = () => {
    setState({
      currentPage: 'home',
      imageData: null,
      fileName: null,
    });
  };

  return (
    <div className="min-h-screen bg-white">
      <Navigation currentPage={state.currentPage} onNavigate={handleNavigate} />

      {state.currentPage === 'home' && (
        <HomePage onImageSelected={handleImageSelected} />
      )}

      {state.currentPage === 'diagnose' && state.imageData && state.fileName && (
        <DiagnosisPage
          imageData={state.imageData}
          fileName={state.fileName}
          onReset={handleReset}
        />
      )}

      {state.currentPage === 'about' && <AboutPage />}
    </div>
  );
}

export default App;
