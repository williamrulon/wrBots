//when you click the button runs the function
document.getElementById('button').onclick = function() {
  var userInput = document.getElementById('input').value;
  //calling api
  var api = "http://api.giphy.com/v1/gifs/random?";
  var apiKey = "&api_key=dc6zaTOxFJmzC";
  var query = "&q=" + userInput;
  //combining all of the above veriable to be make a proper url
  var url = api + apiKey + query;
  // ^ this stuff works v this stuff doesnt.
  document.getElementById('gif').src = JASON.jsonPath(url, "$.images.original.url",
   {resultType:"$.giphy.data[0].images.original.url"});

  //res2 = jsonPath(o, $.giphy.data[0].images.original.url;, {resultType:$.giphy.data[0].images.original.url;}).toJSONString();
};
