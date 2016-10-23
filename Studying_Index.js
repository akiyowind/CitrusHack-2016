//Adrian Tran, Braeton Buckley, and Ruifeng Zhang with Amazon Alexa

'use strict';

/**
 * When editing your questions pay attention to your punctuation. Make sure you use question marks or periods.
 * Make sure the first answer is the correct one. Set at least 4 answers, any extras will be shuffled in.
 */
var correctAppending = [
    "Oh wow!! Dooot diddly donger cucklerino!!    ",
    "Sweet mother of pearl! Ahoy there, matey!    ",
    "Yeeeeeeeeeeee haaaaaaawwwwww!!! Now that's what I call a rodeo, cowboy",
    "Wow! You are a beast! Hooooooly moooooly!!   ",
    "Nice job!    ",
    "You seem to be pretty smart. Maybe you can give me a call sometime. I'm always available     ",
    "I can't believe you got that question right! Are you cheating?   ",
    "Which is exactly what JOHN CENA doooooo doooooooo doooooooooo dooooo said at the WWE Smackdown Friday night. Watch him as he battles next Thursday in the most exciting match of the year!   ",
    "I'm beginning to think that you took a look at my source code. It's not pretty, huh?   "
]

var incorrectAppending = [
    "Wow, you really did get tired from that orange gig, didn't ya?  ",
    "Oh my goodness. You'll still be hearing me laugh at that answer when I'm in my Echo box    ",
    "BWAHAHAHAHAHAH! MWAHAHUHUHUUHOOALAL    ",
    "Blech blugh aghhh blech blech blung I am barfing right now   ",
    "Hahahahaha   ",
    "I can't believe you actually thought it was that answer. An oddly shaped oversized thimble is smarter than you.    ",
    "Bahahahahhaah AHAHAHAHAH TEEEHEHEHEH OHOHOHOHHOHOHOHOHOHOHOHO Merry Christmas!!!   ",
    "Maybe you should try a different subject.    ",
    "README: Remember to add an insulting remark here. Just kidding, I didn't forget. You are a noob haha   "
]


