// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
const { google } = require('googleapis');

export const config = {
  api: {
    externalResolver: true,
  },
};

const arrayOfIds = [
  process.env.SALA_A,
  process.env.SALA_B,
  process.env.SALA_ESTUDIO,
];

const GOOGLE_PRIVATE_KEY = process.env.PRIVATE_KEY;
const GOOGLE_CLIENT_EMAIL = process.env.CLIENT_EMAIL;
const GOOGLE_PROJECT_NUMBER = process.env.PROJECT_NUMBER;

const SCOPES = ['https://www.googleapis.com/auth/calendar'];

const jwtClient = new google.auth.JWT(
  GOOGLE_CLIENT_EMAIL,
  null,
  GOOGLE_PRIVATE_KEY,
  SCOPES,
);

const calendar = google.calendar({
  version: 'v3',
  project: GOOGLE_PROJECT_NUMBER,
  auth: jwtClient,
});

export default function handler(req, res) {
  console.log(req.body);
  let events = [];
  calendar.events.list(
    {
      calendarId: 
        req.body.id === 'salaA'
          ? arrayOfIds[0]
          : req.body.id === 'salaB'
            ? arrayOfIds[1]
            : arrayOfIds[2],
      timeMin: new Date().toISOString(),
      maxResults: 300,
      singleEvents: true,
      orderBy: 'startTime',
    },
    (error, result) => {
      if (error) {
        throw new Error('database failed to connect', error);
        // console.log('Something went wrong: ', error); // If there is an error, log it to the console
      } else if (result.data.items.length > 0) {
        result.data.items.forEach((element) => {
          events = [
            ...events,
            {
              id: req.body.id,
              title: 'Ocupado',
              start: element.start.dateTime,
              end: element.end.dateTime,
            },
          ];
        });
        // console.log(result.data.items)
        // console.log('List of upcoming events: ', events); // If there are events, print them out
        return res.status(200).json(events);
      } else {
        console.log(result)
        console.log('No upcoming events found.'); // If no events are found
      }
    },
  );
}
