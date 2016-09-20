//take a list of ip addresses
//map ip addresses to frequencies
//convert into tones
//play tones


//var notes1 = [60, 64, 67, 72];
var notes1 = [194, 132, 197, 147];

// var value = 25;
//     var m = map(value, 0, 100, 0, width);
//     ellipse(m, 50, 10, 10);


//array for holding the mapped values from notes1
//initialize as empty array
var mappedValues = [];


function setup() {


  //remap the values
  for (var i = 0; i < notes1.length; i++) {
    //append to the mappedValues array
    mappedValues.push(map(notes1[i], 0, 256, 21, 108));
  }

  //m = map(notes1[0], 0, 256, 21, 108);
  //var i = 0;

  osc = new p5.Oscillator('Triangle');
  osc.start();
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
  //var freq = midiToFreq(m[i]);
  //osc.freq(freq);

}