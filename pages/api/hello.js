// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
const { google } = require("googleapis");

const arrayOfIds = [
  'castro.hernan5@gmail.com',
  '69e23324c501be67de4b9824929ea295a415e50c697dfa8c5541d0e664af936a@group.calendar.google.com',
  '5cc684487782fc372c48d85861dcdf064fa99df8f8ca7d21a71f5f8b99d00838@group.calendar.google.com'
]

const GOOGLE_PRIVATE_KEY = "-----BEGIN PRIVATE KEY-----\nMIIEvQIBADANBgkqhkiG9w0BAQEFAASCBKcwggSjAgEAAoIBAQCVNkmNVBssumRC\n0i8TVYZ+QoOWyD+oQCecX1LOeIA2gOGrs52CqN+HRvaHBfjTYjkrHR6aw82+/gQj\nnacOhvz8YlTPvmg1xJCIOS5eZvf7JE5PkM/w1woYJVzl5lVxfhGKzQGNfHXQ6Q9Z\ngCAZMIyFj+H1NquE//kCRocTZJaEjqnM1/BsuXAcDb8ZO75+QhR7Sq09t3RDJyXQ\n4eRqIEkQAwiBQ1EjSQkCn/9Rbyn6Zwy7bSPdq2w+TEmxuIT0guNHVhOXeLWYI99X\ntmnA7lIT0tf/miBNhPJMvhYwZ8uynj+vEqBKRzcfClICu5eDr7zH+DCKDBIIaHoH\nP5UpFMiTAgMBAAECggEAK0lzABWgxpKSSJJaRtUebd2U+DbCxOhLtYEv8CckJuuv\nzFSQwtmD82ZCWbyBSa2qoRfTC5n3Q8vEXqK7VqsRlJRgP15hNAwA1AwmqAteMJUB\nRPLhaGCyFHwuXaG7MvAcXbSImUe8lC0wn0ncxgIAGjU6G53PF4f88MyOHjGluvGI\nrYDj5ENsRNgs5ECcpZQhlZSu4mmzOmRYUw3wbfmuznMlpJFMf9qtDfc899VwHLhJ\nenHB409sl8hxJ+2YUamD6ZskP9Xp8JGW1xe3jY5CIX9RS2r1LOIpmueAS/nW18oi\n7V6AoWk3h34QuQzm74xvxTcqlDXqkVDMtEc88lJx/QKBgQDQdPg13GKOzUaGl2/L\nrOva3jqZ38dMyS2CDWWhok6ZqmNjhwgZc6ByraCsmIN3iTG+b3K0IRLsbt1EkW0l\nPtsgzgal0ROTE2MBb0K+dMKqmukV0HUhu6O9o/4vUy1iw7DwlbCrPW089anVpNDq\neVA3Zc887jboABT12wn1zUs1dQKBgQC3PjqxGku16en4Y3Qh3HthCSJ2W+rQQb68\nIuTC94KOKEIfjTbSAt5qArksGrCnjcS7Aji08es/p4KO7UsDgzD9/lXVUd5GL+eG\ni7gDvosVaL/RgrzLrMjch+81MHq2ryho8CXGtJdyw2Sd2jIDRRoIEHMUBuX27HSx\ngEA+Q0vc5wKBgQCQsUBAkpLOsGnNrnvpEkQ8DZj7ibra76Fo7kenI/QO8Zg/U1Ep\n6XprX11xsANBC7e9ibpCkdqCxolLuO3btn9/i8JNgoxlwEUuj73yWTVuGkzD2YgU\nPBxx28zpqICOV2sP87dHhUG32IVkSBzDRCWL7l0k2+y8qKHj7YBCX5deqQKBgD32\ndABJJQrZkz1j2/RLSwkv/pBJWqibYrTZk8N90I7jfCCRLtVrFOyCCT2ptMyjur+F\n68j7+RGoQhS0luYUKa/pnfqpWWEgd8jeXBYgC4Xsytg8vjydK7qu2KuCviwiJKb/\ndbawgHnVKqPaEYlbh4bskQ1Xm9GYeYlAFfk35mJHAoGAEb2zNE6cagdiXUJVbz5H\no0V68en7g6152pDzFFFXxJda+gFtaEn/ofBMA8pnDcdbNbobYtGp/1C4yyD+vE+X\nNAfYP9e2mtz8GPFRbw/E1cEmkwLy20475DbLKUS4qp241vGJoIAiPPRvXIMPtlcN\neV24wnIAwip6gA2H9IYh5z4=\n-----END PRIVATE KEY-----\n";
const GOOGLE_CLIENT_EMAIL = "artefacto-393500@artefacto-393500.iam.gserviceaccount.com";
const GOOGLE_PROJECT_NUMBER = '626908652918';

const SCOPES = ["https://www.googleapis.com/auth/calendar"];

const jwtClient = new google.auth.JWT(
  GOOGLE_CLIENT_EMAIL,
  null,
  GOOGLE_PRIVATE_KEY,
  SCOPES
);

const calendar = google.calendar({
  version: "v3",
  project: GOOGLE_PROJECT_NUMBER,
  auth: jwtClient,
});

export default function handler(req, res) {
  let events = []
  for (let i = 0; i < arrayOfIds.length; i++) {
    // console.log(arrayOfIds)
    calendar.events.list(
      {
        calendarId: arrayOfIds[i],
        timeMin: new Date().toISOString(),
        maxResults: 10,
        singleEvents: true,
        orderBy: "startTime",
      },
      (error, result) => {
        if (error) {
          console.log("Something went wrong: ", error); // If there is an error, log it to the console
        } else {
          if (result.data.items.length > 0) {
            result.data.items.map(element => {
              events = [...events, {
                  id: i,  
                  title: element.summary,
                  start: element.start.dateTime,
                  end: element.end.dateTime
                }]
            });
            return res.status(200).json(events);
            // console.log("List of upcoming events: ", carlos); // If there are events, print them out
          } else {
            console.log("No upcoming events found.", result); // If no events are found
          }
        }
      }
    );
    
  }
}
