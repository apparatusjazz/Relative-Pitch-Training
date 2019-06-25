
var a = new Audio('a.wav');
var asharp = new Audio('aa.wav');
var b = new Audio('b.wav');
var c = new Audio('c.wav');
var csharp = new Audio('cc.wav');
var d = new Audio('d.wav');
var dsharp = new Audio('dd.wav');
var e =  new Audio('e.wav');
var f = new Audio('f.wav');
var fsharp = new Audio('ff.wav');
var g = new Audio('g.wav');
var gsharp = new Audio('gg.wav');

var score = 0;
var wrong = 0;    //Number of wrong notes
var randomNote;

var notes = {
  'a': a, 'a#': asharp, 'b': b, 'c': c, 'c#': csharp, 'd': d, 
  'd#': dsharp, 'e': e, 'f': f, 'f#': fsharp, 'g': g, 'g#': gsharp
}

var note_indexes = {
  1: 'a', 2: 'a#', 3: 'b', 4: 'c', 5: 'c#', 6: 'd', 
  7: 'd#', 8: 'e', 9: 'f', 10: 'f#', 11: 'g', 12: 'g#'
}


function reference_note() { 
  c.play();
}

function getRandomNote() {
  randomNote = Math.floor(Math.random() * (12 - 1 + 1)) + 1;
  return randomNote;
}

note_to_play = getRandomNote();

function play_note() {
  notes[note_indexes[note_to_play]].play();
}

function checkNote(index) {
  if(index == randomNote){
    score += 1;
    correctNote();
    setTimeout(displayScore, 1500);  
  }
  else {
    wrong += 1;
    displayWrong();
    wrongNote();
    setTimeout(displayScore, 1500);
  }
  note_to_play = getRandomNote();
}

function correctNote(){
  document.getElementById('score').innerHTML = "Correct";
}

function wrongNote(){
  document.getElementById('score').innerHTML = "Wrong";
}

function displayScore(){
  document.getElementById('score').innerHTML = "Score: " + score;
}

function displayWrong(){
  document.getElementById('wrong').innerHTML = 'Wrong: ' + wrong;
}