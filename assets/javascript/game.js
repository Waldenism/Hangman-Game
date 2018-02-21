//Object with 3 properties: name, img, and info. 
//Each property has a value with an array 30 long
var vgSystems = {
  name: ["snes",
  		"genesis",
  		"nes",
  		"gameboycolor",
  		"gamecube",
  		"wii",
  		"wiiu",
  		"switch",
  		"mastersystem",
  		"segacd",
  		"saturn",
  		"dreamcast",
  		"turbografx",
  		"pcengine",
  		"playstation",
  		"xbox",
  		"xboxone",
  		"atarijaguar",
  		"atari",
  		"philipscdi",
  		"colecovision",
  		"intellivision",
  		"zxspectrum",
  		"commodore",
  		"turboduo",
  		"neogeo",
  		"gameboy",
  		"psp",
  		"gameboyadvance",
  		"pc"],
  img: ["<img src ='assets/images/consoleimg/snes.jpg'>",
  	"<img src ='assets/images/consoleimg/genesis.jpg'>",
  	"<img src ='assets/images/consoleimg/nes.jpg'>",
  	"<img src ='assets/images/consoleimg/gameboycolor.jpg'>",
  	"<img src ='assets/images/consoleimg/gamecube.jpg'>",
  	"<img src ='assets/images/consoleimg/wii.jpg'>",
  	"<img src ='assets/images/consoleimg/wiiu.jpg'>",
  	"<img src ='assets/images/consoleimg/switch.jpg'>",
  	"<img src ='assets/images/consoleimg/mastersystem.jpg'>",
  	"<img src ='assets/images/consoleimg/segacd.jpg'>",

  	"<img src ='assets/images/consoleimg/saturn.jpg'>",
  	"<img src ='assets/images/consoleimg/dreamcast.jpg'>",
  	"<img src ='assets/images/consoleimg/turbografx.jpg'>",
  	"<img src ='assets/images/consoleimg/pcengine.jpg'>",
  	"<img src ='assets/images/consoleimg/playstation.png'>",
  	"<img src ='assets/images/consoleimg/xbox.jpg'>",
  	"<img src ='assets/images/consoleimg/xboxone.jpg'>",
  	"<img src ='assets/images/consoleimg/atarijaguar.jpg'>",
  	"<img src ='assets/images/consoleimg/atari.jpg'>",
  	"<img src ='assets/images/consoleimg/philipscdi.jpg'>",

  	"<img src ='assets/images/consoleimg/colecovision.jpg'>",
  	"<img src ='assets/images/consoleimg/intellivision.jpg'>",
  	"<img src ='assets/images/consoleimg/zxspectrum.jpg'>",
  	"<img src ='assets/images/consoleimg/commodore.jpg'>",
  	"<img src ='assets/images/consoleimg/turboduo.png'>",
  	"<img src ='assets/images/consoleimg/neogeo.jpg'>",
  	"<img src ='assets/images/consoleimg/gameboy.jpg'>",
  	"<img src ='assets/images/consoleimg/psp.jpg'>",
  	"<img src ='assets/images/consoleimg/gameboyadvance.jpg'>",
  	"<img src ='assets/images/consoleimg/pc.jpg'>",
  	],
  info: ["arguable best library of games",
  		"Does what Nintendon't",
  		"Ended the 80's videogame crash",
  		"deluxe pocket console",
  		"has a featured handle",
  		"got moms and grandpas to game",
  		"tablet controller console",
  		"hybrid",
  		"what is before genesis",
  		"Full Motion Video",
  		"Between jupiter and pluto",
  		"fighting game machine",
  		"that other 16-bit console",
  		"was bigger than Nintendo or Sega in JP",
  		"product of a Nintendo back stabbing",
  		"microsoft's babe",
  		"the one to rule them all",
  		"atari's last effort",
  		"2600",
  		"the one with bad zeldas",
  		"had best arcade ports",
  		"colecos rival",
  		"big hit in the UK",
  		"was the first real gaming pc",
  		"not trio, but turbo",
  		"arcade at home",
  		"greenscale",
  		"hotshots golf open tee was a key title",
  		"got wayyy better with a backlight",
  		"not really a console"]
};

//variables
/////////////////////////////////////////////////////////////////////////////////

//assigns random word from vgSystems array
var randWord = rand(vgSystems.name);

//gets index of random word
var indy = vgSystems.name.indexOf(randWord);
console.log(indy);

//grabs html div
var consoleWord = document.getElementById("gameWord");

//grabs html span
var guessed = document.getElementById("guessedLets");

//grabs hangman image div
var man = document.getElementById("man");

//stores incorrect letters
var usedLets = [];

//stores updated game word
var dynamicWord = initialWordSet(randWord);
display(dynamicWord);

//stores and displays wins
var wins = document.getElementById("wins");
var winCounter = 0;
wins.textContent = winCounter;

//stores and displays losses
var losses = document.getElementById("losses")
var lossCounter = 0;
losses.textContent = lossCounter;

