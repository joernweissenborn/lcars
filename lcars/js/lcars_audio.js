// Simple audio event wire-up for a futuristic compturized GUI.
// Should be called at the end of the page, when document is nearly ready.
// Authored by justin.warwick@gmail.com
// Released under MIT license; see LICENSE file.
//
// Assumes you have this at the bottom of your document:
//   <audio id="audUmmy"/><!--Just leave this here, just needed to enable automatic query canplay in the initialization code to load compatible media types -->



//=\\ Standard Wire-up

var audioExtensions = {};
	audioExtensions["ogg"] = "ogg";
	audioExtensions["webm"] = "webm";
	audioExtensions["mp4"] = "aac";
var audioPath = "./audio/";
var audioType;

var audAck;
var audAlert;
var audInput;

auDummy = document.getElementById("audUmmy").appendChild(document.createElement("audio"));
for (var key in audioExtensions) {
	if (auDummy.canPlayType("audio/"+audioExtensions[key]) != '') {
		auDummy.src = audioPath + "input_ack." + key;
		//TODO: test it further??
		console.log(auDummy.src + "   " +auDummy.src.lastIndexOf(".")); 
		audioType =  auDummy.src.slice(auDummy.src.lastIndexOf(".") + 1);
		console.log("We have a winner: " + audioType);
		break;
	}
}
audAck   = new Audio("audio/input_ack." + audioType);
audNak   = new Audio("audio/input_neg_ack." + audioType);
audAlert = new Audio("audio/output_bel." + audioType);
audReady = new Audio("audio/output_soh." + audioType);


function audioAcknowledge() {
	audAck.play();
}

function audioNegativeAcknowledge() {
	audNak.play();
}

function audioAlert() {
        window.console && console.log(audAlert.readyState)
		//audAlert.load();
        audAlert.play();
		//TODO:bonus: have a fallback for no supported file types (or MUTE active):  floating div pops up and flashes, then disappears. der blinken lights
}

function audioReady() {
	audReady.play();
}


var button_list = document.querySelectorAll("#container div.lcars-element.button");
for (var button of button_list) {
	console.log("Audio-enabling button " + button.id + " " + button.innerText);
	button.addEventListener("click", function(){ audioAcknowledge(); }); 
}


//All "booted" up. Many browsers won't play this next sound because the user hasn't "blessed" the action with a UI click yet.
document.addEventListener("DOMContentLoaded", function(event) { 
	console.log("Attempting to play " + audReady);
	audioReady();
});

