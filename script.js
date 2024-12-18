    const showingSpeakText = document.querySelector("#speakText");
    let text = document.querySelector("#text");
    const btn = document.querySelector("#btn");
    const image = document.querySelector("#image");
    let userName = document.querySelector("#name");
    const submitbtn = document.querySelector("#submitbtn");

    const btninnerText = btn.innerText;
    let count = 0;


    
    function speech(text) {
    const speak_text = new SpeechSynthesisUtterance(text);
    let voices = [];
    voices = window.speechSynthesis.getVoices();
    speak_text.voice = voices[4];
    window.speechSynthesis.speak(speak_text);
    showingSpeakText.innerText = text;
}



let form = document.getElementById("form");
form.addEventListener("submit" , (event) => {
    event.preventDefault();
}) 

let num = 0;
let randomNum;
let userName2 = null;
userName.addEventListener("change", () => {
    userName2 = userName.value;
})
submitbtn.addEventListener("click", () => {
    if(userName2 == null) {
        speech("please Enter your name");
    }
    else{
        btn.style.display = "block";
        userName.style.display = "none";
        submitbtn.style.display = "none";
         randomNum = Math.random() * 3 ;
         randomNum = Math.trunc(randomNum);
         console.log(randomNum);
         randomNum = 0
         wishstatment();
    }
})

function wishMe(){
    let day = new Date();
    let hour = day.getHours();
    if(hour >= 0 && hour < 12) {
        speech(`good morning ${userName2}`);
        showingSpeakText.innerText  = `good morning ${userName2} `;
    }
    else if(hour > 12 && hour < 17){
        speech(`good afternoon ${userName2}`)
        showingSpeakText.innerText  = `good afternoon ${userName2}`;
    }
    else {
        speech(`good Evening ${userName2}`);
        showingSpeakText.innerText  = `good Evening ${userName2}`;
    }
}


function wishstatment() {
    if( randomNum == 0){
        wishMe();
    }else if(randomNum == 1) {
        speech(`nice to meet your ${userName2}`)
    }else if(randomNum == 2) {
        speech(`hello ${userName2} you have a good name`)
    }
}





window.addEventListener('load', ()=> {
    speech("Please Enter your name");
});


const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

const recognition = new SpeechRecognition();

recognition.onresult = (event) => {
    const currentIndex = event.resultIndex;
    const transcript = event.results[currentIndex][0].transcript;
    btn.innerText = transcript;
    takeCommand(transcript.toLowerCase());
    image.src = "img1.gif"

} 

btn.addEventListener("click", () => {
    image.src = "img2.gif"
    recognition.start();
    btn.innerText = "listning...";
})

function takeCommand(message) {
    if(message.includes("open google")) {
        window.open("https://www.google.com/","blank");
        const finalText = "opening Google"
        speech(finalText);
        count = 1;
    }
    
    else if(message.includes(" your name")){
        const finalText = "my name is 5 G A I";
        speech(finalText);
        count = 1;
    }


    else if(message.includes("open youtube")){
        window.open("https://www.youtube.com/", "blank");
        const finalText = "opening YouTube"
        speech(finalText);
        count = 1;
    }
    
    else if(message.includes("open whatsapp")){
        window.open("https://web.whatsapp.com/", "blank");
        const finalText = "opening Whatsapp"
        speech(finalText);
        count = 1;
    }


    else if(message.includes("open facebook")){
        window.open("https://www.facebook.com/", "blank");
        const finalText = "opening Facebook"
        speech(finalText);
        count = 1;
    }
    
    else if(message.includes("open instagram") || message.includes("open insta")){
        window.open("https://www.instagram.com/", "blank");
        const finalText = "opening Instagram"
        speech(finalText);
        count = 1;
    }
    else if(message.includes("open spotify") || message.includes(" song")){
        window.open("https://open.spotify.com/");
        const finalText = "opening Spotify";
        speech(finalText);
        count = 1;
    }
    
    else if(message.includes("open calculator")){
        window.open("calculator:///");
        const finalText = "opening Calculator"
        speech(finalText);
        count = 1;
    }
    
    else if(message.includes("my name")) {
        const finalText = `yes i know your name, your name is ${userName2}`;
        speech(finalText);
    }


    else if(message.includes("date")){
        const date = new Date().toLocaleString(undefined,{month: "short",day: "numeric"})
        const finalText = date
        speech(finalText);
        count = 1;
    }
    
    else if(message.includes("time")) {
        const time = new Date().toLocaleString(undefined, {hour: "numeric" , minute: "numeric"});
        const finalText = time;
        speech(finalText);
        count = 1;
    }
    

    else if(message.includes("what is") || message.includes("who is") || message.includes("where is") || message.includes("how are") || message.includes("which is")){
        const value = message.replace(" ", "+")
        const url = "https://www.google.com/search?q="+ value;
        window.open(url);
        const finalText  = "here are some result found on web";
        speech(finalText);
        count = 1;
    }
  
    else if(message.includes("tell me") ){
        const value = message.replace(" ", "+");
        console.log(value);
        const url = "https://www.google.com/search?q="+ value;
        window.open(url);
        const finalText  = "here are some result found on web";
        speech(finalText);
        count = 1;
    }

    else if(message.includes("find") || message.includes("found")){
        const value = message.replace(" ", "+")
        const url = "https://www.google.com/search?q="+ value;
        window.open(url);
        const finalText  = "I found this results";
        speech(finalText);
        count = 1;
    }


    else if(message.includes('hey') ||  message.includes('hello') || message.includes('hii')){
        const finalText = "hello Sir , how can i help you ?";
        speech(finalText);
        count = 1;
    }
    else{
        const finalText = "I am sorry to say that, i have not any information on this topic, please try again with new topic"
        speech(finalText);
        count = 1;
    }
}
btn.addEventListener("click" , () => {
    setTimeout(() => {
        btn.innerText = "click here to speak";
        image.src = "img1.gif";
        if(count == 0) {
            const finalText = "I am not hear you properly please try again";
            speech(finalText);
        }
      
    }, 5000);
});
