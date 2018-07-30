const CLIENT_ID = 'LHZBUHZTDO3D5TKRLYY5YIFZWRXXDWO3JPKOVOX4VBEYB3GM';
const CLIENT_SECRET = 'T3FYAPM5XPQFOUOWCQVDTSZU1JWFTDRFN1IU5AMX55MRT4ES';

export const getAll = () =>
  fetch(`https://api.foursquare.com/v2/venues/search?client_id=${CLIENT_ID}&client_secret=${CLIENT_SECRET}&v=20180323&locale=en&radius=3000&ll=51.381417,-2.359043&limit=50&query=tea|coffee`)
    .then(function (res) {
      return res.json();
    })
    .catch(function (err) {
      console.log('An error occured while fetching foursquare places api', err);
    });

export const getVenueDetails = (id) =>
  fetch(`https://api.foursquare.com/v2/venues/${id}?client_id=${CLIENT_ID}&client_secret=${CLIENT_SECRET}&locale=en&v=20180323`)
    .then(function (res){
      return res.json();
    })
    .catch(function (err) {
      console.log('An error occured while fetching foursquare places api', err);
    });