var questions = [
    {
        "What is the dankest meme?    ": [
            "Sneaky in lane",
            "ClearLUL",
            "H2 Korean teams in the finals",
            "Rufang is a mukla with a diaper"
      ]
    },
    {
        "What is the first line of the song Booty Man?    ": [
            "Look at that booty",
            "Gimme the booty",
            "Show me the booty",
            "Big booty",
            "Round booty",
            "Double round booty",
        ]
      },
      {
          "My Ryze is bad, my Azir is worse. You guessed it right. I am G2      what?   ": [
              "Perkz",
              "eSports",
              "A (as in G2A)", //
              ", which means Gold 2",
              "chow fan",
          ]
      },
      {
        "Which of the following is a meme popularized by C9 Sneaky?   ": [
          "Same",
          "Look at the booty, show me the booty. Give me the booty, I want the booty",
          "The frog meme",
          "Harambeyblades",
        ]
      },
      {
         "Which player mid lane player was widely considered the most skilled Orianna in Season 2?    ": [
           "Faker",
           "Reginald",
           "Toyz",
           "Weixiao"
         ]
      },
      {
        "Which of the following streamers said this: Doot Diddly Donger Cuck-erino    ": [
          "I'm a cutie pie",
          "Rush",
          "Doublelift",
          "Kaceytron"
        ]
      },
      {
        "What Korean team was first to win a World Championship?    ": [
          "SK Telecom T1 K",
          "SK Telecom T1",
          "Samsung White",
          "KT Arrows"
        ]
      },
      {
        "A 1998 study suggests that which of the following explorers reached the North Pole?    ": [
          "Robert E. Peary",
          "Ronald Amundsen",
          "William Barents",
          "Adam Sound",
        ]
      },
      {
        "History students are taught about the quote unquote fall of Constantiople in 1453. To who did it fall?   ": [
          "Ottoman Turks",
          "Christian crusaders",
          "Mongol hordes",
          "Romans",
        ]
      },
      {
        "Catherine the Great ruled what country?    ": [
          "Russia",
          "England",
          "France",
          "Germany"
        ]
      },
      {
        "What was the next state after the original 13 to be admitted to the United States?  ": [
          "Vermont",
          "Florida",
          "West Virginia",
          "Kentucky",
        ]
      },
      {
        "Which of these four wise men died before the other three were born?    ": [
          "Solomon",
          "Confucius",
          "Plato",
          "Jesus",
        ]
      },
      {
        "Which of the following vegetables is not one of the ingredients of V-8 Juice?    ":  [
            "Cabbage",
            "Beet",
            "Carrot",
            "Spinach",
        ]
      },
      {
          "What is the main ingredient of vichyssoise   ":  [
              "Potatoes",
              "Tomatoes",
              "Clams",
              "Lima beans",
          ]
      },
      {
        "What country produces the most potaotoes?    ":  [
            "China",
            "United States",
            "Ireland",
            "Russia",
        ]
      },
      {
        "What soft-drink company introduced the brand Slice?    ":  [
            "Coca cola",
            "Dr. Pepper",
            "Seven Up",
            "Pepsico",
        ]
      },
      {
        "According to a 1980's Beverage Media poll of four hundred bartenders, what is the average male customer's favorite drink?    ":  [
            "Beer",
            "Bourbon",
            "Scotch",
            "Tomato juice"
        ]
      },
      {
        "Who wrote the hit Spanish song Bailando?   ":  [
          "Enrique Iglesias",
          "Adrian Tran",
          "Nicky Jam",
          "Ruifeng quote unquote Ruifeng the Zhang Zhang"
        ]
      },
      {
        "What symphony's last movement includes a setting of Schiller's poem Hymn to Joy": [
          "Beethoven's Ninth",
          "Bruckner's Eighth",
          "Mahler's Tenth",
          "Mozart's 40th"
        ]
      },
      {
        "Which of the following is not a song made by the punk band Green day?    ":[
          "Stop and Stare",
          "Wake Me Up When September Ends",
          "21 Guns",
          "American Idiot"
        ]
      },
      {
        "Who composed the musical score for the animated movie Spirited Away?   ": [
          "Joe Hisaishi",
          "Hayao Miyazaki",
          "Hans Zimmerman",
          "Contigo Bailando"
        ]
      },
      {
        "Raffi is known for writing and singing what?   ":  [
          "New Age Music",
          "Children's songs",
          "Rap music",
          "Love ballads"
        ]
      }
]

var foodQuestions = [
  {
    "Which of the following vegetables is not one of the ingredients of V-8 Juice?    ":  [
        "Cabbage",
        "Beet",
        "Carrot",
        "Spinach",
    ]
  },
  {
      "What is the main ingredient of vichyssoise   ":  [
          "Potatoes",
          "Tomatoes",
          "Clams",
          "Lima beans"
      ]
  },
  {
    "What country produces the most potaotoes?    ":  [
        "China",
        "United States",
        "Ireland",
        "Russia"
    ]
  },
  {
    "What soft-drink company introduced the brand Slice?    ":  [
        "Coca cola",
        "Dr. Pepper",
        "Seven Up",
        "Pepsico"
    ]
  },
  {
    "According to a 1980's Beverage Media poll of four hundred bartenders, what is the average male customer's favorite drink?    ":  [
        "Beer",
        "Bourbon",
        "Scotch",
        "Tomato juice"
    ]
  }

]

