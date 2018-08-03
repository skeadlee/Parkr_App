const app = function(){

  var url = 'https://gcc.azure-api.net/traffic/carparks?format=json';
  makeRequest(url, requestComplete);

  //sets view of map to Glasgow City Centre.
  const coords = [55.860773, -4.245175];
  const zoom = 14;
  const mainMap = new MapWrapper(coords, zoom);

};

const makeRequest = function(url, callback) {
  const request = new XMLHttpRequest();
  request.open("GET", url);
  request.addEventListener('load', callback);
  request.send();
};

var requestComplete = function(){
  if(this.status !== 200) return;
  var jsonString = this.responseText;
  var carParks = JSON.parse(jsonString);
  var carPark = carParks[0];
  console.log(carParks);

}




window.addEventListener("DOMContentLoaded", app);