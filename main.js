import 'leaflet/dist/leaflet.css';


import {computeDestinationPoint} from 'geolib';
import { map, tileLayer,marker, polygon } from 'leaflet'

let canvas = map('map').setView([19.449764, -99.066804], 14);

tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(canvas);

let Npoint = computeDestinationPoint(
  { latitude: 19.449764, longitude: -99.066804 },
  5000,
  45
);

let Spoint = computeDestinationPoint(
  { latitude: 19.449764, longitude: -99.066804 },
  5000,
  135
);

let Epoint = computeDestinationPoint(
  { latitude: 19.449764, longitude: -99.066804 },
  5000,
  225
);

let Wpoint = computeDestinationPoint(
  { latitude: 19.449764, longitude: -99.066804 },
  5000,
  315
);

const {latitude:lanOne, longitude:longOne} = Npoint;
const {latitude:lantwo, longitude:longTwo} = Spoint;
const {latitude:lanThree, longitude:longThree} = Epoint;
const {latitude:lanFour, longitude:longFour} = Wpoint;

marker([lanOne, longOne]).addTo(canvas);
marker([lantwo, longTwo]).addTo(canvas);
marker([lanThree, longThree]).addTo(canvas);
marker([lanFour, longFour]).addTo(canvas);

polygon([[lanOne, longOne],[lantwo, longTwo],[lanThree, longThree],[lanFour, longFour]], {color: 'red'}).addTo(canvas);