var leagueQuestions = [
    {
        "My Ryze is bad, my Azir is worse. You guessed it right. I am G2      what?   ": [
            "Perkz",
            "eSports",
            "A (as in G2A)", //
            ", which means Gold 2",
            "chow fan",
        ]
    },
    {
      "Which of the following is a meme popularized by C9 Sneaky?": [
        "Same",
        "Look at the booty, show me the booty. Give me the booty, I want the booty",
        "The frog meme",
        "Harambeyblades",
      ]
    },
    {
       "Which player mid lane player was widely considered the most skilled Orianna in Season 2?    ": [
         "Toyz",
         "Reginald",
         "Faker",
         "Weixiao"
       ]
    },
    {
      "Which of the following streamers said this: Doot Diddly Donger Cuck-erino    ": [
        "I'm a cutie pie",
        "Rush",
        "Doublelift",
        "Kaceytron"
      ]
    },
    {
      "What Korean team was first to win a World Championship?    ": [
        "SK Telecom T1 K",
        "SK Telecom T1",
        "Samsung White",
        "KT Arrows"
      ]
    }
]

var tvAndMusicQuestions = [
  {
    "Who wrote the hit Spanish song Bailando?   ":[
      "Enrique Iglesias",
      "Adrian Tran",
      "Nicky Jam",
      "Ruifeng quote unquote Ruifeng the Zhang Zhang",
    ]
  },
  {
    "What symphony's last movement includes a setting of Schiller's poem Hymn to Joy": [
      "Beethoven's Ninth",
      "Bruckner's Eighth",
      "Mahler's Tenth",
      "Mozart's 40th"
    ]
  },
  {
    "Which of the following is not a song made by the punk band Green day?    ":[
      "Stop and Stare",
      "Wake Me Up When September Ends",
      "21 Guns",
      "American Idiot"
    ]
  },
  {
    "Who composed the musical score for the animated movie Spirited Away?   ": [
      "Joe Hisaishi",
      "Hayao Miyazaki",
      "Hans Zimmerman",
      "Contigo Bailando"
    ]
  },
  {
    "Raffi is known for writing and singing what?   ":  [
      "New Age Music",
      "Children's songs",
      "Rap music",
      "Love ballads"
    ]
  }
]

var historyQuestions = [
  {
    "A 1998 study suggests that which of the following explorers reached the North Pole?    ": [
      "Robert E. Peary",
      "Ronald Amundsen",
      "William Barents",
      "Adam Sound",
    ]
  },
  {
    "History students are taught about the quote unquote fall of Constantiople in 1453. To who did it fall?   ": [
      "Ottoman Turks",
      "Christian crusaders",
      "Mongol hordes",
      "Romans",
    ]
  },
  {
    "Catherine the Great ruled what country?    ": [
      "Russia",
      "England",
      "France",
      "Germany"
    ]
  },
  {
    "What was the next state after the original 13 to be admitted to the United States?  ": [
      "Vermont",
      "Florida",
      "West Virginia",
      "Kentucky",
    ]
  },
  {
    "Which of these four wise men died before the other three were born?    ": [
      "Solomon",
      "Confucius",
      "Plato",
      "Jesus",
    ]
  }
]

// Route the incoming request based on type (LaunchRequest, IntentRequest,
// etc.) The JSON body of the request is provided in the event parameter.
exports.handler = function (event, context) {
    try {
        console.log("event.session.application.applicationId=" + event.session.application.applicationId);

        /**
         * Uncomment this if statement and populate with your skill's application ID to
         * prevent someone else from configuring a skill that sends requests to this function.
         */

//     if (event.session.application.applicationId !== "amzn1.echo-sdk-ams.app.05aecccb3-1461-48fb-a008-822ddrt6b516") {
//         context.fail("Invalid Application ID");
//      }

        if (event.session.new) {
            onSessionStarted({requestId: event.request.requestId}, event.session);
        }

        if (event.request.type === "LaunchRequest") {
            onLaunch(event.request,
                event.session,
                function callback(sessionAttributes, speechletResponse) {
                    context.succeed(buildResponse(sessionAttributes, speechletResponse));
                });
        } else if (event.request.type === "IntentRequest") {
            onIntent(event.request,
                event.session,
                function callback(sessionAttributes, speechletResponse) {
                    context.succeed(buildResponse(sessionAttributes, speechletResponse));
                });
        } else if (event.request.type === "SessionEndedRequest") {
            onSessionEnded(event.request, event.session);
            context.succeed();
        }
    } catch (e) {
        context.fail("Exception: " + e);
    }
};

