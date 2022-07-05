var NBASES, BALLS, STRIKES, OUTS, INNINGS, FOULS
var balls, strikes, outs, runs, bases
var score, hits, errors, pitches, homein, inning

// var roster = []

// House Rules, total number that exist
NBASES = 3
BALLS = 4
STRIKES = 3
OUTS = 3
INNINGS = GET.innings ? GET.innings : 9
FOULS = Infinity // Number of fouls for a strikeout

function newGame() {
	// Current count in game
	// bases = [true,false,false,false,false]
	balls = 0
	strikes = 0
	outs = 0
	runs = 0

	score = {
		'away':[null],
		'home':[null],
	}

	hits = {
		'away':0,
		'home':0,
	}

	errors = {
		'away':0,
		'home':0,
	}

	pitches = {
		'away':0,
		'home':0,
	}

	batting_order = {
		'away':0,
		'home':0,
	}

	bases = [true]
	for (var i = 0; i < NBASES + 1; i++) {
		bases.push(null)
	}
	// bases[0] = roster.away[0]

	homein = false
	inning = 1
}

newGame()

function sum(arr) {
	var result = 0
	for (var i = 0; i < arr.length; i++) {
		result += arr[i]
	}
	return result
}

function RENDER() {

	for (var i = 1; i <= 3; i++) {
		render(bases[i], $(`#b${i}`))
		render(bases[i], $(`#bs${i}`))
	}
	$(`#bs0`).text(bases[0].jersey)

	// for (var i = 0; i < bases.length; i++) {
	// 	if (bases[i]) {
	// 		$(`#bs${i}`).text(bases[i].jersey)
	// 	} else {
	// 		$(`#bs${i}`).html('&nbsp;')
	// 	}
	// }

	var _balls = $('#balls div.circles div')
	for (var i = 0; i < 3; i++) {
		render(balls > i, _balls[i])
	}

	var _strikes = $('#strikes div.circles div')
	for (var i = 0; i < 3; i++) {
		render(strikes > i, _strikes[i])
	}

	var _outs = $('#outs div.circles div')
	for (var i = 0; i < 3; i++) {
		render(outs > i, _outs[i])
	}

	$('.pitchcount').text(pitches[homein ? 'home' : 'away'])

	$('#away .runs').text(sum(score['away']))
	$('#home .runs').text(sum(score['home']))
	
	$('#away .hits').text(hits['away'])
	$('#home .hits').text(hits['home'])
	
	$('#away .errors').text(errors['away'])
	$('#home .errors').text(errors['home'])

	$('.arrow').html(homein ? '&#9660;' : '&#9650;')
	$('.inning').text(inning)

}

function render(condition,element) {
	if (condition) {
		$(element).addClass('true')
	} else {
		$(element).removeClass('true')
	}
}

function get_inning() {
	if (homein) {
		box = $('#score #home td')
	} else {
		box = $('#score #away td')
	}
	box = box[inning]
	return $(box)
}

function pitch() {
	pitches[homein ? 'home' : 'away']++
}

function ball() {
	// console.log(new Date().toISOString(), 'ball()')
	pitch()
	balls++
	if (balls >= 4) {
		// WALK
		advance(1, true)
		next_batter()
	}
	RENDER()
}

function strike() {
	// console.log(new Date().toISOString(), 'strike()')
	pitch()
	strikes++
	if (strikes >= 3) {
		// STRIKE OUT
		out()
		next_batter()
	}
	RENDER()
}

function foul() {
	// console.log(new Date().toISOString(), 'foul()')
	if (strikes < 2) {
		strike()
	} else {
		pitch()
		RENDER()
	}
}

function out() {
	outs++
	if (outs >= 3) {
		next_inning()
	}
	three_run_rule()
	RENDER()
}

function hit_by_pitch() {
	pitch()
	advance(1, true)
	next_batter()
	RENDER()
}

