import React from 'react';
import { Cards } from '../../components';
import Cardsinfo from '../../Cards.json';

const MapCards = () => {
  return (
    <div className='contenedor-cards'>
      {Cardsinfo.map(({ imagenes, texto }, index) => (
        <Cards imagenes={imagenes} texto={texto} key={index} />
      ))}
    </div>
  );
};
export default MapCards;
