/* eslint-env mocha */
const request = require('supertest')
const server = require('../server/server')
const should = require('should')

describe('Albums API', () => {
	let app = null
	let testAlbums = [
		{
			'_id': '1',
			'name': 'One of the Boys',
			'artist': {
				'name': 'Katy Perry',
				'id': '1001'
			},
			'cover_id': '2001',
			'songs': [
				{
					'stream_url': '2008_-_One_Of_The_Boys/01._One_Of_The_Boys.mp3',
					'duration': '00:04:07.69',
					'name': 'One Of The Boys'
				},
				{
					'stream_url': '2008_-_One_Of_The_Boys/02._I_Kissed_A_Girl.mp3',
					'duration': '00:03:00.17',
					'name': 'I Kissed A Girl'
				},
				{
					'stream_url': '2008_-_One_Of_The_Boys/03._Waking_Up_In_Vegas.mp3',
					'duration': '00:03:19.24',
					'name': 'Waking Up In Vegas'
				}
			]
		},
		{
			'_id': '2',
			'name': 'Teenage Dream',
			'artist': {
				'name': 'Katy Perry',
				'id': '1001'
			},
			'cover_id': '2002',
			'songs': [
				{
					'stream_url': '2010_-_Teenage_Dream/01._Teenage_Dream.mp3',
					'duration': '00:03:47.81',
					'name': 'Teenage Dream'
				},
				{
					'stream_url': '2010_-_Teenage_Dream/02._Last_Friday_Night_(T.G.I.F.).mp3',
					'duration': '00:03:50.77',
					'name': 'Last Friday Night (T.G.I.F.)'
				},
				{
					'stream_url': '2010_-_Teenage_Dream/03._California_Gurls.mp3',
					'duration': '00:03:55.70',
					'name': 'California Gurls'
				}
			]
		},
		{
			'_id': '3',
			'name': 'Dangerous Women',
			'artist': {
				'name': 'Ariana Grande',
				'id': '1002'
			},
			'cover_id': '2003',
			'songs': [
				{
					'stream_url': 'Ariana_Grande_-_Dangerous_Woman/01_Moonlight.mp3',
					'duration': '00:03:30.55',
					'name': 'Moonlight'
				},
				{
					'stream_url': 'Ariana_Grande_-_Dangerous_Woman/02_Dangerous_Woman.mp3',
					'duration': '00:03:56.70',
					'name': 'Dangerous Woman'
				},
				{
					'stream_url': 'Ariana_Grande_-_Dangerous_Woman/03_Be_Alright.mp3',
					'duration': '00:02:57.35',
					'name': 'Be Alright'
				}
			]
		}]

	const testRepo = {
		getAllAlbums () {
			return Promise.resolve(testAlbums)
		},
		getAlbumPremieras () {
			return Promise.resolve(testAlbums)
		},
		getAlbumById (id) {
			return Promise.resolve(testAlbums.find(album => album._id === id))
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

	it('can return all albums', (done) => {
		request(app)
			.get('/albums')
			.expect((res) => {
				should(res.body).containEql({
					'_id': '3',
					'name': 'Dangerous Women',
					'artist': {
						'name': 'Ariana Grande',
						'id': '1002'
					},
					'cover_id': '2003',
					'songs': [
						{
							'stream_url': 'Ariana_Grande_-_Dangerous_Woman/01_Moonlight.mp3',
							'duration': '00:03:30.55',
							'name': 'Moonlight'
						},
						{
							'stream_url': 'Ariana_Grande_-_Dangerous_Woman/02_Dangerous_Woman.mp3',
							'duration': '00:03:56.70',
							'name': 'Dangerous Woman'
						},
						{
							'stream_url': 'Ariana_Grande_-_Dangerous_Woman/03_Be_Alright.mp3',
							'duration': '00:02:57.35',
							'name': 'Be Alright'
						}
					]
				})
			})
			.expect(200, done)
	})

	it('can get newst albums', (done) => {
		request(app)
			.get('/albums/premieras')
			.expect((res) => {
				should(res.body).containEql({
					'_id': '3',
					'name': 'Dangerous Women',
					'artist': {
						'name': 'Ariana Grande',
						'id': '1002'
					},
					'cover_id': '2003',
					'songs': [
						{
							'stream_url': 'Ariana_Grande_-_Dangerous_Woman/01_Moonlight.mp3',
							'duration': '00:03:30.55',
							'name': 'Moonlight'
						},
						{
							'stream_url': 'Ariana_Grande_-_Dangerous_Woman/02_Dangerous_Woman.mp3',
							'duration': '00:03:56.70',
							'name': 'Dangerous Woman'
						},
						{
							'stream_url': 'Ariana_Grande_-_Dangerous_Woman/03_Be_Alright.mp3',
							'duration': '00:02:57.35',
							'name': 'Be Alright'
						}
					]
				})
			})
			.expect(200, done)
	})

	it('can find album by id', (done) => {
		request(app)
			.get('/albums/3')
			.expect((res) => {
				should(res.body).containEql({
					'_id': '3',
					'name': 'Dangerous Women',
					'artist': {
						'name': 'Ariana Grande',
						'id': '1002'
					},
					'cover_id': '2003',
					'songs': [
						{
							'stream_url': 'Ariana_Grande_-_Dangerous_Woman/01_Moonlight.mp3',
							'duration': '00:03:30.55',
							'name': 'Moonlight'
						},
						{
							'stream_url': 'Ariana_Grande_-_Dangerous_Woman/02_Dangerous_Woman.mp3',
							'duration': '00:03:56.70',
							'name': 'Dangerous Woman'
						},
						{
							'stream_url': 'Ariana_Grande_-_Dangerous_Woman/03_Be_Alright.mp3',
							'duration': '00:02:57.35',
							'name': 'Be Alright'
						}
					]
				})
			})
			.expect(200, done)
	})
})
