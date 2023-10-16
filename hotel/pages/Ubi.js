import React from 'react'
import DefaultLayout from '../layouts/default'

const Ubi = () => {
  return (
    <div>
        <DefaultLayout>
            <h1> Ubicacion</h1>
            <p>Estamos en el corazon de Villa Carlos Paz!!</p>
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3405.0557830612124!2d-64.4887235120103!3d-31.412589129695732!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x942d6640d6777c71%3A0x420385ae22e5669c!2sAranjuez!5e0!3m2!1ses-419!2sar!4v1697397930697!5m2!1ses-419!2sar" className='w-full h-5/6' aria-ex allowfullscreen loading="lazy" referrerpolicy="no-referrer-when-downgrade" aria-expanded='true' ></iframe>
        </DefaultLayout>
    </div>
  )
}

export default Ubi