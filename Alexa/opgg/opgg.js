exports.handler = (event, context) => {

    try {

        if(event.session.new) {
        //New Session
            console.log("NEW SESSION")
        }

        switch(event.request.type) {

            case "LaunchRequest":
            //Launch Request
                console.log(`LAUNCH REQUEST`)
                context.succeed(
                    generateResponse(
                        buildSpeechletResponse("Welcome to the OPGG skill, thats a dank job you did there", true),
                        {}
                    )
                )
                break;

                case "IntentRequest":
           // Intent Request
           console.log(`INTENT REQUEST`)

           switch(event.request.intent.name) {
             case "GetCurrentDivision":
             var opgg = require('./client.js');
             var options = { 'host': '127.0.0.1' };
             var gg = new opgg(options);
             /*var endpoint =  gg.Summoner('kr', 'SKT T1 Faker', function(data){
                console.log(data);
              });
             var data = JSON.parseSummonerLeagueFactory(body)
                context.succeed(
                        generateResponse(
                            buildSpeechletResponse(`Current division is ${division}`, true),
                            {}
                        )
                )*/
                var endpoint = 'http://'+this.opts.host+':'+this.opts.port+'/'+'kr'+'/summoner/'+'SKT T1 Faker';
               var body = ""
               https.get(endpoint, (response) => {
                 response.on('data', (chunk) => { body += chunk })
                 response.on('end', () => {
                   var data = JSON.parseSummonerLeagueFactory(body)
                   var division = ret.data[0].league
                   context.succeed(
                     generateResponse(
                       buildSpeechletResponse(`Current division is ${division}`, true),
                       {}
                     )
                   )
                 })
             })
               break;

             default:
               throw "Invalid intent"
           }

           break;

            case "SessionEndedRequest":
            //Session Ended Requset
                console.log(`SESSION ENDED REQUEST`)
                break;
            default:
                context.fail(`INVALID REQUEST TYPE: ${event.request.type}`)

        }

    } catch(error) { context.fail(`Exception: ${error}`)}

    //callback(null, 'Hello from Lambda');
}

//helpers
buildSpeechletResponse = (outputText, shouldEndSession) => {

    return {
            outputSpeech: {
                type: "PlainText",
                text: outputText
            },
            shouldEndSession: shouldEndSession
    }

}

generateResponse = (speechletResponse, sessionAttributes) => {

    return {
        version: "1.0",
        sessionAttributes: sessionAttributes,
        response: speechletResponse
    }

};
