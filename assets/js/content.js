//speech to text API
const SpeechRecognition = webkitSpeechRecognition;
//text to speech API
const synth = window.speechSynthesis;
let recording = false;
let myNumbers = [];

// initialize speech by clicking button
document.getElementById("mybutton").onclick = () => {
    console.log('clickity');
    getSpeech();
  };

// settings for text to speech
const speak = text => {
    if (synth.speaking) {
      console.error('speechSynthesis.speaking');
      return;
    }
    let utterThis = new SpeechSynthesisUtterance(text);
    // utterThis.pitch = 2;
    let msg = window.speechSynthesis.getVoices();
    msg.voiceURI = 'native';
    msg.volume = 1; // 0 to 1
    msg.rate = 2; // 0.1 to 10
    msg.pitch = 2; //0 to 2
    utterThis.rate = 1;
    synth.speak(utterThis);
  };

// speech to text
const getSpeech = () => {
    const recognition = new SpeechRecognition();
    recognition.lang = 'en-US';
    recognition.start();
    recognition.continuous = false;
    recognition.interimResults = true;
    recording = true;
    console.log('started rec');

    recognition.onresult = event => {
      const speechResult = event.results[0][0].transcript;
      console.log('result: ' + speechResult);
      console.log('confidence: ' + event.results[0][0].confidence);
      receiveAnswer(speechResult);
    };

    recognition.onend = () => {
    // for "endless" mode, comment out the next line and uncomment getSpeech()
    recognition.stop();
    // getSpeech();

    };

    recognition.onerror = event => {
    console.log('something went wrong: ' + event.error);
  };

};

//check if user asked who are you and set a default response if not
const receiveAnswer = speechResult => {
    if (speechResult === "who are you" || speechResult === "what's behind the cloud" || speechResult === "what's behind the clouds"){
    let speechApproved = speechResult;
    cloudResponse(speechApproved);
      console.log('you got it right!!');
    } else {
      speak("Hey there human, I am the cloud. This giant global network you've invented. Most of the times though, you believe I'm invisible. But I'm not. And now you have the chance to know me for who I am. Just ask me 'Who are you?' and find out what's really behind the cloud.");
      console.log('please ask me who are you');
    }
};

