import React, { useState } from 'react';
import { Accordion, AccordionItem } from '@nextui-org/react';

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
    <Accordion>
      {reservas.map((reserva, index) => (
        <AccordionItem key={index} aria-label={`Accordion ${index + 1}`} title={reserva.dia}>
          <div>
            <p>Elija una opción:</p>
            <div className='flex gap-4'>
              <label className='flex gap-1' >
                <input
                  type="radio"
                  name={`opcion_${index}`}
                  value="parcial"
                  checked={selectedOptions[reserva.dia] === 'parcial'}
                  onChange={() => handleOptionChange(reserva.dia, 'parcial')}
                />
                Reserva Parcial
              </label>
              
              <label className='flex gap-1' >
                <input
                  type="radio"
                  name={`opcion_${index}`}
                  value="completa"
                  checked={selectedOptions[reserva.dia] === 'completa'}
                  onChange={() => handleOptionChange(reserva.dia, 'completa')}
                />
                Reserva Completa
              </label>
            </div>
          </div>
        </AccordionItem>
      ))}
    </Accordion>
  );
};