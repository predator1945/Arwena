/* eslint-env mocha */
const supertest = require('supertest')

describe('Albums microservice', () => {
	const api = supertest('http://192.168.99.100:3001')
	it('returns a 200 for a /albums', () => {
		api.get('/albums')
			.expect(200)
	})
})
