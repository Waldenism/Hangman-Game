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
console.log(randWord);

//grabs html div
var consoleWord = document.getElementById("gameWord");

//grabs html span
var guessed = document.getElementById("guessedLets");

//stores incorrect letters
var usedLets = [];
console.log(usedLets);

//stores updated game word
var dynamicWord;
console.log(dynamicWord);

////////////////////////////////////////////////////////////////////////////////
//end variables







//functions
///////////////////////////////////////////////////////////////////////

//displays word
function display(word) {

}

//returns a string of word.length _ 's 
/*function initialWordSet(word) {
	var blanks = ""
	for (var i = 0; i < word.length; i++) {
		blanks+="_";
	}
	return blanks;
}*/

//compares userInput to each index of currentWord string, creates new string
function wordSetter(currentWord, letter) {
	var newString = "";

	for(var i = 0; i < currentWord.length; i++) {

		var place = currentWord.charAt([i]);

		if(place === letter) {
			newString += currentWord[i];
		} else {
			newString += "_";
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
	usedLets.push(letters);
    guessed.textContent = usedLets;
}

//replace character in a string at a given index
String.prototype.replaceAt=function(index, replacement) {
    return this.substr(0, index) + replacement+ this.substr(index + replacement.length);
}

//captures user input
document.onkeyup = function(event) {

	// Determine which key was pressed, make it lowercase, and set it to the userInput variable.
    var userInput = String.fromCharCode(event.keyCode).toLowerCase();
    console.log(userInput);

    //checks if the letter is in the word
    var boolCheck = checker(randWord, userInput);

    if (boolCheck === true) { 

    	dynamicWord = wordSetter(randWord, userInput);
    	consoleWord.textContent = dynamicWord;

    } else {
    	storedInputs(userInput);
    }

};











