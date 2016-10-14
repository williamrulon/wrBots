function (){
  document.getElementById('button').onclick = function() {
    var userInput = document.getElementById('input').value;
    var api = "http://api.giphy.com/v1/gifs/random?";
    var apiKey = "&api_key=dc6zaTOxFJmzC";
    var query = "&q=" + userInput;
    function initialize() {
      var url = api + apiKey + query;
      document.getElementById('gif').replace(src) = endpoint;
    };

    function gotData(giphy){
        document.getElementById('gif').src = function() {
      }
    };
    function changeImage(url, data) {
      var endpoint = $.giphy.data[0].images.original.url;
  //I just need to figure out how to change the src of my gif
  //This is the JSON rought to the img (giphy.data[0].images.original.url);
  //getJSON(url, getData);
    }
  }
}
