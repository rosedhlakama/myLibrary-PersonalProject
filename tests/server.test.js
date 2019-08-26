const request = require('supertest')
const cheerio = require('cheerio')

const knex = require('knex')
const config = require('../knexfile').test
const testDb = knex(config)

const server = require('../server')
server.connection = testDb

beforeAll(() => testDb.migrate.latest())
beforeEach(() => testDb.seed.run())

test('GET /', () => {
  return request(server)
    .get('/')
    .expect(200)
    .then((res) => {
      const $ = cheerio.load(res.text)
      const firstLiText = $('li').first().text()
      expect(firstLiText).toBe('test user 1 (test1@users.net)')
      expect($('li').length).toBe(3)
    })
    .catch(err => expect(err).toBeNull())
})
