import React from "react";
import "./App.css";
// import Navbar from "./Components/Navbar";
import Navbar from './Components/Navbar/indexNavbar';
import {
    BrowserRouter as Router,
    Routes,
    Route,
} from "react-router-dom";
import Home from './Components/Navbar/pages/pagesIndex';
import About from './Components/Navbar/pages/about';
import Calendar from './Components/Navbar/pages/calendar';
import Contact from './Components/Navbar/pages/contact';

function App() {
    return (
        <Router>
            <Navbar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route
                    path="/calendar"
                    element={<Calendar />}
                />
                <Route
                    path="/contact"
                    element={<Contact />}
                />
            </Routes>
        </Router>
    );
}

export default App;
