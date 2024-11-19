import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from '../Pages/HomePage';
import CoursesPage from '../Pages/CoursesPage';
import AboutPage from '../Pages/AboutPage';

const App: React.FC = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/courses" element={<CoursesPage />} />
                <Route path="/about" element={<AboutPage />} />
            </Routes>
        </Router>
    );
};

export default App;
