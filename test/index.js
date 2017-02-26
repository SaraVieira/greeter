/* global it describe */
const assert = require('chai').assert
const greeter = require('../src/greeter')

describe('Greeter Tests', function() {
	it('Default Name in Hello', function(done) {
		let hello = greeter.hello()
		assert.equal(hello, 'Hello, Jonh Doe')
		done()
	})

	it('Default Name in Goodbye', function(done) {
		let goodbye = greeter.goodbye()
		assert.equal(goodbye, 'Goodbye, Jonh Doe')
		done()
	})

	it('Name in Hello', function(done) {
		let hello = greeter.hello('Sara')
		assert.equal(hello, 'Hello, Sara')
		done()
	})

	it('Name in Goodbye', function(done) {
		let goodbye = greeter.goodbye('Mike')
		assert.equal(goodbye, 'Goodbye, Mike')
		done()
	})
})