//stores and displays lives
var lives = document.getElementById("lives");
var lifeCounter = 6;
lives.textContent = lifeCounter;


////////////////////////////////////////////////////////////////////////////////
//end variables


//functions
///////////////////////////////////////////////////////////////////////

//displays word
function display(word) {
	consoleWord.textContent = word;	
}

//returns a string of word.length _ 's 
function initialWordSet(word) {
	var blanks = ""
	for (var i = 0; i < word.length; i++) {
		blanks+="_";
	}
	return blanks;
}

//compares userInput to each index of currentWord string, creates new string
function wordSetter(currentWord, letter) {
	var newString = dynamicWord;

	for(var i = 0; i < currentWord.length; i++) {

		var place = currentWord.charAt([i]);

		if(place === letter) {
			console.log("dynamicWord: " + dynamicWord);
			newString = newString.replaceAt(i, letter);
			console.log("newString: " + newString);
		} 
	}
	return newString;
}

//randomly selects a videogame console from vgSystems array
function rand(arry) {
	var gen = vgSystems.name[Math.floor(Math.random() * vgSystems.name.length)];
	return gen;
}

//checks if the input is in the word
function wordChecker(currentWord, letter){
	for(var i = 0; i < currentWord.length; i++) {
		var place = currentWord.charAt([i]);
		if (place === letter) {
			return true;
		} 
	}
	return false;
}

//stores the letters that are guessed that are not in the word
function storedInputs(letters) {

	if (usedLets.indexOf(letters) > -1) {
		return false;
	}
	usedLets.push(letters);
    guessed.textContent = usedLets;
}

//replace character in a string at a given index
String.prototype.replaceAt=function(index, replacement) {
    return this.substr(0, index) + replacement+ this.substr(index + replacement.length);
}

//sees if the player has won
function completeCheck() {
	if (dynamicWord === randWord) {
		winCounter++;
		wins.textContent = winCounter;
		return true;
	} else {
		return false;
	}
}

//checks if letter is alphabetical
var letterChecker = function(key){
	return /^[A-Z]$/i.test(key);
}
////////////////////////////////////////////////////////////////////
//end functions


//captures user input
//executes most of the game code
document.onkeyup = function(event) {

	// Determine which key was pressed, make it lowercase, and set it to the userInput variable.
  var userInput = String.fromCharCode(event.keyCode).toLowerCase();
  console.log(userInput);

  //check if key has already been pressed
  if (usedLets.indexOf(userInput) > -1) {
  	return false;
  }

  //checks if input is a letter
  if (!letterChecker(userInput)) {
	  return false;
	} 

  //checks if the letter is in the word
  var boolCheck = wordChecker(randWord, userInput);

  if (boolCheck === true) { 

  	dynamicWord = wordSetter(randWord, userInput);

  } else {
  	storedInputs(userInput);
  	lifeCounter--;
  	lives.textContent = lifeCounter;
    if (lifeCounter === 0) {
    	lossCounter++;
    	losses.textContent = lossCounter;

  		randWord = rand(vgSystems.name);
  		indy = vgSystems.name.indexOf(randWord);
  		dynamicWord = initialWordSet(randWord);
  		usedLets = [];
  		guessed.textContent = "";
  		lifeCounter = 6;
  		lives.textContent = lifeCounter;
  		display(dynamicWord);
  		pic.innerHTML = '<img>';
   		man.innerHTML = '<img>';
   		info.innerHTML = "Hints: When 2 guesses remain, recieve a brief clue. When 1 guess remains, recieve an image"
  	}
  }
  display(dynamicWord);

  // updates hang man pics and delivers hints
  if (lifeCounter === 5) {man.innerHTML = "<img src ='assets/images/hangmanimg/init.png'>";}
	if (lifeCounter === 4) {man.innerHTML = "<img src ='assets/images/hangmanimg/bod.png'>";}
	if (lifeCounter === 3) {man.innerHTML = "<img src ='assets/images/hangmanimg/leg.png'>";}
	if (lifeCounter === 2) {
			man.innerHTML = "<img src ='assets/images/hangmanimg/arms.png'>";
			info.innerHTML = vgSystems.info[indy];
	}
	if (lifeCounter === 1) {
		man.innerHTML = "<img src ='assets/images/hangmanimg/head.png'>";
		pic.innerHTML = vgSystems.img[indy];
	}
  
  //checks if word is completed, and  resets game
  if (completeCheck()){
  	randWord = rand(vgSystems.name);
  	dynamicWord = initialWordSet(randWord);
  	usedLets = [];
  	guessed.textContent = "";
  	lifeCounter = 6;
  	lives.textContent = lifeCounter;
  	indy = vgSystems.name.indexOf(randWord);
 		pic.innerHTML = '<img>';
		  man.innerHTML = '<img>';
 		info.innerHTML = "Hints: When 2 guesses remain, recieve a brief clue. When 1 guess remains, recieve an image"
  	display(dynamicWord);
  }
};