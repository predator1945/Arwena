/* eslint-env mocha */
const supertest = require('supertest')

describe('Artists microservice', () => {
  const api = supertest('http://192.168.99.100:3002')
  it('returns a 200 for a /artists', () => {
    api.get('/artists')
      .expect(200)
  })
})
