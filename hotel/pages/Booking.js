import React from 'react'
import DefaultLayout from '../layouts/default'
import { Bookingsys } from '../components/BookingSys'

const Booking = () => {
  return (
    <div>
        <DefaultLayout>
            <h1> Reservas</h1>
            <p>Haz tu reserva en la tabla de abajo!!</p>
            <Bookingsys/>

          
        </DefaultLayout>
    </div>
  )
}

export default Booking