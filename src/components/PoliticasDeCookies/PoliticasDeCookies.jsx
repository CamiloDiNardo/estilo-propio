import React from 'react'
import { useNavigate } from 'react-router-dom'

const PoliticasDeCookies = () => {
 const Regresar = useNavigate()
  const VolverAInicio = () =>{
    Regresar('/') 
  }
  return (
<main className="arreglo-doc">

    <a className="enlace2" onClick={VolverAInicio}>Regresar</a>

    <h1>Aviso de Cookies</h1><br/>

    <h3>¿Qué son las cookies?</h3><br/>

    <p>Una cookie es un fichero que se descarga en su ordenador
    al acceder a determinadas páginas web. Las cookies permiten a una página web, entre otras
    cosas, almacenar y recuperar información sobre los hábitos de navegación de un usuario o 
    de su equipo y, dependiendo de la información que contengan y de la forma en que utilice 
    su equipo, pueden utilizarse para reconocer al usuario.</p><br/>
    
    <h3>¿Qué tipos de cookies utiliza esta página web?</h3>

    <p>Esta página web utiliza los siguientes tipos de cookies:</p><br/>


    
    <p><b>Cookies de análisis:</b> Son
    aquéllas que bien tratadas por nosotros o por terceros, nos permiten cuantificar el número
    de usuarios y así realizar la medición y análisis estadístico de la utilización que hacen
    los usuarios del servicio ofertado. Para ello se analiza su navegación en nuestra página
    web con el fin de mejorar la oferta de productos o servicios que le ofrecemos.</p><br/>
    

    
    <p><b>Cookies técnicas:</b> Son aquellas que permiten al usuario la navegación a través del
    área restringida y la utilización de sus diferentes funciones, como por ejemplo, llevar a cambio
    el proceso de compra de un artículo.</p><br/>
    
    <p><b>Cookies de personalización:</b>
    Son aquellas que permiten al usuario acceder al servicio con algunas características 
    de carácter general predefinidas en función de una serie de criterios en el terminal del
    usuario como por ejemplo serian el idioma o el tipo de navegador a través del cual se
    conecta al servicio.</p><br/>
    
    <p><b>Cookies publicitarias:</b>
    Son aquéllas que, bien tratadas por esta web o por terceros, permiten gestionar de la 
    forma más eficaz posible la oferta de los espacios publicitarios que hay en la página web,
    adecuando el contenido del anuncio al contenido del servicio solicitado o al uso que
    realice de nuestra página web. Para ello podemos analizar sus hábitos de navegación en 
    Internet y podemos mostrarle publicidad relacionada con su perfil de navegación.</p><br/>
    
    <p><b>Cookies de publicidad comportamental:</b> Son aquellas que permiten la gestión, de la forma más eficaz posible,
    de los espacios publicitarios que, en su caso, el editor haya incluido en una página web,
    aplicación o plataforma desde la que presta el servicio solicitado. Este tipo de cookies
    almacenan información del comportamiento de los visitantes obtenida a través de la 
    observación continuada de sus hábitos de navegación, lo que permite desarrollar un perfil
    específico para mostrar avisos publicitarios en función del mismo.</p><br/>
    
    
    <h3>Desactivar las cookies:</h3>
    <p>Puede usted permitir, bloquear o eliminar las cookies 
    instaladas en su equipo mediante la configuración de las opciones del navegador instalado
    en su ordenador.</p><br/>
    
    <p>En la mayoría de los navegadores web se ofrece la posibilidad de permitir, bloquear o eliminar las cookies instaladas en su equipo.</p><br/>
    
    <p>A continuación puede acceder a la configuración de los navegadores webs más frecuentes para aceptar, instalar o desactivar las cookies:</p><br/>
    
    <p><a className="enlace2" href="https://support.google.com/chrome/answer/95647?hl=es">Configurar cookies en Google Chrome</a></p><br/>
    
    <p><a className="enlace2" href="http://windows.microsoft.com/es-es/windows7/how-to-manage-cookies-in-internet-explorer-9">Configurar cookies en Microsoft Internet Explorer</a></p><br/>
    
    <p><a className="enlace2" href="https://support.mozilla.org/es/kb/habilitar-y-deshabilitar-cookies-sitios-web-rastrear-preferencias?redirectlocale=es&amp;redirectslug=habilitar-y-deshabilitar-cookies-que-los-sitios-we">Configurar cookies en Mozilla Firefox</a></p><br/>
    
    <p><a className="enlace2" href="https://support.apple.com/es-es/HT201265">Configurar cookies en Safari (Apple)</a></p><br/>
    
    <h3>Cookies de terceros.</h3><br/>
    
    <p>Esta página web utiliza servicios de terceros para 
    recopilar información con fines estadísticos y de uso de la web. Se usan cookies de
    DoubleClick para mejorar la publicidad que se incluye en el sitio web. Son utilizadas para
    orientar la publicidad según el contenido que es relevante para un usuario, mejorando así
    la calidad de experiencia en el uso del mismo.</p><br/>
    
    <p>En concreto, usamos los servicios de Google Adsense y de
    Google Analytics para nuestras estadísticas y publicidad. Algunas cookies son esenciales 
    para el funcionamiento del sitio, por ejemplo el buscador incorporado.</p><br/>
    
    <p>Nuestro sitio incluye otras funcionalidades proporcionadas 
    por terceros. Usted puede fácilmente compartir el contenido en redes sociales como 
    Facebook, Twitter o Google +, con los botones que hemos incluido a tal efecto.</p><br/>
    
    <h3>Advertencia sobre eliminar cookies.</h3><br/>
    
    <p>Usted puede eliminar y bloquear todas las cookies de este 
    sitio, pero parte del sitio no funcionará o la calidad de la página web puede verse 
    afectada.</p><br/>
    
    <p>Si tiene cualquier duda acerca de nuestra política de cookies, puede contactar con esta página web a través de nuestros canales de Contacto.</p><br/>
    
    </main>
)}

export default PoliticasDeCookies