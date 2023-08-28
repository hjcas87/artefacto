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
  const [turns, setTurns] = useState([]);
  const [data, setData] = useState(false);

  const server = async () => {
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
        fetchData.map((turn) => {
          (events = [
            ...events,
            {
              ...turn,
              start: new Date(turn.start),
              end: new Date(turn.end),
            },
          ]);
        });
      });
    setTurns(events);
    setData(true);
    return;
  };
  useEffect(() => {
    server();
  }, []);
  return !data ? (
    <div className="w-full h-[600px] flex justify-items-center items-center">
      <div className="sk-chase m-auto">
        <div className="sk-chase-dot" />
        <div className="sk-chase-dot" />
        <div className="sk-chase-dot" />
        <div className="sk-chase-dot" />
        <div className="sk-chase-dot" />
        <div className="sk-chase-dot" />
      </div>
    </div>
  ) : (
    <div>
      <Calendar
        culture="es"
        localizer={localizer}
        defaultView="work_week"
        views={["day", "work_week"]}
        events={turns}
        startAccessor="start"
        // subtract one millisecond from the end date putting midnight dates at 11:59:999
        endAccessor={({ end }) => end.getHours() === 0 && end.getMinutes() === 0 ? new Date(end.getTime() - 1) : end}
        showMultiDayTimes={true}
        min={new Date('2023-08-23T16:00:00')}
        style={{ height: 600 }}
        messages={messages}
      />
    </div>
  );
};

export default CalendarTurns;
