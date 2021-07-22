const btn = document.querySelector('.box');
const content = document.querySelector('.content');


const cssColorNames = ["blue", "gray"];
const SpeechRecognition =
    window.SpeechRecognition || window.webkitSpeechRecognition;
const recognition = new SpeechRecognition();

recognition.onstart = function () {
    console.log('voice is activated ');

};

const transcript_element = document.getElementById("transcript");

recognition.onresult = function (event) {
    const current = event.resultIndex;

    const transcript = event.results[current][0].transcript;
    content.textContent = transcript;
    readOutLoud(transcript);


};

btn.addEventListener('click', () => {
    recognition.start();
});




function readOutLoud(message) {
    const speech = new SpeechSynthesisUtterance();

    speech.text = message;

    if (message.includes('what is the time'))
        speech.text = ' It is' + new Date().getHours() + " " + new Date().getMinutes() + " right now";

    else if (message.includes('what are you studying'))
        speech.text = 'I am studying Faculty of Electronics Telecommunications and Information Technology!';

    else if (message.includes('what is your name'))
        speech.text = 'My name is Mia';

    else if (message.includes('hi'))
        speech.text = 'Hello how can I help you?';

    else if (message.includes('what is the world biggest problem'))
        speech.text = 'coronavirus';

    else if (message.includes('Facebook'))
        window.open(" https://www.facebook.com ");

    else if (message.includes('open'))
        window.open(" https://www.youtube.com ");

    else if (message.includes('weather'))
        window.open('https://www.google.com/search?q=weather&oq=weather&aqs=chrome..69i57j0i402l2j0j0i10i131i433j0i131i433j0j46j0j0i131i433.1515j1j9&sourceid=chrome&ie=UTF-8');

    else if (message.includes('page'))
        window.open(" https://etti.utcluj.ro/ ");

    else if (message.includes('colour'))
        speech.text(" black ");   
        
    else if (message.includes('best friend'))
        speech.text("Ana");  
        
    else if (message.includes('country'))
        speech.text(" Italia ");      

    else if (message.includes('movie'))
        window.open(" https://vezionline.net/fracture-ruptura-2007.html "); 

    else if (message.includes('news'))
        window.open(" https://stirileprotv.ro/ ");
    
        else if (message.includes('battery'))
        navigator.getBattery().then(function (battery) {
            var level = battery.level;

            console.log(level);
        });

    else if (message.includes(cssColorNames)) {
        cssColorNames.style.setProperty()
    }



    speech.volume = 1;
    speech.rate = 1;
    speech.pitch = 1;

    window.speechSynthesis.speak(speech);
}