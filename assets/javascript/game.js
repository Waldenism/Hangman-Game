//variables
/////////////////////////////////////////////////////////////////////////////////
//Array of video game systems
var vgSystems = [
	"snes",
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
	"panasoniccdi",
	"colecovision",
	"intellevision",
	"zxspectrum",
	"commodore",
	"turbocd",
	"neogeo",
	"gameboy",
	"psp",
	"gameboyadvance",
	"pc"
];

//assigns random word from vgSystems array
randWord = rand(vgSystems);

//grabs html div
var consoleWord = document.getElementById("gameWord");

//grabs html span
var guessed = document.getElementById("guessedLets");

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

	//update word area
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
	var gen = vgSystems[Math.floor(Math.random() * vgSystems.length)];
	return gen;
}

//checks if the input is in the word
function checker(currentWord, letter){
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


    //checks if the letter is in the word
    var boolCheck = checker(randWord, userInput);

    if (boolCheck === true) { 

    	dynamicWord = wordSetter(randWord, userInput);

    } else {
    	storedInputs(userInput);
    	lifeCounter--;
    	lives.textContent = lifeCounter;
    	if (lifeCounter === 0) {
    		lossCounter++;
    		losses.textContent = lossCounter;

    		randWord = rand(vgSystems);
    		dynamicWord = initialWordSet(randWord);
    		usedLets = [];
    		guessed.textContent = "";
    		lifeCounter = 6;
    		lives.textContent = lifeCounter;
    		display(dynamicWord);
    	}

    }
    display(dynamicWord);

    //checks if word is completed, and generates a new word
    if (completeCheck()){
    	randWord = rand(vgSystems);
    	dynamicWord = initialWordSet(randWord);
    	usedLets = [];
    	guessed.textContent = "";
    	lifeCounter = 6;
    	lives.textContent = lifeCounter;
    	display(dynamicWord);
    }
};











