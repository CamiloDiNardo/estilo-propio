import React, { useState } from 'react';
import {FraseBoton} from "../../components"

const Boton = () => {
  const [Mostrar, setMostrar] = useState(true);
  return (
    <div className='boton'>
      {Mostrar ? (
        <button type='submit' name='boton' onClick={() => setMostrar(false)}>
          Ver Mas
        </button>
      ) : (
        <FraseBoton />
      )}
    </div>
  );
};

export default Boton;
