 function perform() {
  const myElement = document.getElementById("change");
  console.log(myElement); 
 // myElement.innerHTML = "Party time!";
  myElement.style.backgroundImage = "linear-gradient(to right,#FC5EFF,#CB52F8, #6E54EC)";  
 }

 function callme() {
  var DateObj = new Date();
  var hour = DateObj.getHours();
  console.log(hour);
  const morning = document.querySelector("#morning");
  const wake = morning.options[document.getElementById("morning").selectedIndex];
  console.log(wake.innerHTML);
  const afternoon = document.querySelector("#afternoon");
  const launch = afternoon.options[document.getElementById("afternoon").selectedIndex];
  const evening = document.querySelector("#evening");
  const nap = evening.options[document.getElementById("evening").selectedIndex];
  const night = document.querySelector("#night");
  const sleep = night.options[document.getElementById("night").selectedIndex];


  if(hour === parseInt(morning.value)){
    console.log("good afternoon");
    const Greets = document.getElementsByClassName('text2')[0];
    Greets.innerHTML = "LET'S HAVE SOME LUNCH !!";
    const Greeting = document.getElementsByClassName('text1')[0];
    Greeting.innerHTML = "GOOD AFTERNOON !! TAKE SOME SLEEP";
    const image = document.getElementById("imageChange");
    image.src="./GoodMorning.svg";
  } else if(hour === parseInt(afternoon.value)){
    console.log("afternoon ...!");
    const Greets = document.getElementsByClassName('text2')[0];
    Greets.innerHTML = "LET'S HAVE SOME LUNCH !!";
    const Greeting = document.getElementsByClassName('text1')[0];
    Greeting.innerHTML = "GOOD AFTERNOON !! TAKE SOME SLEEP";
    const image = document.getElementById("imageChange");
    image.src="./Afternoon.svg";
    
  } else if(hour === parseInt(evening.value)){
    const Greets = document.getElementsByClassName('text2')[0];
    Greets.innerHTML = "STOP YAWNING, GET SOME TEA.. ITS JUST EVENING!";
    const Greeting = document.getElementsByClassName('text1')[0];
    Greeting.innerHTML = "GOOD EVENING !!";
    const image = document.getElementById("imageChange");
    image.src="./GoodEvening.png";
  } else if(hour === parseInt(night.value)){
    const Greets = document.getElementsByClassName('text2')[0];
    Greets.innerHTML = "CLOSE YOUR EYES AND GO TO SLEEP";
    const Greeting = document.getElementsByClassName('text1')[0];
    Greeting.innerHTML = "GOOD NIGHT !!";
    const image = document.getElementById("imageChange");
    image.src="./GoodNight.svg";
  }
  var x = document.getElementById("para");
  x.innerText = `Wake Up Time :${wake.innerHTML} 
                 Lunch Time :${launch.innerHTML}
                 Nap Time : ${nap.innerHTML}
                 Night Time :${sleep.innerHTML}`;
  
 }
 
 setInterval(myFunction, 1000); 
 function myFunction() {

   var DateObj = new Date();
   var hour = DateObj.getHours();
   var minute = DateObj.getMinutes();
   var seconds = DateObj.getSeconds();
   var PMAM = "AM";
   
   if (hour >= 12) {
     hour = hour - 12;
     PMAM = "PM";
   }
 
   if (hour < 10) {
     hour = "0" + hour;
   }
 
   if (minute < 10) {
     minute = "0" + minute;
   }
 
   if (seconds < 10) {
     seconds = "0" + seconds;
   }
 
   document.getElementById("B1").innerHTML = hour;
   document.getElementById("B2").innerHTML = minute;
   document.getElementById("B3").innerHTML = seconds;
   document.getElementById("B4").innerHTML = PMAM;

   
     
  //  if("10 : 02 : 30 pm"==time)
  //  {
  //    alert("hello");
  //  }
 
   
 }

 
 