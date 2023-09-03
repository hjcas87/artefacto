'use client';

import { useEffect, useState } from 'react';
import { Calendar, dateFnsLocalizer } from 'react-big-calendar';
import { format, parse, startOfWeek, getDay } from 'date-fns';
import esES from 'date-fns/locale/es';
import 'react-big-calendar/lib/css/react-big-calendar.css';

const locales = {
  es: esES,
};

const localizer = dateFnsLocalizer({
  format,
  parse,
  startOfWeek,
  getDay,
  locales,
});

const messages = {
  allDay: 'Todo el día',
  previous: '<',
  next: '>',
  today: 'Hoy',
  work_week: 'Semana',
  month: 'Mes',
  week: 'Semana',
  day: 'Día',
  agenda: 'Agenda',
  date: 'Fecha',
  time: 'Hora',
  event: 'Evento',
  noEventsInRange: 'No hay eventos en este rango',
  showMore: (total) => `+ Ver más (${total})`,
};

const CalendarTurns = ({ id }) => {
  const [turns, setTurns] = useState(null);
  const [data, setData] = useState(false);

  const server = async () => {
    if (!turns) {
      let events = [];
      await fetch('/api/turns', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ id }),
      })
        .then((res) => res.json())
        .then((fetchData) => {
          fetchData.forEach((turn) => {
            events = [
              ...events,
              {
                ...turn,
                start: new Date(turn.start),
                end: new Date(turn.end),
              },
            ];
          });
        });
      setTurns(events);
      setData(true);
    }
  };
  useEffect(() => {
    server();
  }, []);
  return (
    data && (
      <div>
        <Calendar
          culture="es"
          localizer={localizer}
          defaultView="work_week"
          views={['day', 'work_week']}
          events={turns}
          startAccessor="start"
          // subtract one millisecond from the end date putting midnight dates at 11:59:999
          endAccessor={({ end }) => {
            if (end.getHours() === 0 && end.getMinutes() === 0) {
              return new Date(end.getTime() - 1);
            }
            if (end.getHours() === 0 && end.getMinutes() !== 0) {
              const minutosDeMas = end.getMinutes() * 60000;
              // console.log(end.getMinutes());
              // console.log(minutosDeMas);
              return new Date(end.getTime() - minutosDeMas - 1000);
            }
            return end;
            // end.getHours() === 0 && end.getMinutes() === 0 ? new Date(end.getTime() - 1) : end
          }}
          showMultiDayTimes
          min={new Date('2023-08-23T16:00:00')}
          style={{ height: 600 }}
          messages={messages}
          eventPropGetter={(event) => {
            const bgEvent = event.id === 'salaA'
                ? 'rgb(63, 81, 181)'
                : event.id === 'salaB'
                  ? 'rgb(244, 81, 30)'
                  : 'rgb(167 143 46)';
            return { style: { backgroundColor: bgEvent } };
          }}
        />
      </div>
    )
  );
};

export default CalendarTurns;
