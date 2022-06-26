import React from 'react';
import PropTypes from 'prop-types';
const Cards = ({ imagenes, texto }) => {
  return (
    <section id='tarjetas'>
      <div>
        <div className='card'>
          <img src={imagenes} alt={texto}></img>
          <h1>Comoda</h1>
          <p>Dormitorio</p>
        </div>
      </div>
    </section>
  );
};
Cards.propTypes = {
  imagenes: PropTypes.string.isRequired,
  texto: PropTypes.string.isRequired,
};

export default Cards;
