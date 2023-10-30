import React, { useState, useEffect } from 'react';
import { Accordion, AccordionItem, Button, Spacer } from '@nextui-org/react';

export const Bookingsys = () => {
  const [cantidadPersonas, setCantidadPersonas] = useState('');
  const [resultado, setResultado] = useState('');
  const [reservas, setReservas] = useState([]);
  const [habitacionActual, setHabitacionActual] = useState(1); // Inicializa el número de habitación en 1

  const agregarReserva = () => {
    const cantidadPersonasInput = document.getElementById('cantidad-personas');
    const cantidadPersonas = cantidadPersonasInput.value;

    // Crea un objeto de reserva
    const nuevaReserva = {
      id: reservas.length + 1, // Puedes usar otro método para generar IDs únicos
      fechaInicio: document.getElementById('fecha-inicio').value,
      fechaFin: document.getElementById('fecha-fin').value,
      habitacion: habitacionActual, // Usa el número de habitación actual
      cantidadPersonas: cantidadPersonas,
    };

    // Incrementa el número de habitación actual para la próxima reserva
    setHabitacionActual(habitacionActual + 1);

    // Agrega la nueva reserva al estado de reservas
    setReservas([...reservas, nuevaReserva]);

    // Muestra el valor en el elemento resultado
    setResultado(`Reserva creada para ${cantidadPersonas} personas en la habitación ${nuevaReserva.habitacion}`);
  };

  return (
    <div>
      <p>aaaa</p>
      <div>
        <label htmlFor="fecha-inicio" className="mr-2">
          Fecha de inicio:
        </label>
        <input type="date" id="fecha-inicio" name="fecha-inicio" required className="rounded-lg p-2" />
      </div>
      <Spacer y={2} />

      <div>
        <label htmlFor="fecha-fin" className="mr-2">
          Fecha de fin:
        </label>
        <input type="date" id="fecha-fin" name="fecha-fin" required className="rounded-lg p-2" />
      </div>
      <Spacer y={2} />

      <div>
        <label htmlFor="cantidad-personas" className="mr-2">
          Cantidad de personas:
        </label>
        <input type="number" id="cantidad-personas" name="cantidad-personas" min="1" max="5" required className="rounded-lg p-2" />
      </div>
      <Button id="mostrar-boton" type="submit" color="primary" onClick={agregarReserva}>
        Reservar
      </Button>
      <p>{resultado}</p>

      <div>
        <h2>Reservas:</h2>
        <ul>
          {reservas.map((reserva) => (
            <li key={reserva.id}>
              Reserva #{reserva.id} - Habitación {reserva.habitacion} - Personas: {reserva.cantidadPersonas} - Desde: {reserva.fechaInicio} Hasta: {reserva.fechaFin}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
