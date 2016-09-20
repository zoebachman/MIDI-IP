//take a list of ip addresses
//map ip addresses to frequencies
//convert into tones
//play tones


//var notes1 = [60, 64, 67, 72];
var notes = [194, 132, 197, 147];

//declare array of oscillators
var oscs = [];

//number of oscillators
var numOscs = 4;

// var value = 25;
//     var m = map(value, 0, 100, 0, width);
//     ellipse(m, 50, 10, 10);


//array for holding the mapped values from notes
//initialize as empty array
var midis = [];
var freqs = [];


function setup() {

  //initialize oscillators
  initOscs();

  frameRate(1);

}

// function remap(){
//   for (var i = 0; i < notes1; i++){
//     var m = map(notes1[i], 0, 255, 21, 108)
//   }
// }

// function map(x, in_min, in_max, out_min, out_max) {
//   return (x - in_min) * (out_max - out_min) / (in_max - in_min) + out_min;
// }



function draw() {

  notes = [random(255), random(255), random(255), random(255)];
  
  //clear arrays for midi notes and its frequencies
  midis = [];
  freqs = [];

  //remap the values
  for (var i = 0; i < notes.length; i++) {
    //append to the mappedValues array
    midis.push(map(notes[i], 0, 255, 0, 127));
    freqs.push(midiToFreq(midis[i]));
  }


  updateOscs();

}

function initOscs() {

  for (var i = 0; i < numOscs; i++) {
    var osc;
    osc = new p5.Oscillator();
    osc.setType('sine');
    osc.freq(440);
    osc.amp(0);
    osc.start();
    oscs.push(osc);
  }

}

function updateOscs() {
  for (var i = 0; i < numOscs; i++) {
    oscs[i].freq(freqs[i]);
    oscs[i].amp(1 / numOscs);
  }
}