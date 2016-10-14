var builder = require('botbuilder');
var restify = require('restify');
var jQuery = require('jQuery');
var jsdom = require('jsdom');

var server = restify.createServer();
server.listen(process.env.port || process.env.PORT || 3978, function () {
    console.log('%s listening to %s', server.name, server.url);
});
var connector = new builder.ChatConnector({
    appId: "84a47283-7f29-492f-b1c7-7d37cccc79fd",
    appPassword: "MO2jUNoQxdDcWsxz7GksAZn"
});
var bot = new builder.UniversalBot(connector);
server.post('/api/messages', connector.listen());


bot.dialog('/', [
  function (session) {
    session.beginDialog('/ensureProfile', session,userData.profile);
  },
  function (session, result) {
    session.userData.profile = results.response;
    session.send('The weather is' + weather, session.userData.profile);
  }
]);
  jQuery(document).ready(function($) {
    $.ajax({
    url : "http://api.wunderground.com/api/e6e7616a96f73169/geolookup/conditions/q/IA/Cedar_Rapids.json",
    dataType : "jsonp",
    success : function(parsed_json) {
    var location = parsed_json['location']['city'];
    var temp_f = parsed_json['current_observation']['temp_f'];
    alert("Current temperature in " + location + " is: " + temp_f);
    }
    });
  });
