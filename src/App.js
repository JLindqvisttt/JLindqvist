/**
 * App – Root component with routing, theme provider, and page transitions.
 */
import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes, useLocation } from "react-router-dom";
import { AnimatePresence } from 'framer-motion';
import { ThemeProvider } from './context/ThemeContext';
import PageTransition from './components/PageTransition';
import ScrollToTop from './components/ScrollToTop';
import CursorGlow from './components/CursorGlow';
import HomePage from './Pages/HomePage';
import CvPage from './Pages/CvPage';
import ContactPage from './Pages/ContactPage';
import 'bootstrap/dist/css/bootstrap.min.css';

/** Inner component that uses useLocation for AnimatePresence */
const AnimatedRoutes = () => {
    const location = useLocation();
    return (
        <AnimatePresence mode="wait">
            <Routes location={location} key={location.pathname}>
                <Route path="/" element={<PageTransition><HomePage /></PageTransition>} />
                <Route path="/Contact" element={<PageTransition><ContactPage /></PageTransition>} />
                <Route path="/Cv" element={<PageTransition><CvPage /></PageTransition>} />
            </Routes>
        </AnimatePresence>
    );
};

function App() {
    return (
        <ThemeProvider>
            <CursorGlow />
            <Router>
                <ScrollToTop />
                <AnimatedRoutes />
            </Router>
        </ThemeProvider>
    );
}

export default App;
