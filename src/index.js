import React from 'react';
import ReactDom from 'react-dom'
import { CounterApp } from './CounterApp';

import './index.css';

const divRoot = document.querySelector('#root');
ReactDom.render(<CounterApp value={ 10 }/>, divRoot);