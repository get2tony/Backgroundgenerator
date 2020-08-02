var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");
var btn = document.querySelector(".rbtn");

function getcbg() {
	color1.value='#7c230d';
	color2.value='#a16d6d';
	setGradient();
	
}
function setGradient() {
	body.style.background = 
	"linear-gradient(to right, " 
	+ color1.value 
	+ ", " 
	+ color2.value 
	+ ")";

	css.textContent = body.style.background + ";";
}
function getRandomColor() {
	var letters = '0123456789ABCDEF';
	var color = '#';
	for (var i = 0; i < 6; i++) {
	  color += letters[Math.floor(Math.random() * 16)];
	}
	return color;
  }
function setRandgrd() {

	var c1=getRandomColor();
	var c2=getRandomColor();

	body.style.background = 
	"linear-gradient(to right, " 
	+ c1 
	+ ", " 
	+ c2
	+ ")";

	css.textContent = body.style.background + ";";
	color1.value=c1;
	color2.value=c2;
	
}

color1.addEventListener("input", setGradient);

color2.addEventListener("input", setGradient);

btn.addEventListener("click",setRandgrd);


