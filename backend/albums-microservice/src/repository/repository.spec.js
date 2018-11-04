/* eslint-env mocha */
const should = require('should')
const repository = require('./repository')

describe('Repository', () => {
	it('should connect with a promise', () => {
		let repo = repository.connect({})
		repo.catch(e => { })
		should(repo).be.a.Promise()
	})
})
