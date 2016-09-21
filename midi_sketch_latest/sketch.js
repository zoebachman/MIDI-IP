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

var loRange = 100;
var hiRange = 2000;

//declare array of oscillators
var oscs = [];

//number of oscillators
var numOscs = 4;


var currentMillis = 0;
var previousMillis = 0;
var interval = 1000;
var iPi = 0;

function setup() {
  //initialize oscillators
    //mapping happens here

  
  initOscs();
  frameRate(100);
}

function draw() {

var currentMillis = millis();

if(currentMillis - previousMillis > interval){
  
  iPi = iPi + 1;
  console.log("click");
  previousMillis = currentMillis;
    if(iPi > ipAddresses.length){
      iPi = 0;
  }
  
  initOscs();
  
};


}



function initOscs() {

  for (var i = 0; i < numOscs; i++) {
    var osc;
    var tempFreq;
    osc = new p5.Oscillator();
    oscs[i] = osc;
    oscs[i].setType('sine');
    
    tempFreq = map(ipAddresses[iPi][i], 0, 255, loRange, hiRange)
    
    oscs[i].freq(tempFreq); //<<<<
    oscs[i].amp(0);
    oscs[i].start();
    oscs[i].amp(1 / numOscs);

    console.log(oscs)
  }
}

