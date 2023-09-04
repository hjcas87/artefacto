export const exploreWorlds = [
  {
    id: 'world-1',
    imgUrl: './salaA.jpg',
    title: 'SALA A',
    description: 'Amplia',
    instruments: [
      // {
      //   img: './orange.webp',
      //   desc: '111111',
      // },
      // {
      //   img: './hotrod.webp',
      //   desc: '',
      // },
      // {
      //   img: './hartke.webp',
      //   desc: '',
      // },
      // {
      //   img: './pearl.webp',
      //   desc: '',
      // },
    ],
  },
  {
    id: 'world-2',
    imgUrl: './salaEstudio2.jpg',
    title: 'SALA ESTUDIO',
    salaDesc: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ex reiciendis minima similique consequuntur sit asperiores nemo voluptatibus quidem nihil vel magnam dolorem laboriosam aut ipsam, quam molestias architecto temporibus quo.',
    instruments: [
      {
        title: 'Fender Twin Reverb',
        img: './twinreverb.jpg',
        esp: [
          '85 vatios',
          'Dos altavoces Jensen® C-12K de 12"',
          'Dos canales (Normal, Vibrato)',
          'Reverb Fender y trémolo (“vibrato”),'
        ] 
      },
      {
        title: 'Vox',
        img: './vox.jpg',
        esp: [
          'Amplificador combo para guitarra a válvulas de 30 W, 3 x 12AX7 preamp y 4 x EL84 potencia',
          '2 Altavoces Celestion G12M Greenback de 12" a 16 Ohm',
          'Entradas de jack, Normal (high y low) Top Boost (high y low) Retorno FX y Footswitch',
          'Salidas jack de altavoz externo, de altavoz de extensión y envío FX'
        ]
      },
      {
        title: 'Roland Jazz Chorus',
        img: './roland.jpg',
        esp: [
          'Construcción: Transistor',
          'Potencia: 2x 60 W',
          'Canales: 2',
          'Equipamiento altavoces: 2x 12"',
          'Regulación sonido: 2 graves, medios y agudos',
          'Via inserción: Serial/paralelo.',
          'Efectos: Reverb y chorus.'
        ]
      },
      // {
      //   img: './ampeg.jpg',
      //   desc: 'La serie de tambores Vision Birch de Pearl se basa en la fórmula Vision original, que proporciona un tono maravillosamente equilibrado. Este set de batería Vision con acabado en Cromo Pulido consiste en un bombo de 22 pulgadas, toms de 12 y 13 pulgadas, un tom de piso de 16 pulgadas y una caja a juego de 14 pulgadas.',
      // },
      // {
      //   img: './gretch.jpg',
      //   desc: 'La serie de tambores Vision Birch de Pearl se basa en la fórmula Vision original, que proporciona un tono maravillosamente equilibrado. Este set de batería Vision con acabado en Cromo Pulido consiste en un bombo de 22 pulgadas, toms de 12 y 13 pulgadas, un tom de piso de 16 pulgadas y una caja a juego de 14 pulgadas.',
      // },
      // {
      //   img: './consalaestudio.jpg',
      //   desc: 'La serie de tambores Vision Birch de Pearl se basa en la fórmula Vision original, que proporciona un tono maravillosamente equilibrado. Este set de batería Vision con acabado en Cromo Pulido consiste en un bombo de 22 pulgadas, toms de 12 y 13 pulgadas, un tom de piso de 16 pulgadas y una caja a juego de 14 pulgadas.',
      // },
    ],
  },
  {
    id: 'world-3',
    imgUrl: './salaB.jpg',
    title: 'SALA B',
    instruments: [
      // {
      //   img: './orange.webp',
      //   desc: '3333',
      // },
      // {
      //   img: './hotrod.webp',
      //   desc: '',
      // },
      // {
      //   img: './hartke.webp',
      //   desc: '',
      // },
      // {
      //   img: './pearl.webp',
      //   desc: '',
      // },
    ],
  },
];
export const navButtons = [
  {
    href: '#inicio',
    title: 'INICIO' 
  },
  {
    href: '#nosotros',
    title: 'NOSOTROS' 
  },
  {
    href: '#salas',
    title: 'SALAS' 
  },
  {
    href: '#turnos',
    title: 'TURNOS' 
  },
  {
    href: '#producciones',
    title: 'PRODUCCIONES' 
  },
  {
    href: '#ubicacion',
    title: 'UBICACIÓN' 
  },
];

export const socials = [
  {
    name: 'instagram',
    link: 'https://www.instagram.com/artefactoestudiomdp/',
    url: '/instagram.svg',
  },
  {
    name: 'facebook',
    link: 'https://www.facebook.com/ArtefactoEstudioySalas',
    url: '/facebook.svg',
  },
];

export const messages = {
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
