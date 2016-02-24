$(document).ready(function(){

	/*
	 * jQuery UI ThemeRoller
	 *
	 * Includes code to hide GUI volume controls on mobile devices.
	 * ie., Where volume controls have no effect. See noVolume option for more info.
	 *
	 * Includes fix for Flash solution with MP4 files.
	 * ie., The timeupdates are ignored for 1000ms after changing the play-head.
	 * Alternative solution would be to use the slider option: {animate:false}
	 */

	var myPlayer = $("#jquery_jplayer_1"),
		myPlayerData,
		ignore_timeupdate, // Flag used with fixFlash_mp4
		options = {
			ready: function (event) {
				// Hide the volume slider on mobile browsers. ie., They have no effect.
				if(event.jPlayer.status.noVolume) {
					// Add a class and then CSS rules deal with it.
					$(".jp-gui").addClass("jp-no-volume");
				}
				// Determine if Flash is being used and the mp4 media type is supplied. BTW, Supplying both mp3 and mp4 is pointless.
				fixFlash_mp4 = event.jPlayer.flash.used && /m4a|m4v/.test(event.jPlayer.options.supplied);
				// Setup the player with media.
				$(this).jPlayer("setMedia", {

					mp3: "audio/1-bob-entrance.mp3"
				});
			},
			timeupdate: function(event) {
				if(!ignore_timeupdate) {
					myControl.progress.slider("value", event.jPlayer.status.currentPercentAbsolute);
				}
			},
			volumechange: function(event) {
				if(event.jPlayer.options.muted) {
					myControl.volume.slider("value", 0);
				} else {
					myControl.volume.slider("value", event.jPlayer.options.volume);
				}
			},
			supplied: "mp3",
			cssSelectorAncestor: "#jp_container_1",
			wmode: "window",
			keyEnabled: true
		},
		myControl = {
			progress: $(options.cssSelectorAncestor + " .jp-progress-slider"),
			volume: $(options.cssSelectorAncestor + " .jp-volume-slider")
		};
	// Instance jPlayer
	myPlayer.jPlayer(options);

	// A pointer to the jPlayer data object
	myPlayerData = myPlayer.data("jPlayer");

	// Define hover states of the buttons
	$('.jp-gui ul li').hover(
		function() { $(this).addClass('ui-state-hover'); },
		function() { $(this).removeClass('ui-state-hover'); }
	);

	// Create the progress slider control
	myControl.progress.slider({
		animate: "fast",
		max: 100,
		range: "min",
		step: 0.1,
		value : 0,
		slide: function(event, ui) {
			var sp = myPlayerData.status.seekPercent;
			if(sp > 0) {
				// Apply a fix to mp4 formats when the Flash is used.
				if(fixFlash_mp4) {
					ignore_timeupdate = true;
					clearTimeout(fixFlash_mp4_id);
					fixFlash_mp4_id = setTimeout(function() {
						ignore_timeupdate = false;
					},1000);
				}
				// Move the play-head to the value and factor in the seek percent.
				myPlayer.jPlayer("playHead", ui.value * (100 / sp));
			} else {
				// Create a timeout to reset this slider to zero.
				setTimeout(function() {
					myControl.progress.slider("value", 0);
				}, 0);
			}
		}
	});

	var myPlayer = $("#jquery_jplayer_2"),
		myPlayerData,
		ignore_timeupdate, // Flag used with fixFlash_mp4
		options = {
			ready: function (event) {
				// Hide the volume slider on mobile browsers. ie., They have no effect.
				if(event.jPlayer.status.noVolume) {
					// Add a class and then CSS rules deal with it.
					$(".jp-gui").addClass("jp-no-volume");
				}
				// Determine if Flash is being used and the mp4 media type is supplied. BTW, Supplying both mp3 and mp4 is pointless.
				fixFlash_mp4 = event.jPlayer.flash.used && /m4a|m4v/.test(event.jPlayer.options.supplied);
				// Setup the player with media.
				$(this).jPlayer("setMedia", {

					mp3: "audio/2-amy-entrance.mp3"
				});
			},
			timeupdate: function(event) {
				if(!ignore_timeupdate) {
					myControl.progress.slider("value", event.jPlayer.status.currentPercentAbsolute);
				}
			},
			volumechange: function(event) {
				if(event.jPlayer.options.muted) {
					myControl.volume.slider("value", 0);
				} else {
					myControl.volume.slider("value", event.jPlayer.options.volume);
				}
			},
			supplied: "mp3",
			cssSelectorAncestor: "#jp_container_2",
			wmode: "window",
			keyEnabled: true
		},
		myControl = {
			progress: $(options.cssSelectorAncestor + " .jp-progress-slider"),
			volume: $(options.cssSelectorAncestor + " .jp-volume-slider")
		};
	// Instance jPlayer
	myPlayer.jPlayer(options);

	// A pointer to the jPlayer data object
	myPlayerData = myPlayer.data("jPlayer");

	// Define hover states of the buttons
	$('.jp-gui ul li').hover(
		function() { $(this).addClass('ui-state-hover'); },
		function() { $(this).removeClass('ui-state-hover'); }
	);

	// Create the progress slider control
	myControl.progress.slider({
		animate: "fast",
		max: 100,
		range: "min",
		step: 0.1,
		value : 0,
		slide: function(event, ui) {
			var sp = myPlayerData.status.seekPercent;
			if(sp > 0) {
				// Apply a fix to mp4 formats when the Flash is used.
				if(fixFlash_mp4) {
					ignore_timeupdate = true;
					clearTimeout(fixFlash_mp4_id);
					fixFlash_mp4_id = setTimeout(function() {
						ignore_timeupdate = false;
					},1000);
				}
				// Move the play-head to the value and factor in the seek percent.
				myPlayer.jPlayer("playHead", ui.value * (100 / sp));
			} else {
				// Create a timeout to reset this slider to zero.
				setTimeout(function() {
					myControl.progress.slider("value", 0);
				}, 0);
			}
		}
	});



	var myPlayer = $("#jquery_jplayer_3"),
		myPlayerData,
		ignore_timeupdate, // Flag used with fixFlash_mp4
		options = {
			ready: function (event) {
				// Hide the volume slider on mobile browsers. ie., They have no effect.
				if(event.jPlayer.status.noVolume) {
					// Add a class and then CSS rules deal with it.
					$(".jp-gui").addClass("jp-no-volume");
				}
				// Determine if Flash is being used and the mp4 media type is supplied. BTW, Supplying both mp3 and mp4 is pointless.
				fixFlash_mp4 = event.jPlayer.flash.used && /m4a|m4v/.test(event.jPlayer.options.supplied);
				// Setup the player with media.
				$(this).jPlayer("setMedia", {

					mp3: "audio/3-final-frontier.mp3"
				});
			},
			timeupdate: function(event) {
				if(!ignore_timeupdate) {
					myControl.progress.slider("value", event.jPlayer.status.currentPercentAbsolute);
				}
			},
			volumechange: function(event) {
				if(event.jPlayer.options.muted) {
					myControl.volume.slider("value", 0);
				} else {
					myControl.volume.slider("value", event.jPlayer.options.volume);
				}
			},
			supplied: "mp3",
			cssSelectorAncestor: "#jp_container_3",
			wmode: "window",
			keyEnabled: true
		},
		myControl = {
			progress: $(options.cssSelectorAncestor + " .jp-progress-slider"),
			volume: $(options.cssSelectorAncestor + " .jp-volume-slider")
		};

	// Instance jPlayer
	myPlayer.jPlayer(options);

	// A pointer to the jPlayer data object
	myPlayerData = myPlayer.data("jPlayer");

	// Define hover states of the buttons
	$('.jp-gui ul li').hover(
		function() { $(this).addClass('ui-state-hover'); },
		function() { $(this).removeClass('ui-state-hover'); }
	);

	// Create the progress slider control
	myControl.progress.slider({
		animate: "fast",
		max: 100,
		range: "min",
		step: 0.1,
		value : 0,
		slide: function(event, ui) {
			var sp = myPlayerData.status.seekPercent;
			if(sp > 0) {
				// Apply a fix to mp4 formats when the Flash is used.
				if(fixFlash_mp4) {
					ignore_timeupdate = true;
					clearTimeout(fixFlash_mp4_id);
					fixFlash_mp4_id = setTimeout(function() {
						ignore_timeupdate = false;
					},1000);
				}
				// Move the play-head to the value and factor in the seek percent.
				myPlayer.jPlayer("playHead", ui.value * (100 / sp));
			} else {
				// Create a timeout to reset this slider to zero.
				setTimeout(function() {
					myControl.progress.slider("value", 0);
				}, 0);
			}
		}
	});



  var myPlayer = $("#jquery_jplayer_4"),
		myPlayerData,
		ignore_timeupdate, // Flag used with fixFlash_mp4
		options = {
			ready: function (event) {
				// Hide the volume slider on mobile browsers. ie., They have no effect.
				if(event.jPlayer.status.noVolume) {
					// Add a class and then CSS rules deal with it.
					$(".jp-gui").addClass("jp-no-volume");
				}
				// Determine if Flash is being used and the mp4 media type is supplied. BTW, Supplying both mp3 and mp4 is pointless.
				fixFlash_mp4 = event.jPlayer.flash.used && /m4a|m4v/.test(event.jPlayer.options.supplied);
				// Setup the player with media.
				$(this).jPlayer("setMedia", {
					mp3: "audio/4-background-music-1.mp3"
				});
			},
			timeupdate: function(event) {
				if(!ignore_timeupdate) {
					myControl.progress.slider("value", event.jPlayer.status.currentPercentAbsolute);
				}
			},
			volumechange: function(event) {
				if(event.jPlayer.options.muted) {
					myControl.volume.slider("value", 0);
				} else {
					myControl.volume.slider("value", event.jPlayer.options.volume);
				}
			},
			supplied: "mp3",
			cssSelectorAncestor: "#jp_container_4",
			wmode: "window",
			keyEnabled: true
		},
		myControl = {
			progress: $(options.cssSelectorAncestor + " .jp-progress-slider"),
			volume: $(options.cssSelectorAncestor + " .jp-volume-slider")
		};
	// Instance jPlayer
	myPlayer.jPlayer(options);

	// A pointer to the jPlayer data object
	myPlayerData = myPlayer.data("jPlayer");

	// Define hover states of the buttons
	$('.jp-gui ul li').hover(
		function() { $(this).addClass('ui-state-hover'); },
		function() { $(this).removeClass('ui-state-hover'); }
	);

	// Create the progress slider control
	myControl.progress.slider({
		animate: "fast",
		max: 100,
		range: "min",
		step: 0.1,
		value : 0,
		slide: function(event, ui) {
			var sp = myPlayerData.status.seekPercent;
			if(sp > 0) {
				// Apply a fix to mp4 formats when the Flash is used.
				if(fixFlash_mp4) {
					ignore_timeupdate = true;
					clearTimeout(fixFlash_mp4_id);
					fixFlash_mp4_id = setTimeout(function() {
						ignore_timeupdate = false;
					},1000);
				}
				// Move the play-head to the value and factor in the seek percent.
				myPlayer.jPlayer("playHead", ui.value * (100 / sp));
			} else {
				// Create a timeout to reset this slider to zero.
				setTimeout(function() {
					myControl.progress.slider("value", 0);
				}, 0);
			}
		}
	});


  var myPlayer = $("#jquery_jplayer_5"),
		myPlayerData,
		ignore_timeupdate, // Flag used with fixFlash_mp4
		options = {
			ready: function (event) {
				// Hide the volume slider on mobile browsers. ie., They have no effect.
				if(event.jPlayer.status.noVolume) {
					// Add a class and then CSS rules deal with it.
					$(".jp-gui").addClass("jp-no-volume");
				}
				// Determine if Flash is being used and the mp4 media type is supplied. BTW, Supplying both mp3 and mp4 is pointless.
				fixFlash_mp4 = event.jPlayer.flash.used && /m4a|m4v/.test(event.jPlayer.options.supplied);
				// Setup the player with media.
				$(this).jPlayer("setMedia", {
					mp3: "audio/5-background-music-2.mp3"
				});
			},
			timeupdate: function(event) {
				if(!ignore_timeupdate) {
					myControl.progress.slider("value", event.jPlayer.status.currentPercentAbsolute);
				}
			},
			volumechange: function(event) {
				if(event.jPlayer.options.muted) {
					myControl.volume.slider("value", 0);
				} else {
					myControl.volume.slider("value", event.jPlayer.options.volume);
				}
			},
			supplied: "mp3",
			cssSelectorAncestor: "#jp_container_5",
			wmode: "window",
			keyEnabled: true
		},
		myControl = {
			progress: $(options.cssSelectorAncestor + " .jp-progress-slider"),
			volume: $(options.cssSelectorAncestor + " .jp-volume-slider")
		};
	// Instance jPlayer
	myPlayer.jPlayer(options);

	// A pointer to the jPlayer data object
	myPlayerData = myPlayer.data("jPlayer");

	// Define hover states of the buttons
	$('.jp-gui ul li').hover(
		function() { $(this).addClass('ui-state-hover'); },
		function() { $(this).removeClass('ui-state-hover'); }
	);

	// Create the progress slider control
	myControl.progress.slider({
		animate: "fast",
		max: 100,
		range: "min",
		step: 0.1,
		value : 0,
		slide: function(event, ui) {
			var sp = myPlayerData.status.seekPercent;
			if(sp > 0) {
				// Apply a fix to mp4 formats when the Flash is used.
				if(fixFlash_mp4) {
					ignore_timeupdate = true;
					clearTimeout(fixFlash_mp4_id);
					fixFlash_mp4_id = setTimeout(function() {
						ignore_timeupdate = false;
					},1000);
				}
				// Move the play-head to the value and factor in the seek percent.
				myPlayer.jPlayer("playHead", ui.value * (100 / sp));
			} else {
				// Create a timeout to reset this slider to zero.
				setTimeout(function() {
					myControl.progress.slider("value", 0);
				}, 0);
			}
		}
	});



  var myPlayer = $("#jquery_jplayer_6"),
		myPlayerData,
		ignore_timeupdate, // Flag used with fixFlash_mp4
		options = {
			ready: function (event) {
				// Hide the volume slider on mobile browsers. ie., They have no effect.
				if(event.jPlayer.status.noVolume) {
					// Add a class and then CSS rules deal with it.
					$(".jp-gui").addClass("jp-no-volume");
				}
				// Determine if Flash is being used and the mp4 media type is supplied. BTW, Supplying both mp3 and mp4 is pointless.
				fixFlash_mp4 = event.jPlayer.flash.used && /m4a|m4v/.test(event.jPlayer.options.supplied);
				// Setup the player with media.
				$(this).jPlayer("setMedia", {
					mp3: "audio/6-background-music-3.mp3"
				});
			},
			timeupdate: function(event) {
				if(!ignore_timeupdate) {
					myControl.progress.slider("value", event.jPlayer.status.currentPercentAbsolute);
				}
			},
			volumechange: function(event) {
				if(event.jPlayer.options.muted) {
					myControl.volume.slider("value", 0);
				} else {
					myControl.volume.slider("value", event.jPlayer.options.volume);
				}
			},
			supplied: "mp3",
			cssSelectorAncestor: "#jp_container_6",
			wmode: "window",
			keyEnabled: true
		},
		myControl = {
			progress: $(options.cssSelectorAncestor + " .jp-progress-slider"),
			volume: $(options.cssSelectorAncestor + " .jp-volume-slider")
		};
	// Instance jPlayer
	myPlayer.jPlayer(options);

	// A pointer to the jPlayer data object
	myPlayerData = myPlayer.data("jPlayer");

	// Define hover states of the buttons
	$('.jp-gui ul li').hover(
		function() { $(this).addClass('ui-state-hover'); },
		function() { $(this).removeClass('ui-state-hover'); }
	);

	// Create the progress slider control
	myControl.progress.slider({
		animate: "fast",
		max: 100,
		range: "min",
		step: 0.1,
		value : 0,
		slide: function(event, ui) {
			var sp = myPlayerData.status.seekPercent;
			if(sp > 0) {
				// Apply a fix to mp4 formats when the Flash is used.
				if(fixFlash_mp4) {
					ignore_timeupdate = true;
					clearTimeout(fixFlash_mp4_id);
					fixFlash_mp4_id = setTimeout(function() {
						ignore_timeupdate = false;
					},1000);
				}
				// Move the play-head to the value and factor in the seek percent.
				myPlayer.jPlayer("playHead", ui.value * (100 / sp));
			} else {
				// Create a timeout to reset this slider to zero.
				setTimeout(function() {
					myControl.progress.slider("value", 0);
				}, 0);
			}
		}
	});



  var myPlayer = $("#jquery_jplayer_7"),
		myPlayerData,
		ignore_timeupdate, // Flag used with fixFlash_mp4
		options = {
			ready: function (event) {
				// Hide the volume slider on mobile browsers. ie., They have no effect.
				if(event.jPlayer.status.noVolume) {
					// Add a class and then CSS rules deal with it.
					$(".jp-gui").addClass("jp-no-volume");
				}
				// Determine if Flash is being used and the mp4 media type is supplied. BTW, Supplying both mp3 and mp4 is pointless.
				fixFlash_mp4 = event.jPlayer.flash.used && /m4a|m4v/.test(event.jPlayer.options.supplied);
				// Setup the player with media.
				$(this).jPlayer("setMedia", {
					//mp3: "audio/7-recessional.mp3"
					mp3: "audio/8-recessional-placeholder.mp3"
				});
			},
			timeupdate: function(event) {
				if(!ignore_timeupdate) {
					myControl.progress.slider("value", event.jPlayer.status.currentPercentAbsolute);
				}
			},
			volumechange: function(event) {
				if(event.jPlayer.options.muted) {
					myControl.volume.slider("value", 0);
				} else {
					myControl.volume.slider("value", event.jPlayer.options.volume);
				}
			},
			supplied: "mp3",
			cssSelectorAncestor: "#jp_container_7",
			wmode: "window",
			keyEnabled: true
		},
		myControl = {
			progress: $(options.cssSelectorAncestor + " .jp-progress-slider"),
			volume: $(options.cssSelectorAncestor + " .jp-volume-slider")
		};
	// Instance jPlayer
	myPlayer.jPlayer(options);

	// A pointer to the jPlayer data object
	myPlayerData = myPlayer.data("jPlayer");

	// Define hover states of the buttons
	$('.jp-gui ul li').hover(
		function() { $(this).addClass('ui-state-hover'); },
		function() { $(this).removeClass('ui-state-hover'); }
	);

	// Create the progress slider control
	myControl.progress.slider({
		animate: "fast",
		max: 100,
		range: "min",
		step: 0.1,
		value : 0,
		slide: function(event, ui) {
			var sp = myPlayerData.status.seekPercent;
			if(sp > 0) {
				// Apply a fix to mp4 formats when the Flash is used.
				if(fixFlash_mp4) {
					ignore_timeupdate = true;
					clearTimeout(fixFlash_mp4_id);
					fixFlash_mp4_id = setTimeout(function() {
						ignore_timeupdate = false;
					},1000);
				}
				// Move the play-head to the value and factor in the seek percent.
				myPlayer.jPlayer("playHead", ui.value * (100 / sp));
			} else {
				// Create a timeout to reset this slider to zero.
				setTimeout(function() {
					myControl.progress.slider("value", 0);
				}, 0);
			}
		}
	});




  $("#jquery_jplayer_1").jPlayer("volume", 1.0);

  $("#jquery_jplayer_2").jPlayer("volume", 1.0);

  $("#jquery_jplayer_3").jPlayer("volume", 1.0);

  $("#jquery_jplayer_4").jPlayer("volume", 1.0);

  $("#jquery_jplayer_5").jPlayer("volume", 1.0);

  $("#jquery_jplayer_6").jPlayer("volume", 1.0);

  $("#jquery_jplayer_7").jPlayer("volume", 1.0);


  $("#fadeout_1").click(function() {
    $("#bg_1").css("background","#666");
    $("#jp_container_1 img").show();
    $("#jquery_jplayer_1").jPlayerFade().out(4000);
    setTimeout(function(){
      $("#jquery_jplayer_1").jPlayer("stop");
    }, 5000);
  });

  $("#fadeout_2").click(function() {
    $("#bg_2").css("background","#666");
    $("#jp_container_2 img").show();
    $("#jquery_jplayer_2").jPlayerFade().out(4000);
    setTimeout(function(){
      $("#jquery_jplayer_2").jPlayer("stop");
    }, 5000);
  });

  $("#fadeout_3").click(function() {
    $("#bg_3").css("background","#666");
    $("#jp_container_3 img").show();
    $("#jquery_jplayer_3").jPlayerFade().out(4000);
    setTimeout(function(){
      $("#jquery_jplayer_3").jPlayer("stop");
    }, 5000);
  });

  $("#fadeout_4").click(function() {
    $("#bg_4").css("background","#666");
    $("#jp_container_4 img").show();
    $("#jquery_jplayer_4").jPlayerFade().out(4000);
    setTimeout(function(){
      $("#jquery_jplayer_4").jPlayer("stop");
    }, 5000);
  });

  $("#fadeout_5").click(function() {
    $("#bg_5").css("background","#666");
    $("#jp_container_5 img").show();
    $("#jquery_jplayer_5").jPlayerFade().out(4000);
    setTimeout(function(){
      $("#jquery_jplayer_5").jPlayer("stop");
    }, 5000);
  });

  $("#fadeout_6").click(function() {
    $("#bg_6").css("background","#666");
    $("#jp_container_6 img").show();
    $("#jquery_jplayer_6").jPlayerFade().out(4000);
    setTimeout(function(){
      $("#jquery_jplayer_6").jPlayer("stop");
    }, 5000);
  });

  $("#fadeout_7").click(function() {
    $("#bg_7").css("background","#666");
    $("#jp_container_7 img").show();
    $("#jquery_jplayer_7").jPlayerFade().out(4000);
    setTimeout(function(){
      $("#jquery_jplayer_7").jPlayer("stop");
    }, 5000);
  });




  $("#play_1").click(function() {
    $("#bg_1").css("background","blue");
  });
  $("#play_2").click(function() {
    $("#bg_2").css("background","blue");
  });
  $("#play_3").click(function() {
    $("#bg_3").css("background","blue");
  });
  $("#play_4").click(function() {
    $("#bg_4").css("background","blue");
  });
  $("#play_5").click(function() {
    $("#bg_5").css("background","blue");
  });
  $("#play_6").click(function() {
    $("#bg_6").css("background","blue");
  });
  $("#play_7").click(function() {
    $("#bg_7").css("background","blue");
  });


});








