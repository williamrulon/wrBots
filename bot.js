var builder = require('botbuilder');
var restify = require('restify');

var connector = new builder.ChatConnector({
    appId: null,
    appPassword: null
});

var bot = new builder.UniversalBot(connector);

bot.dialog('/', new builder.IntentDialog()
    .matches(/^add/i, '/addTask')
    .matches(/^change/i, '/changeTask')
    .matches(/^delete/i, '/deleteTask')
    .onDefault(builder.DialogAction.send("I'm sorry. I didn't understand"))
);

/*
bot.dialog('/', [
    function (session){
        session.beginDialog('/phonePrompt');
    },
    function (session, result){
        session.send('Got it... Setting number to %s', results.response);
    }
]);
bot.dialog('/phonePrompt', [
    function (session, args) {
       if (args && args.reprompt) {
         builder.Prompts.text(session, "Enter the number using a format");
      } else {
            builder.Prompts.text(session, "what's your phone number?");
        }
    },
    function (session, results) {
        var matched = results.response.match(/\d+/g);
        var number = matched ? matched.join('') : '';
        if (number.length == 10 || number.length == 11) {
            session.endDialogWithResult({ response: number });
        } else {
            session.replaceDialog('/phonePromt', { reprompt: true});
        }
    }
]) */

var server = restify.createServer();
server.listen(process.env.port || process.env.PORT || 3978, function () {
    console.log('%s listening to %s', server.name, server.url);
});
server.post('/api/messages', connector.listen())