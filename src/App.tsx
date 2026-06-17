import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { MotionConfig } from 'framer-motion';
import HomePage from './pages/HomePage';
import ExperienceDetailPage from './pages/ExperienceDetailPage';
import { LanguageProvider } from './contexts/LanguageContext';

function App() {
  return (
    <LanguageProvider>
      <MotionConfig reducedMotion="user">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/experience/:id" element={<ExperienceDetailPage />} />
          </Routes>
        </BrowserRouter>
      </MotionConfig>
    </LanguageProvider>
  );
}

export default App;
