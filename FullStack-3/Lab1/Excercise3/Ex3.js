const say = require("say");

say.speak("hello");
say.stop();

function sayHello(){
    say.speak("Hello?", "Alex", 0.5);
}
setTimeout(sayHello, 5000);


function sorryDave(){
    say.speak("I'm sorry, Dave");
}
sorryDave();