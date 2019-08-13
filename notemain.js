
var a = new Audio('Notes/A2.wav');
var asharp = new Audio('Notes/Bb2.wav');
var b = new Audio('Notes/B2.wav');
var c = new Audio('Notes/C.wav');
var csharp = new Audio('Notes/Db.wav');
var d = new Audio('Notes/D.wav');
var dsharp = new Audio('Notes/Eb.wav');
var e =  new Audio('Notes/E.wav');
var f = new Audio('Notes/F.wav');
var fsharp = new Audio('Notes/Gb.wav');
var g = new Audio('Notes/G.wav');
var gsharp = new Audio('Notes/Ab.wav');

var score = 0;
var wrong = 0;    //Number of wrong notes
var randomNote;
var noteStorage = [];
var notesSequence = [];


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


var noteList = [];

function getNoteList() {

  var noteList = [];
  
  numberNotes = document.getElementById('number_notes').value;
  for(i = 0; i < numberNotes; i ++) {
    var randomN = getRandomNote()
    noteList.push(randomN);
    notesSequence.push(randomN);
  }
 
  return noteList;
}



function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function playNotes(noteList) {
  
  for (i = 0; i < noteList.length; i ++) {
    notes[note_indexes[noteList[i]]].play();
    await sleep(1000);
    notes[note_indexes[noteList[i]]].load();
  }
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


function storeNote(note) {
  noteStorage.push(note);
  if (noteStorage.length >= numberNotes) {
    checkMultiple(noteStorage);
    noteStorage = [];
    notesSequence = [];
  }
}

function checkMultiple(noteStorage) {
  for(i = 0; i < noteStorage.length; i ++) {
    if(noteStorage[i] != notesSequence[i]) {
      //document.getElementById('score').innerHTML = noteList[i].toString();
      wrong += 1;
      displayWrong();
      wrongNote();
      setTimeout(displayScore, 1500);
      return;
    }
  }
  score += 1;
  correctNote();
  setTimeout(displayScore, 1500);

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