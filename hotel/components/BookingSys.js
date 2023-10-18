import React, { useState } from 'react';
import { Accordion, AccordionItem, Button, Spacer } from '@nextui-org/react';

export const Bookingsys = () => {
  const reservas = [
    { dia: 'Lunes', parcial: false, completa: true },
    { dia: 'Martes', parcial: true, completa: false },
    { dia: 'Miércoles', parcial: false, completa: true },
    // Agrega más días y reservas según sea necesario
  ];

  const [selectedOptions, setSelectedOptions] = useState({});

  const handleOptionChange = (dia, option) => {
    setSelectedOptions((prevOptions) => ({
      ...prevOptions,
      [dia]: option,
    }));
  };

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
        <input type="number" id="cantidad-personas" name="cantidad-personas" min="1" required className='rounded-lg p-2'/>  
      </div>
      <Button type='submit' color='primary'> Reservar </Button>
    </div>
  );
};