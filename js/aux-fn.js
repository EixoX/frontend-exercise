var RandomGenerator = function () {
	var alphabet = 'abcdefghijklmnopqrstuvwxyz';

	this.getWord = function (size, firstCapitalLetter) {
		var str = '';
		for (var i = 0; i < size; i++) {
			var rIdx = this.getNumber(alphabet.length - 1);
			str += alphabet[rIdx];
		}
		if (firstCapitalLetter) str = str[0].toUpperCase() + str.substring(1);
		
		return str;
	};

	this.getParagraph = function (words) {
		var p = '';
		for (var i = 0; i < words; i++) {
			var wordSize = this.getNumber(10);
			p += this.getWord(wordSize) + ' ';
		}
		return p;
	};

	this.getNumber = function (max) {
		return Math.floor((Math.random() * max) + 1);
	}
};

var carregarMais = function (n, fn) {
	var ofertas = [];
	var gen = new RandomGenerator();

	for (var i = 0; i < n; i++) {
		ofertas.push({
			nome: gen.getWord(8, true),
			discount: gen.getNumber(60),
			description: gen.getParagraph(10),
			location: 'Local: ' + gen.getWord(5, true)
		});
	}

	if (fn) fn(ofertas);
};

var enquete = {
	votos: {
		'gostei': 150,
		'não gostei': 50
	},

	porcentagem: function () {
		var gostei = enquete.votos['gostei'], 
			naoGostei = enquete.votos['não gostei'],
			total = gostei + naoGostei;
		return {
			'Gostei': parseFloat((gostei / total).toFixed(2)),
			'Não Gostei': parseFloat((naoGostei / total).toFixed(2))
		};
	},

	responder: function (resposta) {
		var answ = resposta.toLowerCase();
		if (answ !== 'gostei' && answ !== 'não gostei')
			throw "Não é uma resposta válida"

		enquete.votos[answ]++;
		
		return enquete.porcentagem();
	}
};

