import React from 'react'
import DefaultLayout from '../layouts/default'
import { title, subtitle } from "@/components/primitives";
import { Menudrop } from '../components/menudrop'

const Resto = () => {
  return (
    <div>
        <DefaultLayout>
          <div> 

            <h1 className={title()} >Restaurante</h1>
            <section className='flex flex-row'>
            <div className='flex flex-col'>
             <p>El servicio de comida es único en Villa Carlos Paz; le ofrecemos a nuestros clientes un Buffet a Diente Libre.</p>
             <p>Con tres ensaladas, con dos entradas, dos platos principales, y siete postres a elección.</p>
             <p>Una gastronomía cuidada y selecta con los más variados platos. Un amplio comedor con una Capacidad para 100 personas, y comida que nos distinguió en la Villa con La Cinta Azul de la Popularidad.</p>
            </div>
            <div>
             <p>[IMG ACA]</p>
            </div> 
            </section>
            <section>
              <h1>Playroom</h1>
              <p>Contamos con un hermoso playroom para los más pequeños.</p>
              <p>[IMG ACA]</p>

            </section>

             <Menudrop/>
          </div>  

        </DefaultLayout>


    </div>
  )
}

export default Resto