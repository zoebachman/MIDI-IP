//take a list of ip addresses
//map ip addresses to frequencies
//convert into tones
//play tones


var notes = [];

//declare array of oscillators
var oscs = [];

//number of oscillators
var numOscs = 4;


//array for holding the mapped values from notes
//initialize as empty array
var midis = [];
var freqs = [];


function setup() {

  //initialize oscillators
  initOscs();

  frameRate(100);

}


function draw() {

  //notes = [random(255), random(255), random(255), random(255)];
  notes = [194, 132, 197, 147];
  //   [194, 132, 197, 147],
  //   [172, 16, 232, 2],
  //   [128, 122, 1, 97]
  // ];


  //clear arrays for midi notes and its frequencies
  midis = [];
  freqs = [];

  //remap the values for midi
  for (var i = 0; i < notes.length; i++) {
    //append to the mappedValues array
    midis.push(map(notes[i], 0, 255, 0, 127));
    freqs.push(midiToFreq(midis[i]));
    freqs.push(map(notes[i], 0, 255, 20, 2000));

  }

  //values for frequency
  // for (var i = 0; i < notes.length; i++) {
  //   //append to the mappedValues array
  //   //midis.push(map(notes[i], 0, 255, 0, 127));
  //   //freqs.push(midiToFreq(midis[i]));
  //   freqs.push(map(notesb[i], 0, 255, 20, 2000));
  // }


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