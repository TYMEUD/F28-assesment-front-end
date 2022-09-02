console.log("hello world");



function handleSubmit(evt) {
	evt.preventDefault();
	
	console.log('form submit');
}


let form = document.querySelector('#contact');
let img = document.querySelector('#duckPng')

form.addEventListener('submit', alert('information submitted'));

img.addEventListener('mouseover', alert('Wow youre very smart'))