import './App.css';
import logotipor from './img/logotipor.png'

function App() {
  return (
    <div className="App">
      <div className='logo-contenedor'>
        <img
          src={logotipor}
          className='logo'
          alt='Logo de Ritmosss' />
      </div>
      <div className='contenedor-calculadora'>
        <div className='fila'></div>
        <div className='fila'></div>
        <div className='fila'></div>
        <div className='fila'></div>
      </div>
    </div>
  );
}

export default App;
