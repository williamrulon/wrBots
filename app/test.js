
$(function() {
  var json = {
  "data": {
    "type": "gif",
    "url": "http://giphy.com/gifs/cat-sweet-eyes-9JLQKmspQAMWQ",
    "image_original_url": "http://media2.giphy.com/media/9JLQKmspQAMWQ/giphy.gif"
  }};
    var result = $.grep(json.data, function(element, index) {
    return (element.type === 'gif');
    alert(result);
    });
});
