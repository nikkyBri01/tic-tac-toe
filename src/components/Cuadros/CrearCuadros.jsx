import React from 'react'

export const CrearCuadros = ({valor,  cuadradoClick}) => {

  return (
    <>
      <button className="square" onClick={cuadradoClick}> {valor} </button>
    </>
     
  )
}
