var elcheckWeather =document.querySelector("#weather");
var elCheckMoney = document.querySelector("#money");
var elCheckWork = document.querySelector("#work");
var elCheckHealth = document.querySelector("#health");


var elBtn = document.querySelector(".button");
var elOutTravel = document.querySelector(".travel");
var message = "";

elBtn.addEventListener("click", function(e){
    e.preventDefault();
    
  var weather = elcheckWeather.checked;
  var money = elCheckMoney.checked;
  var work = elCheckWork.checked;
  var health = elCheckHealth.checked;
  

  if ((!weather , money , work)) {
      message = "havo yomonligi sababli bora olmaymiz"
  }else if (weather , !money) {
      message= "pul yetarli emas "  
  }else if (weather && money && !work && !health){
    message = "Afsus sayohatga bora olmaymiz:("
  } else if (!weather && !money && !work && !health && !mood){
    message = "Afsus sayohatga bora olmaymiz:("
  }else{
    message = "Uraaa! Sayohatga boramiz!"
  }

elOutTravel.textContent = message;
})
      