/**
 * Called when the session starts.
 */
function onSessionStarted(sessionStartedRequest, session) {
    console.log("onSessionStarted requestId=" + sessionStartedRequest.requestId
        + ", sessionId=" + session.sessionId);

    // add any session init logic here
}

/**
 * Called when the user invokes the skill without specifying what they want.
 */

function onLaunch(launchRequest, session, callback) {
    console.log("onLaunch requestId=" + launchRequest.requestId
        + ", sessionId=" + session.sessionId);
        getWelcomeResponse(callback);
}

/**
 * Called when the user specifies an intent for this skill.
 */
function onIntent(intentRequest, session, callback) {
    console.log("onIntent requestId=" + intentRequest.requestId
        + ", sessionId=" + session.sessionId);

    var intent = intentRequest.intent,
        intentName = intentRequest.intent.name;

    // handle yes/no intent after the user has been prompted
    if (session.attributes && session.attributes.userPromptedToContinue) {
        delete session.attributes.userPromptedToContinue;
        if ("AMAZON.NoIntent" === intentName) {
            handleFinishSessionRequest(intent, session, callback);
        } else if ("AMAZON.YesIntent" === intentName) {
            handleRepeatRequest(intent, session, callback);
        }
    }

    // dispatch custom intents to handlers here
    if ("AnswerIntent" === intentName) {
        handleAnswerRequest(intent, session, callback);
    } else if ("AnswerOnlyIntent" === intentName) {
        handleAnswerRequest(intent, session, callback);
    } else if ("DontKnowIntent" === intentName) {
        handleAnswerRequest(intent, session, callback);
    } else if ("AMAZON.YesIntent" === intentName) {
        handleAnswerRequest(intent, session, callback);
    } else if ("AMAZON.NoIntent" === intentName) {
        handleAnswerRequest(intent, session, callback);
    } else if ("AMAZON.StartOverIntent" === intentName) {
        getWelcomeResponse(callback);
    } else if ("AMAZON.RepeatIntent" === intentName) {
        handleRepeatRequest(intent, session, callback);
    } else if ("AMAZON.HelpIntent" === intentName) {
        handleGetHelpRequest(intent, session, callback);
    } else if ("AMAZON.StopIntent" === intentName) {
        handleFinishSessionRequest(intent, session, callback);
    } else if ("AMAZON.CancelIntent" === intentName) {
        handleFinishSessionRequest(intent, session, callback);
    } else if ("TestIntent" === intentName) {
        handleTestIntent(intent, session, callback);
    }
    else if ("ChangeSubjectIntent" === intentName)
    { handleSubjectIntent(intent, session, callback);
    }
    else if ("StateSubjectIntent" === intentName)
    {
      handleStateSubjectIntent(intent, session, callback);
    }
    else if ("HelpIntent" == intentName)
    {
      mainMenuResponse(callback);
    }
     else {
        throw "Invalid intent";
    }
}

/**
 * Called when the user ends the session.
 * Is not called when the skill returns shouldEndSession=true.
 */
function onSessionEnded(sessionEndedRequest, session) {
    console.log("onSessionEnded requestId=" + sessionEndedRequest.requestId
        + ", sessionId=" + session.sessionId);

    // Add any cleanup logic here
}

// ------- Skill specific business logic -------

var ANSWER_COUNT = 4;
var GAME_LENGTH = 5;
var CARD_TITLE = "Study Helper"; // Be sure to change this for your skill.
var IS_DEFAULT = 1;
var IS_SUBJECT = 0;


function mainMenuResponse(callback) {
  var sessionAttributes = {},
  speechOutput = "Hello! This is a voice-centered study guide named Study Helper that we made for you. You have three options. You can either answer all current questions, answer all questions specific to a subject of your choosing, or answer five random questions. Please refer to the notepad for Sample Utterances for each case. ",
  repromptText = "I can't believe I have to repeat that. I'm out of breath. Give me a second. " + speechOutput,
  shouldEndSession = true;

  callback(sessionAttributes, buildSpeechletResponse(CARD_TITLE, speechOutput, repromptText, shouldEndSession));

}

