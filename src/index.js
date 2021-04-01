import React from 'react';
import ReactDom from 'react-dom'
import { PrimerApp } from './PrimeraApp';
//import { CounterApp } from './CounterApp';

import './index.css';

const divRoot = document.querySelector('#root');
ReactDom.render(<PrimerApp saludar='Hola, soy Goku' subTitulo='Un gerrero saiyajin'/>, divRoot);
// ReactDom.render(<CounterApp value={ 10 }/>, divRoot);