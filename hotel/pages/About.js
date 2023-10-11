import React from 'react'
import DefaultLayout from "@/layouts/default";
import { Cards } from '../components/card';
import { Button, Image, Spacer } from '@nextui-org/react';
import { Reservasection } from '../components/reservasection';
import { Imgroup } from '../components/imgGroup';

const About = () => {
  return (
    <DefaultLayout>
			
      <div className='flex flex-grow flex-col items-stretch text-center'>

          <h1 className="text-center">Una tradicion de familia</h1>
          <section className='flex flex-row' >
              <div className='flex flex-grow flex-col text-center space-y-6' >
                <h2>Conozcanos </h2>
                <p>Con una amplia trayectoria en el mercado de servicios turísticos, el Hotel Aranjuez lleva consigo años de tradición familiar en la atención a sus huéspedes que cada temporada nos elijen para disfrutar de sus vacaciones de verano en Villa Carlos Paz.</p>
                <p>Es por ello que cada día nos esforzamos en mejorar nuestra atención y cumplir con las expectativas de nuestros visitantes, mejorando nuestros servicios y comodidades.</p>
              </div>
              <div>
                <Image alt='about' src='a/b/' />
                <p>IMG ACA</p>
              </div>
          </section>
          
          <Spacer y={20} />
          
          <section className='flex flex-row gap-4 justify-evenly'>
            <Cards src="/a/b" alt="cyber">
               Este es un ejemplo de card pa ver que onda
            </Cards>
            <Cards src="/a/b" alt="cyber">
               Este es un ejemplo de card pa ver que onda
            </Cards>
            <Cards src="/a/b" alt="cyber">
               Este es un ejemplo de card pa ver que onda
            </Cards>
            
          </section>

          <Spacer y={20} />

          <section className='flex flex-grow flex-col '>
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
            <Spacer y={20} />
            <Reservasection/>
          </section>
      </div>
		</DefaultLayout>
  )
}

export default About