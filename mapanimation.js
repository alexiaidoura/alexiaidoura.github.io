// This array contains the coordinates for all bus stops between MIT and Harvard
const busStops = [
  [-71.093729, 42.359244],
  [-71.094915, 42.360175],
  [-71.0958, 42.360698],
  [-71.099558, 42.362953],
  [-71.103476, 42.365248],
  [-71.106067, 42.366806],
  [-71.108717, 42.368355],
  [-71.110799, 42.369192],
  [-71.113095, 42.370218],
  [-71.115476, 42.372085],
  [-71.117585, 42.373016],
  [-71.118625, 42.374863],
];

fetch("https://transloc-api-1-2.p.rapidapi.com/stops.json?agencies=12%2C16&geo_area=35.80176%2C-78.64347%7C35.78061%2C-78.68218&callback=call", {
	"method": "GET",
	"headers": {
		"x-rapidapi-host": "transloc-api-1-2.p.rapidapi.com",
		"x-rapidapi-key": "b7171ad4d3msh01b70be2d7d502ep1ab363jsnb55cd1cacc00"
	}
})
.then(response => {
	console.log(response);
})
.catch(err => {
	console.error(err);
});


// TODO: add your own access token
mapboxgl.accessToken =
  'pk.eyJ1IjoiYWxleGlhcCIsImEiOiJjbDBwZGlxNm8xZHBpM2R0a2g3bXh2bmg2In0.Vwg8n-yrmyv8ZmV6WqEuWQ';

// TODO: create the map object using mapboxgl.map() function
let map = new mapboxgl.Map({
  container: 'map',
  style: 'mapbox://styles/mapbox/streets-v11',
  center: [-71.104081, 42.365554],
  zoom: 14,
});

// TODO: add a marker to the map
let marker = new mapboxgl.Marker()
  .setLngLat([-71.092761, 42.357575])
  .addTo(map);

// counter here represents the index of the current bus stop
let counter = 0;
function move() {
  // TODO: move the marker on the map every 1000ms. Use the function marker.setLngLat() to update the marker coordinates
  // Use counter to access bus stops in the array busStops

  setTimeout(() => {
    if (counter >= busStops.length) return;
    marker.setLngLat(busStops[counter]);
    counter++;
    move();
  }, 1000);
}

// Do not edit code past this point
if (typeof module !== 'undefined') {
  module.exports = { move, counter, marker, busStops };
}