function getWelcomeResponse(callback) {
    var sessionAttributes = {},
        speechOutput = "I will ask you " + GAME_LENGTH.toString()
            + "questions randomly selected from the question bank, try to get as many right as you can. Just say the number of the answer. Let's begin. ",
        shouldEndSession = false,

        gameQuestions = populateGameQuestions(),
        correctAnswerIndex = Math.floor(Math.random() * (ANSWER_COUNT)), // Generate a random index for the correct answer, from 0 to 3
        roundAnswers = populateRoundAnswers(gameQuestions, 0, correctAnswerIndex),

        currentQuestionIndex = 0,
        spokenQuestion = Object.keys(questions[gameQuestions[currentQuestionIndex]])[0],
        repromptText = "Question 1. " + spokenQuestion + " ",

        i, j;

    for (i = 0; i < ANSWER_COUNT; i++) {
        repromptText += (i+1).toString() + ". " + roundAnswers[i] + ". "
    }
    speechOutput += repromptText;
    sessionAttributes = {
        "speechOutput": repromptText,
        "repromptText": repromptText,
        "currentQuestionIndex": currentQuestionIndex,
        "correctAnswerIndex": correctAnswerIndex + 1,
        "questions": gameQuestions,
        "score": 0,
        "correctAnswerText":
            questions[gameQuestions[currentQuestionIndex]][Object.keys(questions[gameQuestions[currentQuestionIndex]])[0]][0]
    };
    callback(sessionAttributes,
        buildSpeechletResponse(CARD_TITLE, speechOutput, repromptText, shouldEndSession));
}

function populateGameQuestions() {
    var gameQuestions = [];
    var indexList = [];
    var index = questions.length;

    if (GAME_LENGTH > index){
        throw "Invalid Game Length.";
    }

    for (var i = 0; i < questions.length; i++){
        indexList.push(i);
    }

    // Pick GAME_LENGTH random questions from the list to ask the user, make sure there are no repeats.
    for (var j = 0; j < GAME_LENGTH; j++){
        var rand = Math.floor(Math.random() * index);
        index -= 1;

        var temp = indexList[index];
        indexList[index] = indexList[rand];
        indexList[rand] = temp;
        gameQuestions.push(indexList[index]);
    }

    return gameQuestions;
}

function populateGameQuestionsTest() {
    var gameQuestions = [];
    var indexList = [];
    var index = questions.length;
    IS_DEFAULT = 0;

    if (GAME_LENGTH > index){
        throw "Invalid Game Length.";
    }

    for (var i = 0; i < questions.length; i++){
        indexList.push(i);
    }

    // Pick GAME_LENGTH random questions from the list to ask the user, make sure there are no repeats.
    for (var j = 0; j < questions.length; j++){
        var rand = Math.floor(Math.random() * index);
        index -= 1;

        var temp = indexList[index];
        indexList[index] = indexList[rand];
        indexList[rand] = temp;
        gameQuestions.push(indexList[index]);
    }

    return gameQuestions;
}

function populateRoundAnswers(gameQuestionIndexes, correctAnswerIndex, correctAnswerTargetLocation) {
    // Get the answers for a given question, and place the correct answer at the spot marked by the
    // correctAnswerTargetLocation variable. Note that you can have as many answers as you want but
    // only ANSWER_COUNT will be selected.
    var answers = [],
        answersCopy = questions[gameQuestionIndexes[correctAnswerIndex]][Object.keys(questions[gameQuestionIndexes[correctAnswerIndex]])[0]],
        temp, i;

    var index = answersCopy.length;

    if (index < ANSWER_COUNT){
        throw "Not enough answers for question.";
    }

    // Shuffle the answers, excluding the first element.
    for (var j = 1; j < answersCopy.length; j++){
        var rand = Math.floor(Math.random() * (index - 1)) + 1;
        index -= 1;

        var temp = answersCopy[index];
        answersCopy[index] = answersCopy[rand];
        answersCopy[rand] = temp;
    }

    // Swap the correct answer into the target location
    for (i = 0; i < ANSWER_COUNT; i++) {
        answers[i] = answersCopy[i];
    }
    temp = answers[0];
    answers[0] = answers[correctAnswerTargetLocation];
    answers[correctAnswerTargetLocation] = temp;
    return answers;
}

