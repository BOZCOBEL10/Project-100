var SpeechRecognition = window.webkitSpeechRecognition;
var recognition = new SpeechRecognition();

function start(){
    document.getElementById("textbox").innerHTML="";
    recognition.start();
}

recognition.onresult = function(event){
    console.log(event);
    
var content = event.results[0][0].transcript;

document.getElementById("textbox").innerHTML=content;
console.log(content);

    if (content == "take my selfie"){
        console.log("Taking a selfie");
        speak();
    }
    else{
        document.getElementById("NiceAudio").play();
    }

}



function speak(){
var synth = window.speechSynthesis;
    speak_data = "Taking your selfie in, 5 seconds, say Cheese"
var utterThis = new SpeechSynthesisUtterance(speak_data);
synth.speak(utterThis);
Webcam.attach(camera);
setTimeout(function(){
    take_snapshot();
    save();
}, 5000);
setTimeout(function(){
    take_snapshot2();
    save();
}, 5000);
setTimeout(function(){
    take_snapshot3();
    save();
}, 5000);
}

camera = document.getElementById("camera");

Webcam.set({
    width:360,
    height:250,
    image_format: 'png',
    png_quality: 90
});


function take_snapshot(){

    Webcam.snap(function(data_uri){

        document.getElementById("result").innerHTML="<img id='selfie_image' src='"+data_uri+"'><br>";

    });

}
function take_snapshot2(){

    Webcam.snap(function(data_uri){

        document.getElementById("result").innerHTML+="<img id='selfie_image' src='"+data_uri+"'><br>";

    });

}
function take_snapshot3(){

    Webcam.snap(function(data_uri){

        document.getElementById("result").innerHTML+="<img id='selfie_image' src='"+data_uri+"'>";

    });

}

function save(){

var link = document.getElementById("link");
var image = document.getElementById("selfie_image").src;
link.href = image;
link.click();

}