/**
*
* @author Deux Huit Huit / Solutions Nitriques
*
* Requires: jPlayer 2.1.0+
*
* A simple plugin that extends the jPlayer object with a fadeTo/fadeIn/fadeOut method
* to control the sound.
*
* It supports a basic method and concurrents call. The latest specified target will always be applied.
*
* You can use it 2 way
* @static
* $.jPlayer.fadeTo(player, // jQuery or DOM
*			duration, // time in ms
*			from, // starting volume ratio
*			to, //	ending volume ratio
*			callback, // @optional, function
*			debug, // @optional, making the plugin verbose in the console
*			);
* @instance
* $(id).jPlayerFade(debug // @optional
*					  ).to(duration, // time in ms
*						from, // starting volume ratio
*						to, // ending volume ratio
*						callback, // @optional, function
*					   );
* N.B. the debug parameter is set in the jPlayerFade function
*
* fadeIn and fadeOut provide a better interface for dealing with fadeIn/Out
* The from and to couple are optional.
* The values used are 0 and the volume set in the constructor of the jPlayer
* i.e. $(id).jPlayerFade().out(2000); // will reduce to volume from the original volume
*									  // to 0 in 2 seconds.
**/

(function ($, undefined) {

	"use strict";

	var

	assurePlayerSound = function (player) {
		// assure we have a jQuery object
		player = $(player);

		// assure we have the 'normal' volume
		if (isNaN(player.data('org-vol'))) {
			player.data('org-vol', player.jPlayer('option','volume'));
		}

		return player;
	},

	consoleLog = function (msg, debug) {
		if (!!console && !!console.log && debug) {
			console.log(msg);
		}
	},

	setVolume = function (player, v) {
		player.jPlayer('volume', v);
		player.data('volume', v);
	},

	fadeToPlayer = function (player, dur, from, to, callback, debug) {

		player = assurePlayerSound(player);

		// fade in...?
		if (to > from && !isNaN(player.data('volume')) && player.data('volume') > from) {
			// starting ahead
			from = player.data('volume');
		}

		// fade out...?
		if (from > to && !isNaN(player.data('volume')) && player.data('volume') < from) {
			// starting much too low
			from = player.data('volume');
		}

		// bunch of vars
		var // diffenrence between the to values
			diff = to - from,
			// number of frames
			limit = dur < 1 ? -1 : dur / 100,
			// time interval between each pass
			int = limit < 1  ? 0 : dur / limit,
			// delta
			m = diff / limit,
			// current position in the progress
			x = 0,

		// actual fade step
		fade = function () {
			// are we still in the 'anim' zone
			if (x <= limit) {
				var v = from + m*x;

				player.data('is-fading', true);

				if (isNaN(v)) {
					consoleLog ('[player] #' + player.attr('id') + ' ***NaN', debug);
				} else {

					// set the new volume
					setVolume(player, v);

					player.data('fadeout', setTimeout(fade, int));

					consoleLog ('[player] #' + player.attr('id') + ' volume set to ' + v, debug);
				}

				// increment step counter
				x++;

			// reach the end
			} else {
				setVolume(player, to);

				consoleLog ('[player] #' + player.attr('id') + ' volume set to ' + to + ' -- end', debug);

				player.data('is-fading', false);

				if ($.isFunction(callback)) {
					callback.call(player);
				}
			}
		};

		// do have a diff
		if (diff !== 0 && !isNaN(diff)) {

			// clear old fadeout
			clearTimeout(player.data('fadeout'));

			fade();

		} else {
			consoleLog ('[player] #' + player.attr('id') + ' fade out skipped', debug);

			// assure we call the callback here too
			if ($.isFunction(callback)) {
				callback.call(player);
			}
		}

		return player;
	},

	// quick fade out
	fadeOutPlayer = function (player, dur, _in, _out, callback, debug) {
		player = assurePlayerSound(player);

		_in  = _in  != null && !isNaN(_in)  ? _in : parseFloat(player.data('org-vol'), 10);
		_out = _out != null && !isNaN(_out) ? _out : 0;

		return fadeToPlayer(player, dur, _in, _out, callback, debug);
	},

	// quick fade in (note, it's inverted fade out, so _in must be less than _out)
	fadeInPlayer = function (player, dur, _in, _out, callback, debug) {
		player = assurePlayerSound(player);

		_in  = _in  != null && !isNaN(_in)  ? _in : 0;
		_out = _out != null && !isNaN(_out) ? _out : parseFloat(player.data('org-vol'), 10);

		return fadeToPlayer(player, dur, _in, _out, callback, debug);
	},

	playerIsFading = function (player) {
		return !!player.data('is-fading');
	};


	// actual plugin
	if ($.isFunction($.jPlayer) && !$.isFunction($.jPlayer.fadeTo)) {
		// static function, making them public
		$.extend($.jPlayer, {
			fadeTo:     fadeToPlayer,
			fadeOut:    fadeOutPlayer,
			fadeIn:     fadeInPlayer,
			isFading:   playerIsFading
		});
		// add function to a new object JPlayerFade
		if (!$.fn.jPlayerFade) {
			$.extend($.fn, {
				jPlayerFade: function (debug) {
					// capture jQuery object
					var t = $(this);
					return {
						to: function (dur, from, to, callback) {
							return $.jPlayer.fadeTo(t, dur, from, to, callback, debug);
						},
						'in': function (dur, from, to, callback) {
							return $.jPlayer.fadeIn(t, dur, from, to, callback, debug);
						},
						out: function (dur, from, to, callback) {
							return $.jPlayer.fadeOut(t, dur, from, to, callback, debug);
						},
						isFading: function () {
							return playerIsFading(t);
						}
					};
				}
			});
		}
	} // end if


})(jQuery);
