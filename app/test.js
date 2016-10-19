  var api = "http://api.giphy.com/v1/gifs/random?&api_key=dc6zaTOxFJmzC&tag=";
  document.getElementById('button').onclick = function gif() {
    var userInput = document.getElementById('input').value;
    document.getElementById('gif').src = api + userInput;
    console.log(api + userInput);
  };