function standard_hit(nBases) {
	pitch()
	// console.log(new Date().toISOString(), `standard_hit(${nBases})`)
	for (var i = 1; i <= nBases; i++) {
		advance(3)
		advance(2)
		advance(1)
		if (i == 1) advance(0)
	}
	if (homein) {
		hits['home']++
	} else {
		hits['away']++
	}
	next_batter()
	RENDER()
}

function error(isInfield) {
	// console.log(new Date().toISOString(), `error(${isInfield})`)
	if (isInfield ^ homein) {
		errors['away']++
	} else {
		errors['home']++
	}
	RENDER()
}

function advance(base, force=false) {
	// console.log(new Date().toISOString(), `advance(${base})`)
	if (force) {
		var i = 1
		while (bases[i]) {
			i++
		}
		bases[i] = true
	} else {
		if (bases[base] && !bases[base+1]) {
			bases[base] = false
			bases[base+1] = true
			if (base == 0) next_batter(0)
		}
	}
	bases[0] = true
	if (bases[4]) {
		run()
		bases[4] = false
	}
	RENDER()
}

function run() {
	runs++
	get_inning().text(runs)
	score[homein ? 'home' : 'away'][inning] = runs
	if (homein && inning >= INNINGS && sum(score['home']) > sum(score['away'])) game_over()
	three_run_rule()
	RENDER()
	return runs
}

function three_run_rule() {
	if (true) {return false}

	if (runs >= 3 && !(bases[1]||bases[2]||bases[3])) next_inning()
}

function baseout(_base) {
	base = Number(_base.innerText)
	if (bases[base]) {
		bases[base] = false
		out()
	}
}

function next_batter(inc=1) {
	// console.log('next_batter', inc)
	let team = homein ? 'home' : 'away'
	batting_order[team] += inc // find another way
	batting_order[team] %= 9
	// bases[0] = roster[team][batting_order[team]]
	$('.plate').text(bases[0])
	strikes = 0
	balls = 0
}

function new_pitcher() {
	pitches[homein ? 'home' : 'away'] = 0
	RENDER()
}

function next_inning() {
	// console.log('next_inning')
	next_batter(0)
	outs = 0
	var go = true
	var extend = false

	score[homein ? 'home' : 'away'][inning] = runs

	if (inning >= INNINGS) {
		if (homein && sum(score['home']) == sum(score['away'])) {
			extend = true
		} else if (homein || sum(score['home']) > sum(score['away'])) {
			game_over()
			go = false
		}
	}

	var _old_inning = get_inning()

	if (homein) inning++
	homein = !homein
	
	var _new_inning = get_inning()

	$(_old_inning).removeClass('current_inning')

	$(_old_inning).text(runs)
	runs = 0

	bases = [true,false,false,false]

	if (extend) {
		rows = $('table.score tr')
		rows[0].innerHTML += `<th>${inning}</th>`
		rows[1].innerHTML += '<td class="current_inning"></td>'
		rows[2].innerHTML += '<td></td>'
	}

	if (go) {
		$(_new_inning).addClass('current_inning')
	}
}

function game_over() {
	$('.circles div').removeClass('true')
	$('.circles div').css('background-color','gray')

	buttons = $('button')
	for (var i = 0; i < buttons.length; i++) {
		buttons[i].disabled = true
	}
}

function game_unover() {
	$('.circles div').css('background-color','yellow')

	buttons = $('button')
	for (var i = 0; i < buttons.length; i++) {
		buttons[i].disabled = false
	}
}

function importGame(last) {
	// console.log(last)
	var sofar = $('#keys')[0].value
	if (last === null) {
		sofar = sofar.slice(0,-1)
	} else {
		sofar += last
	}
	if (!sofar) {
		RENDER()
	}
	for (var i = 0; i < sofar.length; i++) {
		if (sofar[i] != 'v') {
			single_keypress(sofar[i])
		}
	}
}

function log(key) {
	console.log(key, new Date().toISOString())
}

