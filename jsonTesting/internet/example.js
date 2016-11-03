$(document).ready(function () {
  $('#get-data').click(function () {
    var showData = $('#show-data');

    $.getJSON('example.json', function (data) {
      console.log(data);

      var items = data.items.map(function (item) {
        return item.key + ': ' + item.value;
      });

      showData.empty();

      if (items.length) {
        var content = '<li>' + items.join('</li><li>') + '</li>';
        var list = $('<ul />').html(content);
        showData.append(list);
      }
    });

    showData.text('Loading the JSON file.');
  });
});
/*Besides converting parts of the object to an unordered list, the full object is also printed in the browser’s debugging console. The output is generated in the <div> element with the ID show-data. Even though the element is being reset for every request, we only fill it if the resulting JSON object contains any items at all. Of course, for our example the data is fixed, however, in general any kind of response is possible.

Note that we also set some text for the output <div>. If we insert some (artificial) delay for the JSON retrieval, we will see that this actually executes before any result of the $.getJSON request is displayed. The reason is simple: By default $.getJSON is non-blocking, i.e., async. Therefore, the callback will be executed at some (unknown) later point in time.

Distilling the source to obtain the crucial information yields the following block:*/

$('#get-data').click(function () {
  $.getJSON('example.json', function (data) {
    console.log(data);
  });
});
