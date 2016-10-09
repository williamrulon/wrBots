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

bot.dialog('/', [
  function (session) {
    session.beginDialog('/ensureProfile', session,userData.profile);
  },
  function (session, result) {
    session.userData.profile = results.response;
    session.send('Hello %(name)s! I love %(company)s!', session.userData.profile);
  }
]);

bot.dialog('/ensureProfile', [
  function (session, args, next) {
    session.dialogData.profile = args || {};
    if (!session.dialogData.profile.name){
      builder.Prompts.text(session, "What's your name?");
    } else {
      next();
    }
  },
  function (session, result, next) {
    if (results.response) {
      session.dialogdata.profile.name = results.response;
    } else {

    }
  }
])