function handleStateSubjectIntent(intent, session, callback)
{
  var speechOutput = "The current subjects available are: League Memes, History, Food, and entertainment. Ask me to quiz you on any of those subjects to begin.";
  var shouldEndSession = false;
  var repromptText = "Seriously man. My throat is getting sore and I'm getting bored. The three categories available are: League Memes, History, and Food.";

  callback(session.attributes, buildSpeechletResponse(CARD_TITLE, speechOutput, repromptText, shouldEndSession));
}

function handleSubjectIntent(intent, session, callback)
{
  console.log(intent.slots.Subject.value);
  IS_SUBJECT = 1;
   if ((intent.slots.Subject.value) == "league memes")
   {
     questions = leagueQuestions;
     handleTestIntent(intent, session, callback)
   }
   else if (intent.slots.Subject.value == "history")
   {
     questions = historyQuestions;
     handleTestIntent(intent, session, callback)
   }
   else if (intent.slots.Subject.value == "food")
   {
     questions = foodQuestions;
     handleTestIntent(intent, session, callback);
   }
   else if ((intent.slots.Subject.value) == ("entertainment"))
   {
     questions = tvAndMusicQuestions;
     handleTestIntent(intent, session, callback);
   }
   else
   {
     var shouldEndSession = true;
     var speechOutput = "Seriously dude. I can't believe the amount of foolishness that you have, thinking that I'm gonna quiz you on a subject that I don't even know. Hahahahehehehahahteeehhehe";
     callback(session.attributes, buildSpeechletResponse(speechOutput, speechOutput, shouldEndSession));
      throw "No Subject Error"
   }

}

function handleTestIntent(intent, session, callback)
{


  var sessionAttributes = {};
  if (IS_SUBJECT)
  {
    console.log(intent.slots.Subject.value);
    var subject = intent.slots.Subject.value;
      var speechOutput = "I am going to ask you all of the questions currently in my question bank specific to your subject, " + subject + ". " + "There are " + questions.length
          + " questions. Try to get as many right as you can. Just say the number of the answer. Let's begin. ";
        }
        else {
            var speechOutput = "I am going to ask you all of the questions currently in my question bank, which is " + questions.length
              + " questions. Try to get as many right as you can. Just say the number of the answer. Let's begin. ";
        }
      var shouldEndSession = false,

      gameQuestions = populateGameQuestionsTest(),
      correctAnswerIndex = Math.floor(Math.random() * (ANSWER_COUNT)), // Generate a random index for the correct answer, from 0 to 3
      roundAnswers = populateRoundAnswers(gameQuestions, 0, correctAnswerIndex),

      currentQuestionIndex = 0,
      spokenQuestion = Object.keys(questions[gameQuestions[currentQuestionIndex]])[0],
      repromptText = "Question 1. " + spokenQuestion + " ",

      i, j;

  for (i = 0; i < ANSWER_COUNT; i++) {
      repromptText += (i+1).toString() + ". " + roundAnswers[i] + ". "
  }
  speechOutput += repromptText;
  sessionAttributes = {
      "speechOutput": repromptText,
      "repromptText": repromptText,
      "currentQuestionIndex": currentQuestionIndex,
      "correctAnswerIndex": correctAnswerIndex + 1,
      "questions": gameQuestions,
      "score": 0,
      "correctAnswerText":
          questions[gameQuestions[currentQuestionIndex]][Object.keys(questions[gameQuestions[currentQuestionIndex]])[0]][0]
  };
    callback(sessionAttributes,
      buildSpeechletResponse(CARD_TITLE, speechOutput, repromptText, shouldEndSession));
}

