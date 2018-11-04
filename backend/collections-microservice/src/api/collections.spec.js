/* eslint-env mocha */
const request = require('supertest')
const server = require('../server/server')
const should = require('should')

describe('Collections API', () => {
  let app = null
  let testCollections = [
    {
      '_id': 1,
      'title': 'Często odtwarzane',
      'description': 'Najczęsciej odtwarzane w tym miesiącu',
      'albums': []
    },
    {
      '_id': 2,
      'title': 'Ostatnio odtwarzane',
      'description': 'Niedawno tego słuchałeś',
      'albums': []
    },
    {
      '_id': 3,
      'title': 'Często wyszukiwane',
      'description': 'Najczęsciej wyszukiwane w tym miesiącu',
      'albums': []
    }]

  const testRepo = {
    getAllCollections () {
      return Promise.resolve(testCollections)
    },
    getCollectionsPremieras () {
      return Promise.resolve(testCollections)
    },
    getCollectionById (id) {
      return Promise.resolve(testCollections.find(coll => coll._id == id))
    }

  }

  beforeEach(() => {
    return server.start({
      port: 12080,
      repo: testRepo
    }).then(serv => {
      app = serv
    })
  })

  afterEach(() => {
    app.close()
    app = null
  })

  it('can return all collections', (done) => {
    request(app)
      .get('/collections')
      .expect((res) => {
        should(res.body).containEql({
          '_id': 3,
          'title': 'Często wyszukiwane',
          'description': 'Najczęsciej wyszukiwane w tym miesiącu',
          'albums': []
        })
      })
      .expect(200, done)
  })

  it('can get newest collections', (done) => {
    request(app)
      .get('/collections/premieras')
      .expect((res) => {
        should(res.body).containEql({
          '_id': 3,
          'title': 'Często wyszukiwane',
          'description': 'Najczęsciej wyszukiwane w tym miesiącu',
          'albums': []
        })
      })
      .expect(200, done)
  })

  it('can find collection by id', (done) => {
    request(app)
      .get('/collections/3')
      .expect((res) => {
        should(res.body).containEql({
          '_id': 3,
          'title': 'Często wyszukiwane',
          'description': 'Najczęsciej wyszukiwane w tym miesiącu',
          'albums': []
        })
      })
      .expect(200, done)
  })
})
