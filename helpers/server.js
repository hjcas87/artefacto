export const server = async (id, startWeek, setTurns) => {
  let events = [];
  await fetch('/api/turns', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ id, startWeek }),
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
  // setData(true);
};
