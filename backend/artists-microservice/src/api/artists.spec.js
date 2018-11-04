/* eslint-env mocha */
const request = require('supertest')
const server = require('../server/server')
const should = require('should')

describe('Artists API', () => {
  let app = null
  let testArtists = [
    {
      '_id': 1001,
      'name': 'Katy Perry',
      'bg_photo': '1',
      'description': '',
      'albums': []
    },
    {
      '_id': 1002,
      'name': 'Ariana Grande',
      'bg_photo': '2',
      'description': '',
      'albums': []
    },
    {
      '_id': 1003,
      'name': 'Of Monsters and men',
      'bg_photo': '3',
      'description': '',
      'albums': []
    }]

  const testRepo = {
    getAllArtists () {
      return Promise.resolve(testArtists)
    },
    getArtistsPremieras () {
      return Promise.resolve(testArtists)
    },
    getArtistById (id) {
      return Promise.resolve(testArtists.find(artist => artist._id == id))
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

  it('can return all artists', (done) => {
    request(app)
      .get('/artists')
      .expect((res) => {
        should(res.body).containEql({
          '_id': 1003,
          'name': 'Of Monsters and men',
          'bg_photo': '3',
          'description': '',
          'albums': []
        })
      })
      .expect(200, done)
  })

  it('can get newest artists', (done) => {
    request(app)
      .get('/artists/premieras')
      .expect((res) => {
        should(res.body).containEql({
          '_id': 1003,
          'name': 'Of Monsters and men',
          'bg_photo': '3',
          'description': '',
          'albums': []
        })
      })
      .expect(200, done)
  })

  it('can find artist by id', (done) => {
    request(app)
      .get('/artists/1003')
      .expect((res) => {
        should(res.body).containEql({
          '_id': 1003,
          'name': 'Of Monsters and men',
          'bg_photo': '3',
          'description': '',
          'albums': []
        })
      })
      .expect(200, done)
  })
})
