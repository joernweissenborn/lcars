// Simple audio event module and wire-up for a futuristic compturized GUI.
// Should be called at the end of the page, when document is nearly ready.
// Authored by justin.warwick@gmail.com
// Released under MIT license; see LICENSE file.
//
// Assumes you have this at the bottom of your document:
//   <audio id="audUmmy"/><!--Just leave this here, just needed to enable automatic query canplay in the initialization code to load compatible media types -->


var lcarsAudio = {
	audioExtensions: {
		ogg: "ogg",
		webm:"webm",
		mp4: "aac"
	},
	audioPath: "./audio/",
	audioType: "",
	//Inidividual Sound Element holders
	audTactInputAcknowledge:    null,
	audTactInputAltAcknowledge: null,
	audTactInputNegAcknowledge: null,
	audAlert:                   null,
	audRedAlert:                null,
	initialize: function(auDummy) {
		//Determine browser capability and willingness
		for (var key in this.audioExtensions) {
			if (auDummy.canPlayType("audio/"+this.audioExtensions[key]) != '') {
				auDummy.src = this.audioPath + "ready." + key;
				//TODO: test it further??
				console.log(auDummy.src + "   " +auDummy.src.lastIndexOf(".")); 
				this.audioType =  auDummy.src.slice(auDummy.src.lastIndexOf(".") + 1);
				console.log("lcarsAudio: We have a winner: " + this.audioType);
				break;
			}
		}
		this.audTactInputAcknowledge = new Audio("audio/tactinput_acknowledge." + this.audioType);
		this.audTactInputAltAcknowledge = new Audio("audio/tactinput_alt_acknowledge." + this.audioType);
		this.audTactInputNegAcknowledge = new Audio("audio/tactinput_neg_acknowledge." + this.audioType);
		this.audAlert = new Audio("audio/alert." + this.audioType);
		this.audRedAlert = new Audio("audio/red_alert." + this.audioType);
		this.audReady = new Audio("audio/ready." + this.audioType);

		//Actual Standard Wire-up steps
		var button_list = document.querySelectorAll("#container div.lcars-element.button, div.lcars-app-container div.lcars-element.button");
		for (var button of button_list) {
			console.log("Audio-enabling container-contained button " + button.id + " " + button.innerText);
			button.addEventListener("click", function(){ lcarsAudio.TactileInputAcknowledge(); }); 
		}

		button_list = document.querySelectorAll("path.button");
		for (var button of button_list) {
			console.log("Audio-enabling SVG button " + button.id + " " + button.innerText);
			button.addEventListener("click", function(){ lcarsAudio.TactileInputAcknowledge(); }); 
		}

		button_list = document.querySelectorAll(".lcars-tactinput-acknowledge-audio");
		for (var button of button_list) {
			console.log("Audio-enabling button " + button.id + " " + button.innerText);
			button.addEventListener("click", function(){ lcarsAudio.TactileInputAcknowledge(); }); 
		}
		button_list = document.querySelectorAll(".lcars-tactinput-alt-acknowledge-audio");
		for (var button of button_list) {
			console.log("Audio-enabling button " + button.id + " " + button.innerText);
			button.addEventListener("click", function(){ lcarsAudio.TactileInputAlternateAcknowledge(); }); 
		}
		button_list = document.querySelectorAll(".lcars-tactinput-neg-acknowledge-audio");
		for (var button of button_list) {
			console.log("Audio-enabling button " + button.id + " " + button.innerText);
			button.addEventListener("click", function(){ lcarsAudio.TactileInputNegativeAcknowledge(); }); 
		}
		button_list = document.querySelectorAll(".lcars-alert-audio");
		for (var button of button_list) {
			console.log("Audio-enabling button " + button.id + " " + button.innerText);
			button.addEventListener("click", function(){ lcarsAudio.Alert(); }); 
		}
		button_list = document.querySelectorAll(".lcars-red-alert-audio");
		for (var button of button_list) {
			console.log("Audio-enabling button " + button.id + " " + button.innerText);
			button.addEventListener("click", function(){ lcarsAudio.RedAlert(); }); 
		}
	},
	TactileInputAcknowledge: function() {
		this.audTactInputAcknowledge.play();
	},
	TactileInputAlternateAcknowledge: function () {
		this.audTactInputAltAcknowledge.play();
	},
	TactileInputNegativeAcknowledge: function () {
		this.audTactInputNegAcknowledge.play();
	},
	Alert: function () {
		window.console && console.log(this.audAlert.readyState)
		//audAlert.load();
		this.audAlert.play();
		//TODO:bonus: have a fallback for no supported file types (or MUTE active):  
		//floating div pops up and flashes, then disappears. 
	},
	RedAlert: function () {
		window.console && console.log(this.audAlert.readyState)
		this.audRedAlert.play();
		//TODO:bonus: have a fallback for no supported file types (or MUTE active):  
		//floating div pops up and flashes, then disappears. 
	},
	Ready: function () {
		this.audReady.play();
	}
}

function enableAudio(el) {
	if (el.classList.contains("disabled")) {
		el.addEventListener("click", function(){ audioNegativeAcknowledge(); }); 
	} else {
		el.addEventListener("click", function(){ audioAcknowledge(); }); 
	}
}

//=\\ Standard Wire-up
var audDummy = document.getElementById("audDummy").appendChild(document.createElement("audio"));
lcarsAudio.initialize(audDummy);

//All "booted" up notification. 
//Many browsers won't play this next sound because the user hasn't "blessed" the action with a UI click yet.
document.addEventListener("DOMContentLoaded", function(event) { 
	console.log("lcarsAudio: Attempting to play " + lcarsAudio.Ready);
	lcarsAudio.Ready();
});

