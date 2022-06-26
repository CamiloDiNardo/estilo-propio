import React from 'react'
import { useNavigate } from 'react-router-dom'
const BotonAvisoDeCookies = () => { 
const IrAPoliticasDeCookies= useNavigate()
const Enlace = ()=>{ 
    IrAPoliticasDeCookies('/PoliticasDeCookies') 
}

return (
    <a className="enlace" onClick={Enlace}>Aviso de Cookies</a>
  )
}

export default BotonAvisoDeCookies