kaboom({
	global: true,
	fullscreen: true,
	scale: 2,
	debug: true,
	clearColor: [0,0,0,1],
  });

// load sprites and assets

loadSprite('ground', 'https://i.imgur.com/XiKmSAF.png');
loadSprite('pcSprite', 'https://i.imgur.com/wYkQb1S.png');
loadSprite('pcSprite2', 'https://i.imgur.com/oRATzbh.png');
loadSprite('door', 'https://i.imgur.com/gaGEcLb.png');

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

	keyDown("space" , () => {
		if (pc.grounded()) {
			pc.jump(620);
		}

	})

	pc.action(() => {
		camPos(pc.pos)
	})

	keyDown('d' , () => {
		go("second");
	})

// config map	

	const map = [
		'                              			 ',
		'                              			 ',
		'                              			 ',
		'                              			 ',
		'                              			 ',
		'                                      $ ',
		'                                        ',
		'                                        ',
		'========================================',
	]

	const mapConfig = {
		width: 20,
		height: 20,
		'=': [sprite('ground'), solid()],
		'$': [sprite('door'), solid(), scale(2)]
	}

	const level = addLevel(map, mapConfig);
});



// new scene

scene("second", () => {
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

	keyDown("space" , () => {
		if (pc.grounded()) {
			pc.jump(620);
		}

	})

	pc.action(() => {
		camPos(pc.pos)
	})

	pc.collides('door' , () => {
		go("main");
	})

// config map	

	const map2 = [
		'                              			 ',
		'                              			 ',
		'                              			 ',
		'                              			 ',
		'                              			 ',
		'                                      $ ',
		'                                        ',
		'                                        ',
		'======  =====  ====  ===================',
	]

	const mapConfig2 = {
		width: 20,
		height: 20,
		'=': [sprite('ground'), solid()],
		'$': [sprite('door'), solid(), scale(2)]
	}

	const level = addLevel(map2, mapConfig2);
});

// start the game
start("main");