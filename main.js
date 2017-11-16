"use strict";

const audioContext = new AudioContext();

var sine = document.getElementById("sine");
var sawtooth = document.getElementById("sawtooth");
var square = document.getElementById("square");
var triangle = document.getElementById("triangle");

sine.addEventListener('click', function() {
	playWaveform('sine')
});
sawtooth.addEventListener('click', function() {
	playWaveform('sawtooth')
});
square.addEventListener('click', function() {
	playWaveform('square')
});
triangle.addEventListener('click', function() {
	playWaveform('triangle');
});


function playWaveform(waveform) {
	var osc = audioContext.createOscillator();
	osc.type = waveform;
	osc.connect(audioContext.destination);
	osc.start(audioContext.currentTime);
	osc.stop(audioContext.currentTime + 1);	
}

