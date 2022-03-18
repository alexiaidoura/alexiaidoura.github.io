

  // This array contains the coordinates for all bus stops between MIT and Harvard
  //var map;
   
  const busStops = [
     [-78.838009, 35.874507],
  ]; 

  //"position":{2 items
    //   "lat":35.874507
    //   "lng":-78.838009
    //   }

  async function run() {
    const stops = await getStops();
    //console.log("made it to stops" + typeof stops);
    setTimeout(run, 15000);
  }

  async function getStops(){

    const url = 'https://transloc-api-1-2.p.rapidapi.com/stops.json?agencies=12%2C16&geo_area=35.80176%2C-78.64347%7C35.78061%2C-78.68218&callback=call';
    const response = await fetch(url, {
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

    // {6 items
    //   "rate_limit":1
    //   "expires_in":300
    //   "api_latest_version":"1.2"
    //   "generated_on":"2022-03-15T02:18:30+00:00"
    //   "data":[1 item
    //   0:{10 items
    //   "long_name":"GoTriangle"
    //   "language":"en"
    //   "position":{2 items
    //   "lat":35.874507
    //   "lng":-78.838009
    //   }
    //   "name":"tt"
    //   "short_name":"GoTriangle"
    //   "phone":NULL
    //   "url":"http://www.triangletransit.org/"
    //   "timezone":"America/New_York"
    //   "bounding_box":[...]2 items
    //   "agency_id":"12"
    //   }
    //   ]
    //   "api_version":"1.2"
    //   }

    const json = await response.json();
    //console.log("made it to json");
    console.log(typeof json.data);
    return json.data;
  }

  //TODO: pull in the lnglat coordinates into this array

  /* https://rapidapi.com/transloc/api/openapi-1-2/details

  Several of the API resources allow you to limit the results further via a geographical area filter. You are encouraged to use this feature to improve performance of your application. The geo_area parameter can take on two distinct forms. The first is a rectangle, identified by two sets of geographical coordinates. The second is a point and radius representation. Examples:

  Rectangle form
  geo_area=35.80176,-78.64347|35.78061,-78.68218

  Point and radius form
  geo_area=35.80176,-78.64347|75.5

  Note that in the second form, the second parameter is a decimal number which represents the radius of the circle in meters, within which to return the results.
  */

  //const busStops = [];

  // DONE: add your own access token

  // DONE: add a marker to the map
  // var marker = new mapboxgl.Marker()
  //   .setLngLat([-71.092761, 42.357575]) // TODO: replace with first point from array 
  //   .addTo(map);

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

  run();
 
  // Do not edit code past this point
  if (typeof module !== 'undefined') {
    module.exports = { move, counter, marker, busStops };
  }
