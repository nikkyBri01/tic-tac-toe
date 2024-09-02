// import logo from './logo.svg';
import './App.css';
import { Tablero } from './components/Tablero/Tablero';

function App() {
  return (
    <div className="App">
      <header className="App-header">        
        <h1>Juego TIC-TAC-TOE</h1>
      </header>

      <Tablero/>
    </div>
  );
}

export default App;