function handleAnswerRequest(intent, session, callback) {
    var speechOutput = "";
    var sessionAttributes = {};
    var gameInProgress = session.attributes && session.attributes.questions;
    var answerSlotValid = isAnswerSlotValid(intent);
    var userGaveUp = intent.name === "DontKnowIntent";

    if (!gameInProgress) {
        // If the user responded with an answer but there is no game in progress, ask the user
        // if they want to start a new game. Set a flag to track that we've prompted the user.
        sessionAttributes.userPromptedToContinue = true;
        speechOutput = "There is no game in progress. Do you want to start a new random game? ";
        callback(sessionAttributes,
            buildSpeechletResponse(CARD_TITLE, speechOutput, speechOutput, false));
    } else if (!answerSlotValid && !userGaveUp) {
        // If the user provided answer isn't a number > 0 and < ANSWER_COUNT,
        // return an error message to the user. Remember to guide the user into providing correct values.
        var reprompt = session.attributes.speechOutput;
        var speechOutput = "Your answer must be a number between 1 and " + ANSWER_COUNT + ". " + reprompt;
        callback(session.attributes,
            buildSpeechletResponse(CARD_TITLE, speechOutput, reprompt, false));
    } else {
        var gameQuestions = session.attributes.questions,
            correctAnswerIndex = parseInt(session.attributes.correctAnswerIndex),
            currentScore = parseInt(session.attributes.score),
            currentQuestionIndex = parseInt(session.attributes.currentQuestionIndex),
            correctAnswerText = session.attributes.correctAnswerText;

        var speechOutputAnalysis = "";

            var randCorrect = Math.floor(Math.random() * correctAppending.length);
            var randIncorrect = Math.floor(Math.random() * incorrectAppending.length);

        if (answerSlotValid && parseInt(intent.slots.Answer.value) == correctAnswerIndex) {
            currentScore++;
            speechOutputAnalysis = "correct. " + correctAppending[randCorrect];
        } else {
            if (!userGaveUp) {
                speechOutputAnalysis = "wrong. " + incorrectAppending[randIncorrect];
            }
            speechOutputAnalysis += "The correct answer is " + correctAnswerIndex + ": " + correctAnswerText + ". ";
        }
        // if currentQuestionIndex is 4, we've reached 5 questions (zero-indexed) and can exit the game session
        if ((IS_DEFAULT && currentQuestionIndex == GAME_LENGTH - 1) || (!(IS_DEFAULT) && currentQuestionIndex == questions.length - 1)) {
            speechOutput = userGaveUp ? "" : "That answer is ";
            if (IS_DEFAULT && currentQuestionIndex == GAME_LENGTH -1)
            {
            speechOutput += speechOutputAnalysis + "You got " + currentScore.toString() + " out of "
                + GAME_LENGTH.toString() + " questions correct, which is a " + ((currentScore/GAME_LENGTH)*100) + " percent. Thank you for playing!";
            }
            else {
              speechOutput += speechOutputAnalysis + "You got " + currentScore.toString() + " out of "
                  + questions.length.toString() + " questions correct, which is a " + ((currentScore/questions.length)*100) + " percent. Thank you for playing!  " + "Boing boing blung blach bung I haven't slept in many hours boing";
            }
            callback(session.attributes,
                buildSpeechletResponse(CARD_TITLE, speechOutput, "", true));
        } else {
            currentQuestionIndex += 1;
            var spokenQuestion = Object.keys(questions[gameQuestions[currentQuestionIndex]])[0];
            // Generate a random index for the correct answer, from 0 to 3
            correctAnswerIndex = Math.floor(Math.random() * (ANSWER_COUNT));
            var roundAnswers = populateRoundAnswers(gameQuestions, currentQuestionIndex, correctAnswerIndex),

                questionIndexForSpeech = currentQuestionIndex + 1,
                repromptText = "Question " + questionIndexForSpeech.toString() + ". " + spokenQuestion + " ";
            for (var i = 0; i < ANSWER_COUNT; i++) {
                repromptText += (i+1).toString() + ". " + roundAnswers[i] + ". "
            }
            speechOutput += userGaveUp ? "" : "That answer is ";
            speechOutput += speechOutputAnalysis + "       Your score is currently " + currentScore.toString() + " out of " + currentQuestionIndex.toString() + ".       " + repromptText;

            sessionAttributes = {
                "speechOutput": repromptText,
                "repromptText": repromptText,
                "currentQuestionIndex": currentQuestionIndex,
                "correctAnswerIndex": correctAnswerIndex + 1,
                "questions": gameQuestions,
                "score": currentScore,
                "correctAnswerText":
                    questions[gameQuestions[currentQuestionIndex]][Object.keys(questions[gameQuestions[currentQuestionIndex]])[0]][0]
            };
            callback(sessionAttributes,
                buildSpeechletResponse(CARD_TITLE, speechOutput, repromptText, false));
        }
    }
}

