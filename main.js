x = 0;
y = 0;
draw_circle = "";
draw_rect = "";

var SpeechRecognition = window.webkitSpeechRecognition;
function start(){
    document.getElementById("status").innerHTML = "System is listening please speak";
    recognition.start();
}

recognition.onresult - function(event){
    console.log(event);

    var content = event.results[0][0].transcript;

    document.getElementById("status").innerHTML = "The speech has been recognized as: " + content;
    if(content =="circle" || content =="Circle"){
        x = Math.floor(Math.random() * 900);
        y = Math.floor(Math.random() * 600);
        document.getElementById("status").innerHTML = "Started drawing circle";
        draw_circle = "set";
    }
    if(content =="rectangle" || content =="Rectangle"){
        x = Math.floor(Math.random() * 900);
        y = Math.floor(Math.random() * 600);
        document.getElementById("status").innerHTML = "Started drawing rectangle";
        draw_rect = "set";
    }
}
function setup(){
    canvas = createCanvas(900, 600);
}
function draw(){
    if(draw_circle == "set"){
        radius = Math.floor(Math.random() * 100);
        circle(x, y, radius);       
        draw_circle = "";
        to_number = Number(content);
        if(Number.isInteger(to_number)){
            document.getElementById("status").innerHTML = "Started drawing apple" + Number;
        }
    }
    
}