function single_keypress(key, event, logging=true) {
	switch (key) {
		case 'a':
		case 'b':
			ball()
		break
		case 's':
			strike()
		break
		case 'f':
			foul()
		break
		// case 'c': // Kickball hits ceiling = batter out + error
		// 	error(true)
		case 'p': // Batter Out
			pitch()
			out()
			next_batter()
			RENDER()
		break
		case 'o':
			out()
		break
		case 'r':
			error(false)
		break
		case 'i':
			error(true)
		break
		case '1':
			standard_hit(1)
		break
		case '2':
			standard_hit(2)
		break
		case '3':
			standard_hit(3)
		break
		case '4':
			standard_hit(4)
		break
		case 'h':
			hit_by_pitch()
		break;
		case '`':
			advance(0)
		break
		case 'q':
			advance(1)
		break
		case 'w':
			advance(2)
		break
		case 'e':
			advance(3)
		break
		case '!':
			$('#b1').click()
		break
		case '@':
			$('#b2').click()
		break
		case '#':
			$('#b3').click()
		break
		case 'n':
			next_batter()
			RENDER()
		break
		case '+':
			inc_pitch()
		break
		// case '-'

		case '0':
			new_pitcher()
		break
		case 'v':
			importGame()
		break
	}
}

var before = ""

function gethist() {
	return $('#keys')[0].value
}

function ikeypress(event) {
	// before = gethist()
	newGame()
	importGame(event.key)
	log(event.key)
}

function backspace() {
	before = gethist()
	setTimeout(function() {
		after = gethist()
		if (before) {
			log({
				'before':before, 
				'after':after,
			})
		}
	}, 0);
	newGame()
	importGame(null)

}

function fullscreen() {
	document.documentElement.requestFullscreen()
	$('body').css('background-color','black')
	$('button').css('background-color','#444')
	$('input').css('background-color','#444')
	$('.base').css('background-color','#444')
	$('.controls').hide()
}

$(document).ready(function() {

	if (FOULS != Infinity) {
		for (var i = 0; i < FOULS; i++) {
			$(".foulcircles").append("<div></div>")
		}
	}

	for (var i = 2; i <= INNINGS; i++) {
		let inhead = document.createElement('th')
		$(inhead).text(i)
		$('#score').find('thead').find('tr').find('th')[i-1].after(inhead)
		
		let away = document.createElement('td')
		$('#score').find('tr#away').find('td')[i-1].after(away)
		
		let home = document.createElement('td')
		$('#score').find('tr#home').find('td')[i-1].after(home)
	}

	if ('away' in GET) {
		// logo(GET.away)
		$('.away.teamname').html(GET.away)
		// logo($('.away.teamname img'),GET.away)
	}
	if ('home' in GET) {
		// logo(GET.home)
		$('.home.teamname').html(GET.home)
		// logo($('.home.teamname img'),GET.home)
	}

	$('button#ball').click(ball)
	$('button#strike').click(strike)
	$('button#foul').click(foul)
	$('button#bout').click(function() {
		out()
		next_batter(0)
		RENDER()
	})
	$('button#out').click(out)

	$('button#single').click(function() {standard_hit(1)})
	$('button#double').click(function() {standard_hit(2)})
	$('button#triple').click(function() {standard_hit(3)})
	$('button#homerun').click(function() {standard_hit(4)})

	$('button#error_in').click(function() {error(true)})
	$('button#error_out').click(function() {error(false)})

	$('#a0').click(function() {advance(0)})
	$('#a1').click(function() {advance(1)})
	$('#a2').click(function() {advance(2)})
	$('#a3').click(function() {advance(3)})

	$('.base').click(function() {
		baseout(this)
	})

	$('#fullscreen').click(fullscreen)

	$('#keys').keypress(function(event) {
		ikeypress(event)
	})
	$('html').keydown(function(event) {
		if(event.keyCode == 8) {
			backspace()
	 	}
	});

	RENDER()

})