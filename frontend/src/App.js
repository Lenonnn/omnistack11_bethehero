import React from 'react';

import './global.css';

import Logon from './pages/Logon';

// Desenvolvimento será passado como parâmetro para index.js
// Componente do React é uma função que retorna HTML
// Quando o HTML está escrito dentro do HTML temos o JSX ( JavasCript XML)

function App() {
//Stoped in 00:37:00

  return (
    <Logon/>
  );

  //////////Apresentção de conceitos///////////////////////////////
  // Aqui o conceito de estado
  // Quando o estado de uma variável mudar
  // O 'useState' vai renderizar novamente e atualizar
  // O conceito de imutabilidade 
  // Proibe a alteração de uma variável de forma direta
  // Portanto ele deve ser sobreposto
  // O metodo UseState retorna um array com 2 posicções
  // Array [ valorDaVariavel , funcaoDeAtualizarOValor] // essa função troca/atualiza o valor da variável
  //   const [counter, setCounter] = useState(0); // passo o valor da variave e funcao de atualização
  //   function increment(){
  //     setCounter(counter +1) ; // funcao que atualiza valor de count
  //   }
  //   return (
  //     <div>
  //     <Header>Contador: {counter} </Header>
  //     <button onClick={increment}>Increment</button>
  // </div>
  // );

}

export default App;
