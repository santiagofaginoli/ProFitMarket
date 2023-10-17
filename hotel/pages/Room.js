import React from 'react'

import { Reservasection } from '../components/reservasection'
import DefaultLayout from "../layouts/default"
import { title, subtitle } from "@/components/primitives";
const Room = () => {
  return (
    <div> 
      <DefaultLayout> 

        <h1 className={title()}>Sientase como en casa</h1>

        <section>
            <h2>Habitaciones</h2>
            <p>Nuestro hotel está pensado para que se encuentre en la comodidad y confort como si fuera su casa. Para ello, contamos con 31 habitaciones y 8 departamentos equipados con:</p>
            <ul className='text-center'>
                <li>Aire acondicionado split</li>
                <li>Teléfono con discado directo</li>
                <li>Amplios baños privados</li>
                <li>Televisión LED 26" por cable</li>
                <li>Ventiladores de techo</li>
                <li>Calefacción individual</li>
                <li>Vista a las sierras cordobesas</li>
                <li>Internet inalámbrico WI FI</li>
                <li>Caja de seguridad individual</li>
            </ul>

            <p>Las Habitaciones pueden ser dobles, triples, o cuádruple y los departamentos, cuádruple o quíntuple, todos poseen amplios placares, y un servicio personalizado de mucama. Contamos con cocheras cubiertas y descubiertas y vigilancia 24 horas.</p>
            <div className='grid grid-cols-6 justify-evenly' >


<p>[IMAGEN ACA]</p>
<p>[IMAGEN ACA]</p>
<p>[IMAGEN ACA]</p>
<p>[IMAGEN ACA]</p>
<p>[IMAGEN ACA]</p>
<p>[IMAGEN ACA]</p>
<p>[IMAGEN ACA]</p>
<p>[IMAGEN ACA]</p>
<p>[IMAGEN ACA]</p>
<p>[IMAGEN ACA]</p>
<p>[IMAGEN ACA]</p>
<p>[IMAGEN ACA]</p>
</div>
            <Reservasection/>


        </section>



     </DefaultLayout>
  </div>
  )
}

export default Room