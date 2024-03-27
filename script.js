let birthDay = document.getElementById('bday');
let button = document.querySelector('input[type="button"]');
let result = document.getElementById('result');


function fun(){
  
  let today = new Date();
  let val = birthDay.value;
  let birthDate = new Date(val);
  let timeZone = today.getTimezoneOffset()/60;


  let year = -today.getFullYear() + birthDate.getFullYear();
  let months = -today.getMonth() + birthDate.getMonth();
  
  let days = -today.getDate() + birthDate.getDate();
  let hours = -today.getHours() + birthDate.getHours()+timeZone;;
  let minutes = -today.getMinutes() + birthDate.getMinutes();
  let seconds = -today.getSeconds() + birthDate.getSeconds();
  

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