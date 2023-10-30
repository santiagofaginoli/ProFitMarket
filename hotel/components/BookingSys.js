import React, { useState, useEffect } from 'react';
import { Button, Spacer,Table, TableHeader, TableBody, TableColumn, TableRow, TableCell } from '@nextui-org/react';

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

      <div>
        <h2 className='text-center font-bold'>Reservas</h2>
        <Table aria-label="Reservas table">
          <TableHeader>
            <TableColumn>ID</TableColumn>
            <TableColumn>Fecha de Inicio</TableColumn>
            <TableColumn>Fecha de Fin</TableColumn>
            <TableColumn>Habitación</TableColumn>
            <TableColumn>Cantidad de Personas</TableColumn>
          </TableHeader>
          <TableBody>
            {reservas.map((reserva) => (
              <TableRow key={reserva.id}>
                <TableCell>{reserva.id}</TableCell>
                <TableCell>{reserva.fechaInicio}</TableCell>
                <TableCell>{reserva.fechaFin}</TableCell>
                <TableCell>{reserva.habitacion}</TableCell>
                <TableCell>{reserva.cantidadPersonas}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
};
