import React from 'react'

const Menu = () => {
  return (
    <header>
      <nav>
        <div className="menu">
            <div className="menu-img">
              <img src="/imagenes/LOGO.png" alt="Logo"></img>
            </div>
            <div className="links">
                <a href="#">Inicio</a>
                <a href="#tarjetas">Productos</a>
                <a href="#contacto">Contacto</a>
                </div> 
            </div>
        </nav>
    </header>
  )
}

Menu.propTypes = {
    
}

export default Menu