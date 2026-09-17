import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Skills from './pages/Skills';
import Projects from './pages/Projects';
import ProjectPage from './pages/ProjectPage';
import Domains from './pages/Domains';

import Background from './components/Background';

function App() {
    return (
        <div className="app">
            <Background />
            <Navbar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/domains" element={<Domains />} />
                <Route path="/skills" element={<Skills />} />
                <Route path="/projects" element={<Projects />} />
                <Route path="/project/:id" element={<ProjectPage />} />
            </Routes>
            <Footer />
        </div>
    );
}

export default App;
