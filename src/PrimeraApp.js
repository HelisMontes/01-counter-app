//import React, { Fragment } from 'react';
import React from 'react';
import PropTypes from 'prop-types';

export const PrimerApp = ({ saludar = 'Hola Mundo...', subTitulo }) => {
    //const saludar = `Hola Mundo`;
    // const saludar2 = {
    //     nombre: 'Helis',
    //     apellido: 'Montes',
    // };
    return( 
        <>
            <h1>{ saludar }</h1>
            {/* <pre> { JSON.stringify (saludar2, null, 3) }</pre> */}
            <p>{ subTitulo }</p>
        </>
    );
}

PrimerApp.propTypes = {
    saludar: PropTypes.string.isRequired,
}

PrimerApp.defaultProps = {
    subTitulo: 'Soy un subtitulo'
}

/*
export const PrimerApp = () => (
    <Fragment>
        <h1>Hola Mundo</h1>
        <p> Mi primera APP</p>
    </Fragment>
);
*/