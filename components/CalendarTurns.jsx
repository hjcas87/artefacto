'use client';

import { useEffect, useState } from 'react';
import { Calendar, dateFnsLocalizer } from 'react-big-calendar';
import {
  format,
  parse,
  startOfWeek,
  getDay,
  isSunday,
  isSaturday,
  nextMonday,
} from 'date-fns';
import esES from 'date-fns/locale/es';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import Spinner from './Spinner';
import { server } from '../helpers/server';
import { messages } from '../constants';

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

const CalendarTurns = ({ id, setIsLoaded }) => {
  const [turns, setTurns] = useState(null);
  const today = new Date();
  const startWeek = startOfWeek(new Date(today), { weekStartsOn: 1 })

  useEffect(() => {
    // console.log(result)
    setIsLoaded(true);
    server(id, startWeek, setTurns);
  }, []);

  return !turns ? (
    <Spinner />
  ) : (
    <div>
      <Calendar
        defaultDate={
          isSaturday(today) || isSunday(today) ? nextMonday(today) : today
        }
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
            return new Date(end.getTime() - minutosDeMas - 1000);
          }
          return end;
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
  );
};

export default CalendarTurns;
