import React,{useState} from 'react'
const Footer = () => {
  const [Frase,SetFrase]= useState(false)
  const Noenvio = (e)=>{ 
    e.preventDefault();
    const form = document.getElementById('contacto');
    form.reset(); 
    SetFrase(true);
  }

  return (
    <footer className="footer-contenedor">
    <form id="contacto">
    <h1 className="formulario">Formulario</h1>
    <div className="formInner">
    <div className="form-contenedor">
    <label htmlFor="Nombre">Nombre</label>
    <input type="text" name="Nombre" id="Nombre" required="" placeholder="Ingrese su Nombre"></input>
    <label htmlFor="E-mail">Correo Electronico</label>
    <input type="email"  name="E-mail" id="Email" required="" placeholder="Ingrese su E-mail"></input>
    <label htmlFor="Telefono">Telefono</label>
    <input type="tel" className="Telefono" name="Telefono" id="Telefono" required="" placeholder="Ingrese su Telefono"></input>
    </div>
    <div className="form-content2">
    <label htmlFor="Provincia">Provincia</label>
        <select  name="Provincia">
            <option value="Buenos Aires">Buenos Aires</option>
            <option value="Capital Federal">Capital Federal</option>
            <option value="Catamarca">Catamarca</option>
            <option value="Chaco">Chaco</option>
            <option value="Chubut">Chubut</option>
            <option value="Cordoba">Cordoba</option>
            <option value="Corrientes">Corrientes</option>
            <option value="Entre Rios">Entre Rios</option>
            <option value="Formosa">Formosa</option>
            <option value="Jujuy">Jujuy</option>
            <option value="La Pampa">La Pampa</option>
            <option value="La Rioja">La Rioja</option>
            <option value="Mendoza">Mendoza</option>
            <option value="Misiones">Misiones</option>
            <option value="Neuquen">Neuquen</option>
            <option value="Rio Negro">Rio Negro</option>
            <option value="Salta">Salta</option>
            <option value="San Juan">San Juan</option>
            <option value="San Luis">San Luis</option>
            <option value="Santa Cruz">Santa Cruz</option>
            <option value="Santa Fe">Santa Fe</option>
            <option value="Santiago Del Estero">Santiago Del Estero</option>
            <option value="Tierra Del Fuego">Tierra Del Fuego</option>
            <option value="Tucuman">Tucuman</option>
    </select>
    <label htmlFor="Horario de contacto">Horario de contacto</label>
        <select  name="Horario de contacto">
            <option value="10 a 13">10 a 13</option>
            <option value="13 a 19">13 a 19</option>
        </select>
    <label htmlFor="Consulta">Consulta</label>
    <input type="text"  name="Consulta" id="Consulta" required="" placeholder="Ingrese su consulta"></input>
    <div className="button">
    <button type="submit" name="button" className="boton2" onClick={Noenvio}>Enviar</button>
    {Frase && <p className="envioExitoso ContenedorEnvioExitoso" id="#envioExitoso">Enviado Correctamente</p>}
    </div>
    </div>
    </div>
    </form>
    <div className="contact-container">
    <h1>Contacto</h1>
    <p><img src="/imagenes/call-outline.svg" className="ContactSvg" name="Call" alt="Call"></img> 0800-000-0000</p>
    <p><img src="/imagenes/logo-whatsapp.svg" className="ContactSvg" name="wpp" alt="wpp"></img> 011-4022-0039</p>
    <p><img src="/imagenes/location-outline.svg" className="ContactSvg"name="Location" alt="Location"></img> Lorem ipsum 555</p>
    </div>

    <div className="Horarios-container">
    <h1 className="horarios">Horarios</h1>
    <p>Lunes a Viernes</p> <p>10:00 - 19:00 hs.</p>
    </div>
    </footer>
  )
}

export default Footer