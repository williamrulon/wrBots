var weather;

function preload() {
  weather = loadJSON("Arcadia.json");
}

function setup() {
  createCanvas(400, 400);
}
function draw() {
  background(0);

  fill(weather.forecast);
}









//api = "http://api.wunderground.com/api/e6e7616a96f73169/forecast/geolookup/conditions/q/IN/Arcadia.json"
