import React from 'react'
import DefaultLayout from '../layouts/default'
import { Reservasection } from '../components/reservasection'
import { title, subtitle } from "@/components/primitives";

const Vids = () => {
  return (
    <div>
        <DefaultLayout>
            <h1 className={title()} > Videos</h1>
            <p>[VIDEO ACA]</p>
            <p>[VIDEO ACA]</p>
            <p>[VIDEO ACA]</p>
            <Reservasection/>
        </DefaultLayout>
    </div>
  )
}

export default Vids