var builder = require('botbuilder');
var restify = require('restify');

var server = restify.createServer();
server.listen(process.env.port || process.env.PORT || 3978, function () {
    console.log('%s listening to %s', server.name, server.url);
});
var connector = new builder.ChatConnector({
    appId: null,
    appPassword: null
});
var bot = new builder.UniversalBot(connector);
server.post('/api/messages', connector.listen());

var weather = "cloudy";

bot.dialog('/', [
  function (session) {
    session.beginDialog('/ensureProfile', session,userData.profile);
  },
  function (session, result) {
    session.userData.profile = results.response;
    session.send('The weather is' + weather, session.userData.profile);
  }
]);
