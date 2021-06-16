kaboom({
	global: true,
	fullscreen: true,
	scale: 1,
	debug: true,
	clearColor: [0,0,0,1],
  });

// load sprites and assets

loadSprite('ground', 'https://i.imgur.com/XiKmSAF.png');

// define a scene
scene("main", () => {
	layers(['bg', 'obj', 'ui'], 'onj')

	const map = [
		'                              ',
		'                              ',
		'                              ',
		'                              ',
		'                              ',
		'==============================',
	]

	const mapConfig = {
		width: 20,
		height: 20,
		'=': [sprite('ground', solid())]
	}

	const level = addLevel(map, mapConfig);
});

// start the game
start("main");