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
            //Intnent Request
                console.log(`INTENT REQUEST`)
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
