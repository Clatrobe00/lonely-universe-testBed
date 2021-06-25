kaboom({
	global: true,
	fullscreen: true,
	scale: 2,
	debug: true,
	clearColor: [0,0,0,1],
  });

// load sprites and assets

loadSprite('ground', 'https://i.imgur.com/XiKmSAF.png');
loadSprite('pcSprite', 'https://i.imgur.com/wYkQb1S.png')

// define a scene
scene("main", () => {
	layers(['bg', 'obj', 'ui'], 'onj')

// config pc sprite

	const pc = add([
		sprite("pcSprite"),
		pos(80, 80),
		body()
	])

	keyDown("right", () => {
		pc.move(100);
	});

	keyDown("left", () => {
		pc.move(-100);
	});

// config map	

	const map = [
		'                              ',
		'                              ',
		'                              ',
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
		'=': [sprite('ground'),pos(0,280), solid()]
	}

	const level = addLevel(map, mapConfig);
});

// start the game
start("main");