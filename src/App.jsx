import React from 'react';
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import Inicio from './Pages/Inicio';
import PoliticasDeCookies from './Pages/AvisoDeCookies';
import './App.css';
const App = () => {

return(
<div>
    <Router>
        <Routes>
        <Route path="/" element={<Inicio/>}/>
        <Route path="/PoliticasDeCookies" element={<PoliticasDeCookies/>}/>  
    </Routes> 
</Router>
</div>
    )}
export default App;
