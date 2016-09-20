//take a list of ip addresses
//map ip addresses to frequencies
//convert into tones
//play tones

var ipAddresses = [
  [68, 173, 200, 69],
  [68, 173, 198, 106],
  [66, 109, 3, 218],
  [66, 109, 6, 163],
  [24, 27, 236, 107],
  [157, 240, 33, 34],
  [157, 240, 33, 96],
  [157, 240, 33, 25],
  [157, 240, 33, 23],
  [31, 13, 30, 118],
  [31, 13, 24, 204],
  [31, 13, 31, 81],
  [31, 13, 31, 37],
  [31, 13, 29, 201],
  [0],
  [0],
  [0],
  [66, 220, 158, 68]
];

var notes = [];
var midis = [];
var freqs = [];

//declare array of oscillators
var oscs = [];

//number of oscillators
var numOscs = 4;

function setup() {
  //initialize oscillators
  initOscs();
  frameRate(100);
}

function draw() {

  //mapping happens here
  for (var i = 0; i < ipAddresses.length; i++) {
    for (var j = 0; j < ipAddresses[i].length; j++) {
      notes = mappedFreq(j);
      //console.log(notes); //got notes
    }
  }
  
  midis = [];
  freqs = [];
  notes = [];

  updateOscs();
}

function mappedFreq(x) {
  midis.push(map(x, 0, 255, 0, 127));
  freqs.push(midiToFreq(x));
  freqs.push(map(x, 0, 255, 20, 2000));

  return freqs;
}

function initOscs() {

  for (var i = 0; i < numOscs; i++) {
    var osc;
    osc = new p5.Oscillator();
    osc.setType('sine');
    osc.freq(400);
    osc.amp(0);
    osc.start();
    oscs.push(osc);
  }
}

function updateOscs() {
  for (var i = 0; i < numOscs; i++) {
    oscs[i].freq(notes[i]);
    oscs[i].amp(1 / numOscs);
  }
}