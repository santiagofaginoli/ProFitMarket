import React from 'react'
import DefaultLayout from '../layouts/default'
import { Bookingsys } from '../components/BookingSys'


const Booking = () => {
  return (
    <div>
        <DefaultLayout>
            <p className='text-2xl text-center font-bold'> Reservas</p>
            <p>Para registrar tu reserva, llena los datos del formulario!!</p>
            <Bookingsys/>

          
        </DefaultLayout>
    </div>
  )
}

export default Booking