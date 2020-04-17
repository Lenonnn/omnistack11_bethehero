import React from 'react';  // Importa o react
import ReactDOM from 'react-dom';  // Faz a integração do REACT com o Navegador
import App from './App'; // Importa o arquivo app.js da pasta src


ReactDOM.render(     // Usa o ReactDOM para colocar em tela
 
    <App />,         // Dentro desse contexto, está sendo colocado o App

  document.getElementById('root') // Coloca o App acima dentro da ID "root"
);
