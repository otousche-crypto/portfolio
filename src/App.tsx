import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { MotionConfig } from 'framer-motion';
import HomePage from './pages/HomePage';
import ExperienceDetailPage from './pages/ExperienceDetailPage';

function App() {
  return (
    <MotionConfig reducedMotion="user">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/experience/:id" element={<ExperienceDetailPage />} />
        </Routes>
      </BrowserRouter>
    </MotionConfig>
  );
}

export default App;
