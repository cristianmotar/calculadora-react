import React from 'react';
import '../stylesheets/Pantalla.css';

// esta es otra forma de crear componentes con funcion flecha

const Pantalla = ({ input }) => (
    <div className='input'>
        {input}
    </div>
);

export default Pantalla;