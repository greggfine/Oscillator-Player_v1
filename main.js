const audioContext = new AudioContext();

var sine = document.getElementById("sine");
var sawtooth = document.getElementById("sawtooth");
var square = document.getElementById("square");
var triangle = document.getElementById("triangle");

sine.addEventListener('click', playSine);
sawtooth.addEventListener('click', playSawtooth);
square.addEventListener('click', playSquare);
triangle.addEventListener('click', playTriangle);


function playSine() {
	let osc = audioContext.createOscillator();
	osc.type = "sine";
	osc.connect(audioContext.destination);

	osc.start(audioContext.currentTime);
	osc.stop(audioContext.currentTime + 1);	
}

function playSawtooth() {
	let osc = audioContext.createOscillator();
	osc.type = "sawtooth";
	osc.connect(audioContext.destination);

	osc.start(audioContext.currentTime);
	osc.stop(audioContext.currentTime + 1);	
}

function playSquare() {
	let osc = audioContext.createOscillator();
	osc.type = "square";
	osc.connect(audioContext.destination);

	osc.start(audioContext.currentTime);
	osc.stop(audioContext.currentTime + 1);	
}

function playTriangle() {
	let osc = audioContext.createOscillator();
	osc.type = "triangle";
	osc.connect(audioContext.destination);

	osc.start(audioContext.currentTime);
	osc.stop(audioContext.currentTime + 1);	
}