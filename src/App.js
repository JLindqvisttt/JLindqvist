import React from 'react';
import './App.css';
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";

import HomePage from './Pages/HomePage';
import CvPage from './Pages/CvPage';
import Contact from './Pages/ContactPage';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
    return (

        <Router>
            <Routes>
                <Route exact path="/" element=<HomePage/>/>
                <Route exact path="/Contact" element=<Contact/>/>
                <Route exact path="/Cv" element=<CvPage/>/>
            </Routes>
        </Router>
    );
}

export default App;
