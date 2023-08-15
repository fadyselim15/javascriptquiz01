const body = document.querySelector('body');
const input1 = document.querySelector('.green-input');
const input2 = document.querySelector('.blue-input');
const lightbtn = document.querySelector('.light');
const darkbtn = document.querySelector('.dark');
const h1 = document.querySelector('h1');
const randombtn =document.querySelector(".random");



function setgradiantbackgroundtobody() {
    body.style.background = `linear-gradient(to right,${input1.value} ,${input2.value})`
}

function changetolightmode(){
    body.style.background = 'white'
    h1.style.color = 'black'
}

function changetodarkmode(){
    body.style.background = 'black'
    h1.style.color = 'white'

}
function setRandomColor(){

	input1.value = "#"+(Math.floor(Math.random()*(0x1000000))).
	toString(16); 
	input2.value = "#"+(Math.floor(Math.random()*(0x1000000))).
	toString(16); 
    setgradiantbackgroundtobody();
	
}

input1.addEventListener('input', setgradiantbackgroundtobody)
input2.addEventListener('input', setgradiantbackgroundtobody)

lightbtn.addEventListener('click',changetolightmode);
darkbtn.addEventListener('click',changetodarkmode);

randombtn.addEventListener("click", setRandomColor);