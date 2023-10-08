import { Button } from '@nextui-org/react';
import React from 'react'

export const Reservasection = () => {
    return ( 
        
        <div className='flex flex-col items-center flex-grow items space-y-14 ' >
        <h2>¿Listo para reservar?</h2>
        <Button color='danger' variant='solid' className='w-48 h-12' >Reservar</Button>
      </div>

     );
}
