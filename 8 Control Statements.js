// 1. if...else

var tomorrowWeather ="Rain";

if(tomorrowWeather=="Rain"){
    console.log("Tomorrow will be a Rainy Day ☔");
}
else{
    console.log("Tomorrow will be a Sunny Day 🌞")
}

// 2. switch statement

var area = "Circle";
var pi = 3.14, r = 3, l = 5, b = 4;

switch(area){
    case "Circle":
        console.log("Area of Circle:",pi*r**2);
        break;
    
    case "Rectangle":
        console.log("Area of Rectangle:",l*b);
        break;
    
    default:
        console.log("Please choose different Shape");
}