var api = "http://api.giphy.com/v1/gifs/random?";
var apiKey = "&api_key=dc6zaTOxFJmzC";
var query = "&q=rainbow";

function setup() {
  noCanvus();
  var url = api + apiKey + query;
  loadJSON(url, gotData);
}

function getData(giphy) {
  createImg(giphy.data[0].images.original.url);
