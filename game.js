const kaboom = require("kaboom");

const k = kaboom({
	global: true,
	fullscreen: true,
	scale: 2,
	debug: true,
	clearColor: [0, 0, 0, 1],
  });
k.init();

// define a scene
k.scene("main", () => {

	// add a text at position (100, 100)
	k.add([
		k.text("ohhimark", 32),
		k.pos(100, 100),
	]);

});

// start the game
k.start("main");