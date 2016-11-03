$(function (){

  var $orders = $('#orders');
  $.ajax({
  type: 'GET',
  url: 'http://rest.learncode.academy/api/johnbob/friends',
  success: function(orders) {
    $.each(orders, function(i, order) {
      $orders.append('<li>name: '+ order.name +', age: '+ order.age +'</li>');
      });
    }
  });

});
