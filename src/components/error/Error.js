import React from 'react'
import { Link } from 'react-router-dom'
import '../../App.css'
export const Error = () => {
  return (
    <div>
      <section className='error-pagina'>
        <h1 className='titulo-error'>404 Not Found</h1>
        <p className='txt-error'>Esta pagina no existe</p>
        <Link className='btn-error' to='/inicio'>Volver a Inicio</Link>
        </section>
    </div>
  )
}
