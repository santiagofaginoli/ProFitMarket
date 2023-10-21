import React, { useState, useEffect } from 'react';
import { Accordion, AccordionItem, Button, Spacer } from '@nextui-org/react';

export const Bookingsys = () => {
  const [cantidadPersonas, setCantidadPersonas] = useState('');
  const [resultado, setResultado] = useState('');

  useEffect(() => {
    // Función para manejar el clic en el botón
    const handleClick = () => {
      // Obtiene el valor del campo de entrada
      const cantidadPersonasInput = document.getElementById('cantidad-personas');
      const cantidadPersonas = cantidadPersonasInput.value;
      
      
      const habitacionAleatoria = Math.floor(Math.random() * 15)+1 ; // Cambia el rango según tus necesidades

      // Muestra el valor en el elemento resultado
      setResultado(`La cantidad de personas ingresada es: ${cantidadPersonas} y se les asigno la habitacion ${habitacionAleatoria}`);
    };

    // Agrega un evento de clic al botón
    const mostrarBoton = document.getElementById('mostrar-boton');
    mostrarBoton.addEventListener('click', handleClick);

    // Limpia el evento cuando el componente se desmonta
    return () => {
      mostrarBoton.removeEventListener('click', handleClick);
    };
  }, []); // El segundo argumento [] asegura que este efecto se ejecute solo una vez, similar a componentDidMount



  return (
    <div >
      <p>aaaa</p>
      <div >
        <label for="fecha-inicio" className='mr-2'>Fecha de inicio:</label>
        <input type="date" id="fecha-inicio" name="fecha-inicio" required className='rounded-lg p-2'/>
      </div>
      <Spacer y={2} />


      <div>
        <label for="fecha-fin" className='mr-2'>Fecha de fin:</label>
        <input type="date" id="fecha-fin" name="fecha-fin" required className='rounded-lg p-2'/>
      </div>
      <Spacer y={2} />

      <div>
        <label for="cantidad-personas" className='mr-2'>Cantidad de personas:</label>
        <input type="number" id="cantidad-personas" name="cantidad-personas" min="1" max="5" required className='rounded-lg p-2'/>  
      </div>
      <Button id='mostrar-boton' type='submit' color='primary' > Reservar </Button>
      <p>{resultado}</p>
    </div>
  );
};