module.exports = {
	hello: function(name) {
		let person = name || 'Jonh Doe'
		console.log('Hello, ' + person)
	},
	bye: function(name) {
		let person = name || 'Jonh Doe'
		console.log('Goodbye, ' + person)
	}
}
