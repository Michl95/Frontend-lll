import React from 'react';
import ReactDOM from 'react-dom/client';
import { CompoHijo } from './CompoHijo.jsx';
import { CompoPadre } from './CompoPadre.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <CompoPadre>
      <CompoHijo nombre='Michael'/>
    </CompoPadre>
  </React.StrictMode>,
)
