import React from 'react';
import {shallow} from 'enzyme'
import '@testing-library/jest-dom';

import {PrimerApp} from '../PrimeraApp';

describe('Pruebas en <PrimeraApp/>', () => {
    // test( 'Debe mostrar el mensaje,"Hola, soy Goku"', () => {
    //     const message = 'Hola, soy Goku';
    //     const { getByText } = render( <PrimerApp saludar = { message } /> );
    //     expect( getByText( message ) ).toBeInTheDocument();
    // });

    test('debe de mostar < PrimeraApp />', () => {
        const message = 'Hola, soy Goku';
        const wrapper = shallow( <PrimerApp saludar = { message } /> );
        expect(wrapper).toMatchSnapshot();
    })

    test('debe de mostar el subtitulo enviado por los props', () => {
        const message = 'Hola, soy Goku';
        const subTitulo = 'Soy un subtitulo';

        const wrapper = shallow( 
            <PrimerApp 
                saludar = { message }
                subTitulo = { subTitulo }
            /> 
        );
        const textParrafo = wrapper.find('p').text();
        expect( textParrafo ).toBe(subTitulo);
    })
    
});