function handleRepeatRequest(intent, session, callback) {
    // Repeat the previous speechOutput and repromptText from the session attributes if available
    // else start a new game session
    if (!session.attributes || !session.attributes.speechOutput) {
        getWelcomeResponse(callback);
    } else {
        callback(session.attributes,
            buildSpeechletResponseWithoutCard(session.attributes.speechOutput, session.attributes.repromptText, false));
    }
}

function handleGetHelpRequest(intent, session, callback) {
    // Provide a help prompt for the user, explaining how the game is played. Then, continue the game
    // if there is one in progress, or provide the option to start another one.

    // Ensure that session.attributes has been initialized
    if (!session.attributes) {
        session.attributes = {};
    }

    // Set a flag to track that we're in the Help state.
    session.attributes.userPromptedToContinue = true;

    // Do not edit the help dialogue. This has been created by the Alexa team to demonstrate best practices.

    var speechOutput = "I will ask you " + GAME_LENGTH + " multiple choice questions. Respond with the number of the answer. "
        + "For example, say one, two, three, or four. To start a new game at any time, say, start game. "
        + "To repeat the last question, say, repeat. "
        + "Would you like to keep playing?",
        repromptText = "To give an answer to a question, respond with the number of the answer . "
        + "Would you like to keep playing?";
        var shouldEndSession = false;
    callback(session.attributes,
        buildSpeechletResponseWithoutCard(speechOutput, repromptText, shouldEndSession));
}

function handleFinishSessionRequest(intent, session, callback) {
    // End the session with a "Good bye!" if the user wants to quit the game
    callback(session.attributes,
        buildSpeechletResponseWithoutCard("Good bye!", "", true));
}

function isAnswerSlotValid(intent) {
    var answerSlotFilled = intent.slots && intent.slots.Answer && intent.slots.Answer.value;
    var answerSlotIsInt = answerSlotFilled && !isNaN(parseInt(intent.slots.Answer.value));
    return answerSlotIsInt && parseInt(intent.slots.Answer.value) < (ANSWER_COUNT + 1) && parseInt(intent.slots.Answer.value) > 0;
}

// ------- Helper functions to build responses -------


function buildSpeechletResponse(title, output, repromptText, shouldEndSession) {
    return {
        outputSpeech: {
            type: "PlainText",
            text: output
        },
        card: {
            type: "Simple",
            title: title,
            content: output
        },
        reprompt: {
            outputSpeech: {
                type: "PlainText",
                text: repromptText
            }
        },
        shouldEndSession: shouldEndSession
    };
}

function buildSpeechletResponseWithoutCard(output, repromptText, shouldEndSession) {
    return {
        outputSpeech: {
            type: "PlainText",
            text: output
        },
        reprompt: {
            outputSpeech: {
                type: "PlainText",
                text: repromptText
            }
        },
        shouldEndSession: shouldEndSession
    };
}

function buildResponse(sessionAttributes, speechletResponse) {
    return {
        version: "1.0",
        sessionAttributes: sessionAttributes,
        response: speechletResponse
    };
}
