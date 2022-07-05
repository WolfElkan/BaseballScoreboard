function type(obj) {
	return obj.__proto__.constructor
}

// const index = {
// 	'BLU':'appalacian_circle/east/BLU.png',
// 	'BUR':'appalacian_circle/east/BUR.png',
// 	'DAN':'appalacian_circle/east/DAN.png',
// 	'PRN':'appalacian_circle/east/PRN.png',
// 	'PUL':'appalacian_circle/east/PUL.png',
// 	'BRS':'appalacian_circle/west/BRS.png',
// 	'ELZ':'appalacian_circle/west/ELZ.png',
// 	'GRN':'appalacian_circle/west/GRN.png',
// 	'JCY':'appalacian_circle/west/JCY.png',
// 	'KNG':'appalacian_circle/west/KNG.png',
// }

function logo(element, team) {
	if (element[0].tagName == 'TD') {
		element.html(team)
	} else {
		var filepath = `logos/${GET.league}/${team}.png`
		element.attr('src',filepath)
	}
}

// $(document).ready(function() {
// 	logo($('.away.teamname'))
// })