export interface LoginForm {
    email: string;
    password: string;
}

export interface Measurement{
    id: Number;
    station: string;
    edited: Number;
    date: Date;
    time: string;
    temp: Number;
    dewp: Number;
    stp: Number;
    slp: Number;
    visib: Number;
    wdsp: Number;
    prcp: Number;
    sndp: Number;
    frshtt: string;
    cldc: Number;
    winddir: Number;
}

export const measurements = [
  {
    id: 1,
    station: "239330",
    edited: null,
    date: "2023-04-10",
    time: "18:25:05",
    temp: -6.4,
    dewp: -12.3,
    stp: 1015.8,
    slp: 1015.4,
    visib: 17.5,
    wdsp: 11.6,
    prcp: 0.05,
    sndp: 12.4,
    frshtt: "111000",
    cldc: 59.4,
    winddir: null
},
{
    id: 2,
    station: "239331",
    edited: null,
    date: "2023-04-10",
    time: "18:25:05",
    temp: -3.4,
    dewp: -19.6,
    stp: 1022,
    slp: 1024.3,
    visib: 5.5,
    wdsp: 19.1,
    prcp: 0,
    sndp: 0,
    frshtt: "100000",
    cldc: 99.9,
    winddir: null
},
{
    id: 3,
    station: "783250",
    edited: null,
    date: "2023-04-10",
    time: "18:25:05",
    temp: 12.4,
    dewp: 7.7,
    stp: 1010.2,
    slp: 1014.3,
    visib: 10,
    wdsp: 13.3,
    prcp: 2.32,
    sndp: 0,
    frshtt: "010000",
    cldc: 87.1,
    winddir: null
}
  ];


  

