import { useState } from "react";
import { CrearCuadros } from "../Cuadros/CrearCuadros";
import React from 'react'

export const Tablero = () => {
    const [EsX, setEsX] = useState(true);
    const [cuadros, setCuadros] = useState(Array(9).fill(null)); 
  
    function jugarClick(i) {
    //No sobreescribir o calcular quién gana
      if (cuadros[i] || calcularGanador(cuadros)) {
        return;
      }
  
      const sigCuadrados = cuadros.slice();
      if (EsX) {
        sigCuadrados[i] = "X";
      } else {
        sigCuadrados[i] = "O";
      }
      setCuadros(sigCuadrados);
      setEsX(!EsX);
    }
  
    const ganador = calcularGanador(cuadros);
    let estado;
    if (ganador) {
      estado = "Ganador: " + ganador;
    } else {
      estado = "Siguiente jugador: " + (EsX ? "X" : "O");
    }
  
    return (
      <>
        <div className="status">{estado}</div>

        <div className="fila">
          {/* Invocando un componente */}
          <CrearCuadros valor={cuadros[0]}  cuadradoClick={() => jugarClick(0)}/>
          <CrearCuadros valor={cuadros[1]}  cuadradoClick={() => jugarClick(1)}/>
          <CrearCuadros valor={cuadros[2]}  cuadradoClick={() => jugarClick(2)}/>
        </div>
  
        <div className="fila">
          <CrearCuadros valor={cuadros[3]}  cuadradoClick={() => jugarClick(3)}/>
          <CrearCuadros valor={cuadros[4]}  cuadradoClick={() => jugarClick(4)}/>
          <CrearCuadros valor={cuadros[5]}  cuadradoClick={() => jugarClick(5)}/>
        </div>
  
        <div className="fila">  
          <CrearCuadros valor={cuadros[6]}  cuadradoClick={() => jugarClick(6)}/>
          <CrearCuadros valor={cuadros[7]}  cuadradoClick={() => jugarClick(7)}/>
          <CrearCuadros valor={cuadros[8]}  cuadradoClick={() => jugarClick(8)}/>
        </div>
      </>
    );
}


  //Funcion que define el ganador
  function calcularGanador(cuadros) {
    const lineas = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6]
    ];
    for (let i = 0; i < lineas.length; i++) {
      const [a, b, c] = lineas[i];
      if (cuadros[a] && cuadros[a] === cuadros[b] && cuadros[a] === cuadros[c]) {
        return cuadros[a];
      }
    }
    return null;
  }
  