//answer if user asked who are you
const cloudResponse = speechApproved => {
//get responses from json
  let url = './behindthecloud.json';
  fetch(url)
  .then(response => response.json())
  .then(data => {
    console.log(data);
    //randomize to get response
    let number = Math.round(Math.random()*4);
    if(myNumbers.includes(number)){
      number = Math.round(Math.random()*4);
    }else{
      //do the rest
      console.log(number);
      //get all variables from current response
      let currentAnswer = data[number].myanswer;
      let currentAnswer1 = data[number].myanswer1;
      let currentAnswer2 = data[number].myanswer2;
      let gifArray = data[number].gifs;
      let currentTitle = data[number].title;

      //add image
      let imgDiv = document.getElementById("img-div");

      let image4 = document.createElement("img");
      image4.src = gifArray[0];
      image4.setAttribute("id","image4");
      imgDiv.appendChild(image4);

      let image3 = document.createElement("img");
      image3.src = gifArray[0];
      image3.setAttribute("id","image3");

      let image2 = document.createElement("img");
      image2.src = gifArray[0];
      image2.setAttribute("id","image2");

      let image1 = document.createElement("img");
      image1.src = gifArray[0];
      image1.setAttribute("id","image1");

      imgDiv.appendChild(image1);
      imgDiv.appendChild(image2);
      imgDiv.appendChild(image3);
      imgDiv.appendChild(image4);

      // setTimeout(changeGif1, 4000);
      setTimeout(changeGif2, 4000);
      setTimeout(changeGif3, 8000);
      setTimeout(changeGif4, 12000);
      setTimeout(changeGif5, 16000);
      setTimeout(changeGif6, 20000);
      setTimeout(changeGif7, 24000);
      setTimeout(changeGif8, 28000);
      setTimeout(changeGif9, 32000);
      setTimeout(changeGif10, 36000);
      setTimeout(changeGif11, 40000);

      // function changeGif1(){
      //     image1.src = gifArray[0];
      //     image2.src = gifArray[0];
      //     image3.src = gifArray[0];
      //     image4.src = gifArray[0];
      //     }

      function changeGif2(){
        image1.src = gifArray[1];
        image2.src = gifArray[1];
        image3.src = gifArray[1];
        image4.src = gifArray[1];
      }

      function changeGif3(){
        image1.src = gifArray[2];
        image2.src = gifArray[2];
        image3.src = gifArray[2];
        image4.src = gifArray[2];
      }

      function changeGif4(){
        image1.src = gifArray[3];
        image2.src = gifArray[3];
        image3.src = gifArray[3];
        image4.src = gifArray[3];
      }

      function changeGif5(){
        image1.src = gifArray[4];
        image2.src = gifArray[4];
        image3.src = gifArray[4];
        image4.src = gifArray[4];
      }

      function changeGif6(){
        image1.src = gifArray[5];
        image2.src = gifArray[5];
        image3.src = gifArray[5];
        image4.src = gifArray[5];
      }

      function changeGif7(){
        image1.src = gifArray[6];
        image2.src = gifArray[6];
        image3.src = gifArray[6];
        image4.src = gifArray[6];
      }

      function changeGif8(){
        image1.src = gifArray[7];
        image2.src = gifArray[7];
        image3.src = gifArray[7];
        image4.src = gifArray[7];
      }

      function changeGif9(){
        image1.src = gifArray[8];
        image2.src = gifArray[8];
        image3.src = gifArray[8];
        image4.src = gifArray[8];
      }

      function changeGif10(){
        image1.src = gifArray[9];
        image2.src = gifArray[9];
        image3.src = gifArray[9];
        image4.src = gifArray[9];
      }

      function changeGif11(){
          image1.src = gifArray[10];
          image2.src = gifArray[10];
          image3.src = gifArray[10];
          image4.src = gifArray[10];
          }

      //remove whats behind the cloud prompt
      let elem = document.getElementById("prompt");
      elem.parentNode.removeChild(elem);


      //add title
      let contentDiv = document.getElementById("content-div");
      let title = document.createElement("h2");
      title.innerHTML = currentTitle;
      contentDiv.appendChild(title);

      //add text

      let answer = document.createElement("h5");
      contentDiv.appendChild(answer);

      //create typing effect
      let i=0;
      let speed = 54;
      typeWriter1();
      speak(currentAnswer);

      let typeWriterbool = false;

      function typeWriter1() {
        if (i < currentAnswer.length) {
            answer.innerHTML += currentAnswer.charAt(i);
            i++;
            setTimeout(typeWriter1, speed);
          } else {
            if (typeWriterbool === false){
                  setTimeout(setFinalPrompt, 3000);
                  typeWriterbool = true;
            }

          }
        }

        // function typeWriter2() {
        //   console.log(currentAnswer2);
        //   if (i < currentAnswer2.length) {
        //       answerNew.innerHTML += currentAnswer2.charAt(i);
        //       i++;
        //       setTimeout(typeWriter2, speed);
        //     } else {
        //       if (typeWriterbool === false){
        //       setTimeout(setFinalPrompt, 2000);
        //       typeWriterbool = true;
        //
        //       }
        //     }
        //   }

      function setFinalPrompt() {
        image1.parentNode.removeChild(image1);
        image2.parentNode.removeChild(image2);
        image3.parentNode.removeChild(image3);
        image4.parentNode.removeChild(image4);
        title.parentNode.removeChild(title);

        answer.parentNode.removeChild(answer);

        image = document.createElement("img");
        imgDiv.appendChild(image);
        image.src = "../images/cloudgif.gif";

        let answer2 = document.createElement("h2");
        contentDiv.appendChild(answer2);

        answer.innerHTML = " ";
        let j = 0;
        let e = 0;
        finalPrompt ="Yes human, I'm actually made of tons of natural resources, human labor and data. Want to find out more? Ask again 'Who are you?' and keep discovering what's behind the cloud."
        let finalPrompt1 = "Yes human, I'm actually made of tons of natural resources, human labor and data.";
        let finalPrompt2 = "Want to find out more? Ask again 'Who are you?' and keep discovering what's behind the cloud.";
        console.log("hello");
        addFinalText1();
        speed = 65;
        speak(finalPrompt);

          function addFinalText1(){
            if (j < finalPrompt1.length){
              answer2.innerHTML += finalPrompt1.charAt(j);
              j++;
              setTimeout(addFinalText1, speed);
            } else {
              answer2.innerHTML = " ";
              setTimeout(addFinalText2, 100);
            }
          }


          function addFinalText2(){
            if (e < finalPrompt2.length){
              answer2.innerHTML += finalPrompt2.charAt(e);
              e++;
              setTimeout(addFinalText2, speed);
            } else {
              answer2.parentNode.removeChild(answer2);
              setTimeout(backTo, 500);
            }
        }

        }

        function backTo(){

          image.parentNode.removeChild(image);
          console.log('hello from backto');

          let prompt = document.createElement("h1");
          contentDiv.appendChild(prompt);
          prompt.setAttribute("id","prompt");
          prompt.innerHTML = "What's behind the cloud?";
        }

      //push the number
      myNumbers.push(number);
    }

  });
}
