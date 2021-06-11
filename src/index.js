import React from 'react';
import ReactDOM from 'react-dom';

import dataArray from './data';
import App from './Components/App';

ReactDOM.render(<App dataArr={dataArray} />, document.getElementById('root'))