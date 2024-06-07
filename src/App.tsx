import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './home';
import Formations from './pages formations/formations';
import ContactPage from './contactPage';
import AboutPage from './about';
import CategorieAsie from './pages formations/CategorieAsie';

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/formations" element={<Formations />} />
        <Route path="/Contactpage" element={<ContactPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/CategorieAsie" element={<CategorieAsie />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
