$(document).ready(function(){


	// $("#jquery_jplayer_1").jPlayer("volume", 1.0);
  // $("#jquery_jplayer_2").jPlayer("volume", 1.0);
  // $("#jquery_jplayer_3").jPlayer("volume", 1.0);
  // $("#jquery_jplayer_4").jPlayer("volume", 1.0);
  // $("#jquery_jplayer_5").jPlayer("volume", 1.0);
  // $("#jquery_jplayer_6").jPlayer("volume", 1.0);
  // $("#jquery_jplayer_7").jPlayer("volume", 1.0);


	function initializeTreatment() {
		$(".background").addClass("treatment-disabled");
		$(".track-tile:first-child .background")
			.removeClass("treatment-disabled")
			.addClass("treatment-idle")
		;
	}

	function updateTreatment() {
		$(".background").each(function() {
			if ($(this).hasClass("treatment-disabled")) {
				$(this).find(".button").prop("disabled", true);
			}
			if ($(this).hasClass("treatment-idle")) {
				$(this).find(".jp-play").prop("disabled", false);
				$(this).find(".jp-fadeout").prop("disabled", true);
			}
			if ($(this).hasClass("treatment-playing")) {
				$(this).find(".jp-play").prop("disabled", true);
				$(this).find(".jp-fadeout").prop("disabled", false);
			}
			if ($(this).hasClass("treatment-fading-out")) {
				$(this).find(".button").prop("disabled", true);
			}
			if ($(this).hasClass("treatment-finished")) {
				$(this).find(".button").prop("disabled", true);
				$(this).parents(".track-tile").addClass("finished")
			}
		});

		if ($(".track-tile.finished").length == $(".track-tile").length) {
			setTimeout(function(){
	    	$("#end-screen").addClass("visible");
	    }, 2000);
		}
	}

	initializeTreatment();
	updateTreatment();


  $(".jp-play").click(function() {
		var thisTrack = $(this).parents(".track-tile");

		thisTrack.children(".background").removeClass("treatment-idle");
		thisTrack.children(".background").removeClass("treatment-playing");
		thisTrack.children(".background").removeClass("treatment-finished");
    thisTrack.children(".background").addClass("treatment-playing");

		$(this).prop("disabled", true);
		thisTrack.find(".jp-fadeout").prop("disabled", false);
  });

  $(".jp-fadeout").click(function() {
		var thisButton = $(this);
		var thisTrack = $(this).parents(".track-tile");
    var thisID = thisTrack.data("player");
    var thisPlayer = $('.jp-jplayer[data-player="' + thisID + '"]');

		thisTrack.children(".background")
			.addClass("treatment-fading-out")
		;
		$(this)
			.prop("disabled", true)
			.text("Fading Out...")
		;
		thisTrack.next(".track-tile").children(".background")
			.removeClass("treatment-disabled")
			.addClass("treatment-idle")
		;
		updateTreatment();

    thisPlayer.jPlayerFade().out(4000);
    setTimeout(function(){
      thisPlayer.jPlayer("stop");
			thisPlayer.jPlayerFade().in(100);
			thisTrack.find(".jp-play").prop("disabled", false);
			thisTrack.children(".background")
				.removeClass("treatment-fading-out")
				.removeClass("treatment-playing")
    		.addClass("treatment-finished");
			;
			updateTreatment();
			thisButton.text("Fade Out");
    }, 5000);
  });

	$(".button").bind("touchstart", function() {
    $(this).addClass(".button-active");
  }).bind("touchend", function() {
      $(this).removeClass(".button-active");
  });

	$('.jp-jplayer').unbind($.jPlayer.event.ended).bind($.jPlayer.event.ended, function() {
		var thisTrack = $(this).parents(".track-tile");

		thisTrack.children(".background")
			.removeClass("treatment-playing")
			.addClass("treatment-finished")
		;
		$(this).find(".jp-fadeout")
			.prop("disabled", true)
			.text("Fading Out...")
		;
		thisTrack.next(".track-tile").children(".background")
			.removeClass("treatment-disabled")
			.addClass("treatment-idle")
		;
		updateTreatment();
	});

	//$("#slider-1").slider();

	// New jPlayer Track
	var myPlayer = $("#jquery_jplayer_1"),
		myPlayerData,
		options = {
			ready: function (event) {
				$(this).jPlayer("setMedia", {
					//mp3: "audio/1-bob-entrance.mp3"
					mp3: "audio/test.mp3"
				});
			},
			supplied: "mp3",
			volume: 1,
			cssSelectorAncestor: "#jp_container_1",
			wmode: "window",
			keyEnabled: true
		}
		myPlayer.jPlayer(options);
		myPlayerData = myPlayer.data("jPlayer");


	// New jPlayer Track
	var myPlayer = $("#jquery_jplayer_2"),
		myPlayerData,
		options = {
			ready: function (event) {
				$(this).jPlayer("setMedia", {
					mp3: "audio/2-amy-entrance.mp3"
					//mp3: "audio/test.mp3"
				});
			},
			supplied: "mp3",
			volume: 1,
			cssSelectorAncestor: "#jp_container_2",
			wmode: "window",
			keyEnabled: true
		}
		myPlayer.jPlayer(options);
		myPlayerData = myPlayer.data("jPlayer");


	// New jPlayer Track
	var myPlayer = $("#jquery_jplayer_3"),
		myPlayerData,
		options = {
			ready: function (event) {
				$(this).jPlayer("setMedia", {
					mp3: "audio/3-final-frontier.mp3"
					//mp3: "audio/test.mp3"
				});
			},
			supplied: "mp3",
			volume: 1,
			cssSelectorAncestor: "#jp_container_3",
			wmode: "window",
			keyEnabled: true
		}
		myPlayer.jPlayer(options);
		myPlayerData = myPlayer.data("jPlayer");


	// New jPlayer Track
	var myPlayer = $("#jquery_jplayer_4"),
		myPlayerData,
		options = {
			ready: function (event) {
				$(this).jPlayer("setMedia", {
					mp3: "audio/4-background-music-1.mp3"
					//mp3: "audio/test.mp3"
				});
			},
			supplied: "mp3",
			volume: 0.015,
			cssSelectorAncestor: "#jp_container_4",
			wmode: "window",
			keyEnabled: true
		}
		myPlayer.jPlayer(options);
		myPlayerData = myPlayer.data("jPlayer");


		// New jPlayer Track
		var myPlayer = $("#jquery_jplayer_5"),
			myPlayerData,
			options = {
				ready: function (event) {
					$(this).jPlayer("setMedia", {
						mp3: "audio/5-background-music-2.mp3"
						//mp3: "audio/test.mp3"
					});
				},
				supplied: "mp3",
				volume: 0.015,
				cssSelectorAncestor: "#jp_container_5",
				wmode: "window",
				keyEnabled: true
			}
			myPlayer.jPlayer(options);
			myPlayerData = myPlayer.data("jPlayer");


		// New jPlayer Track
		var myPlayer = $("#jquery_jplayer_6"),
			myPlayerData,
			options = {
				ready: function (event) {
					$(this).jPlayer("setMedia", {
						mp3: "audio/6-background-music-3.mp3"
						//mp3: "audio/test.mp3"
					});
				},
				supplied: "mp3",
				volume: 0.015,
				cssSelectorAncestor: "#jp_container_6",
				wmode: "window",
				keyEnabled: true
			}
			myPlayer.jPlayer(options);
			myPlayerData = myPlayer.data("jPlayer");


		// New jPlayer Track
		var myPlayer = $("#jquery_jplayer_7"),
			myPlayerData,
			options = {
				ready: function (event) {
					$(this).jPlayer("setMedia", {
						mp3: "audio/8-recessional-placeholder.mp3"
						//mp3: "audio/7-recessional.mp3"
						//mp3: "audio/test.mp3"
					});
				},
				supplied: "mp3",
				volume: 1,
				cssSelectorAncestor: "#jp_container_7",
				wmode: "window",
				keyEnabled: true
			}
			myPlayer.jPlayer(options);
			myPlayerData = myPlayer.data("jPlayer");


	// var myPlayer = $("#jquery_jplayer_2"),
	// 	myPlayerData,
	// 	ignore_timeupdate, // Flag used with fixFlash_mp4
	// 	options = {
	// 		ready: function (event) {
	// 			// Hide the volume slider on mobile browsers. ie., They have no effect.
	// 			if(event.jPlayer.status.noVolume) {
	// 				// Add a class and then CSS rules deal with it.
	// 				$(".jp-gui").addClass("jp-no-volume");
	// 			}
	// 			// Determine if Flash is being used and the mp4 media type is supplied. BTW, Supplying both mp3 and mp4 is pointless.
	// 			fixFlash_mp4 = event.jPlayer.flash.used && /m4a|m4v/.test(event.jPlayer.options.supplied);
	// 			// Setup the player with media.
	// 			$(this).jPlayer("setMedia", {
	//
	// 				mp3: "audio/2-amy-entrance.mp3"
	// 			});
	// 		},
	// 		timeupdate: function(event) {
	// 			if(!ignore_timeupdate) {
	// 				myControl.progress.slider("value", event.jPlayer.status.currentPercentAbsolute);
	// 			}
	// 		},
	// 		volumechange: function(event) {
	// 			if(event.jPlayer.options.muted) {
	// 				myControl.volume.slider("value", 0);
	// 			} else {
	// 				myControl.volume.slider("value", event.jPlayer.options.volume);
	// 			}
	// 		},
	// 		supplied: "mp3",
	// 		cssSelectorAncestor: "#jp_container_2",
	// 		wmode: "window",
	// 		keyEnabled: true
	// 	},
	// 	myControl = {
	// 		progress: $(options.cssSelectorAncestor + " .jp-progress-slider"),
	// 		volume: $(options.cssSelectorAncestor + " .jp-volume-slider")
	// 	};
	// // Instance jPlayer
	// myPlayer.jPlayer(options);
	//
	// // A pointer to the jPlayer data object
	// myPlayerData = myPlayer.data("jPlayer");
	//
	// // Define hover states of the buttons
	// $('.jp-gui ul li').hover(
	// 	function() { $(this).addClass('ui-state-hover'); },
	// 	function() { $(this).removeClass('ui-state-hover'); }
	// );
	//
	// // Create the progress slider control
	// myControl.progress.slider({
	// 	animate: "fast",
	// 	max: 100,
	// 	range: "min",
	// 	step: 0.1,
	// 	value : 0,
	// 	slide: function(event, ui) {
	// 		var sp = myPlayerData.status.seekPercent;
	// 		if(sp > 0) {
	// 			// Apply a fix to mp4 formats when the Flash is used.
	// 			if(fixFlash_mp4) {
	// 				ignore_timeupdate = true;
	// 				clearTimeout(fixFlash_mp4_id);
	// 				fixFlash_mp4_id = setTimeout(function() {
	// 					ignore_timeupdate = false;
	// 				},1000);
	// 			}
	// 			// Move the play-head to the value and factor in the seek percent.
	// 			myPlayer.jPlayer("playHead", ui.value * (100 / sp));
	// 		} else {
	// 			// Create a timeout to reset this slider to zero.
	// 			setTimeout(function() {
	// 				myControl.progress.slider("value", 0);
	// 			}, 0);
	// 		}
	// 	}
	// });

});
