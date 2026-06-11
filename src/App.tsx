import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import ExperienceDetailPage from './pages/ExperienceDetailPage';
import ContentEditorPage from './pages/ContentEditorPage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/experience/:id" element={<ExperienceDetailPage />} />
        <Route path="/admin/content-editor" element={<ContentEditorPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
