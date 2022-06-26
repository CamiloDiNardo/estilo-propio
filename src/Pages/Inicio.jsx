import React from 'react';
import {
  Banner,
  Boton,
  CartelCookies,
  DerechosReservados,
  Footer,
  Menu,
  Sillon,
  Slider,
  MapCards,
} from '../components';

import '../components/Menu/Menu.css';
import '../components/Slider/Slider.css';
import '../components/Banner/Banner.css';
import '../components/BotonCards/Boton.css';
import '../components/Cards/Cards.css';
import '../components/Footer/Footer.css';
import '../components/Sillon/Sillon.css';
import '../components/DerechosReservados/DerechosReservados.css';
import '../components/FraseBoton/FraseBoton.css';
import '../components/CartelCookies/CartelCookies.css';
import '../components/BotonAvisoDeCookies/BotonAvisoDeCookies.css';
import '../components/FondoCookies/FondoCookies.css';

const Inicio = () => {
  return (
    <div>
      <Menu />
      <Slider />
      <Sillon />
      <Banner />
      <MapCards />
      <Boton />
      <Footer />
      <DerechosReservados />
      <CartelCookies />
    </div>
  );
};

export default Inicio;
