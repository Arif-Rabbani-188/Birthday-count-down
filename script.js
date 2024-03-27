let birthDay = document.getElementById('bday');
let button = document.querySelector('input[type="button"]');
let result = document.getElementById('result');


function fun(){
  
  let today = new Date();
  let val = birthDay.value;
  let birthDate = new Date(val);
  let timeZone = today.getTimezoneOffset()/60;


  let year = birthDate.getFullYear()-today.getFullYear();
  let months = birthDate.getMonth()-today.getMonth();
  
  let days = birthDate.getDate()-today.getDate();
  let hours = birthDate.getHours()+timeZone-today.getHours();
  let minutes = birthDate.getMinutes()-today.getMinutes();
  let seconds = birthDate.getSeconds()-today.getSeconds();
  

  //conditions
  if(seconds < 0)
  if (seconds<0) {
     seconds = seconds + 60;
    minutes--;
  }
  
  if (minutes<0) {
     minutes = minutes + 60;
    hours --;
  }
  
  if (hours<0) {
    days --;
     hours = 24 + hours;
  }
  
  if (days<0){
    months -= 1;
    days += 30;
  };
  if (months<0) {
     year -= 1;
    months += 12;
  };

  result.innerHTML = months + " months " + days + " days " + hours + " hours " + minutes + " minutes " + seconds + " seconds ";
  
}
function fun2(){
  setInterval(fun, 1000);
}

button.addEventListener('click', fun2);