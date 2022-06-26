import React, { useState } from 'react';
import { BotonAvisoDeCookies, FondoCookies } from '../../components';
const CartelCookies = () => {
  const dataLayer = [];
  const [, SetDesaparecer] = useState(true);
  const condicion1 =
    !localStorage.getItem('cookies-aceptadas') &&
    dataLayer.push({ event: 'cookies-aceptadas' });
  const Desapareciendo = () => {
    localStorage.setItem('cookies-aceptadas', true);
    dataLayer.push({ event: 'cookies-aceptadas' });
    SetDesaparecer(false);
  };
  return (
    <div>
      {condicion1 && (
        <div>
          <FondoCookies />
          <div className='aviso-cookies' id='aviso-cookies'>
            <img
              className='galleta'
              src='/imagenes/cookie.svg'
              alt='Galleta'></img>
            <h3 className='titulo'>Cookies</h3>
            <p className='parrafo'>
              Utilizamos cookies propias y de terceros para mejorar nuestros
              servicios.
            </p>
            <button
              className='boton'
              id='btn-aceptar-cookies'
              onClick={Desapareciendo}>
              De acuerdo
            </button>
            <BotonAvisoDeCookies />
          </div>
        </div>
      )}
    </div>
  );
};

CartelCookies.propTypes = {};

export default CartelCookies;
