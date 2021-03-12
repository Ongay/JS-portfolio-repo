var section = document.querySelector('section');
var table = document.createElement('table');

table.id = 'block';
section.append(table);

var desk = document.querySelector('#block');
var tr, td, i;
for (i = 0; i < 8; i++) {
	tr = document.createElement('tr');
	desk.append(tr);
	for (var j = 1; j <= 8; j++) {
		td = document.createElement('td');
		if (i % 2 == 0) {
			if (j % 2 == 0) {
				td.classList.add('back-color');
			}
		}
		else {
			if ((j - 1) % 2 == 0) {
				td.classList.add('back-color');
			}
		}
		tr.append(td);
	}
}

var rows = document.querySelectorAll('tr');
var cols = document.querySelectorAll('td');
var bFigures1 = [], bPawns1 = [];
var wFigures2 = [], wPawns2 = [];

var char = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H'];
var blackFigArr = ['&#9820', '&#9822', '&#9821', '&#9819', '&#9818', '&#9821', '&#9822', '&#9820', '&#9823'];
var whiteFigArr = ['&#9814', '&#9816', '&#9815', '&#9813', '&#9812', '&#9815', '&#9816', '&#9814', '&#9817'];


for (i = 0; i < 16; i++) {
	if (i < 8) {
		bFigures1[i] = cols[i];
		bFigures1[i].innerHTML += "<span class='words-top'>" + char[i] + "</span>";
		bFigures1[i].innerHTML += "<div class='figures'>" + blackFigArr[i] + "</div>";
	}
	else {
		bPawns1[i - 8] = cols[i];
		bPawns1[i - 8].innerHTML += "<div class='pawns'>" + blackFigArr[8] + "</div>";
	}
}

for (var c = 48, i = 0; i < 16; i++, c++) {
	if (i < 8) {
		wPawns2[i] = cols[c];
		wPawns2[i].innerHTML += "<div class='pawns'>" + whiteFigArr[8] + "</div>";
	}
	else {
		wFigures2[i - 8] = cols[c];
		wFigures2[i - 8].innerHTML += "<span class='words-bottom'>" + char[i - 8] + "</span>";
		wFigures2[i - 8].innerHTML += "<div class='figures'>" + whiteFigArr[i - 8] + "</div>";
	}
}

for (var c = 0, i = 0, x = 8; i < 8; i++, c += 8, x--) {
	rows[i][0] = cols[c];
	rows[i][0].innerHTML += "<span class='num-left'>" + x + "</span>";
	rows[i][0].innerHTML += "<span class='num-right'>" + x + "</span>";
}

