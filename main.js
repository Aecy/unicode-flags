const isoToEmoji = (code) => {
	return code
		.split('')
		.map(letter => letter.charCodeAt(0) % 32 + 0x1F1E5)
		.map(n => String.fromCodePoint(n))
		.join('')
};

console.log(isoToEmoji('fr'))
console.log(isoToEmoji('es'))