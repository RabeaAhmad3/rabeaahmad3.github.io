import React from 'react';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import{Home, About, Contact, ProjectPage, ErrorPage} from './pages';
import Sidebar from './components/sidebar/Sidebar';
import ThemeTemplates from './components/ThemingTemplate/ThemeTemplates';
import './App.scss';
import './utils/templateColors.scss'
const App = () => {
    return(
    <BrowserRouter>
    <Sidebar/>
    <ThemeTemplates/>
    <Routes>
        <Route path = "/" element={<Home />}></Route>
        <Route path = "/about" element={<About />}></Route>
        <Route path = "/contact" element={<Contact />}></Route>
        <Route path = "/project" element={<ProjectPage />}></Route>
        <Route path = "*" element={<ErrorPage />}></Route>

    </Routes>
    </BrowserRouter>
    )
}
export default App;