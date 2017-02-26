const greeter = {
	hello: function(name) {
		let person = name || 'Jonh Doe'
		return 'Hello, ' + person
	},
	goodbye: function(name) {
		let person = name || 'Jonh Doe'
		return 'Goodbye, ' + person
	}
}

module.exports = greeter
