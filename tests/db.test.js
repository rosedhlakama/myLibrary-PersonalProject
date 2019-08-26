const knex = require('knex')
const config = require('../knexfile').test
const testDb = knex(config)

const db = require('../db')

beforeAll(() => testDb.migrate.latest())
beforeEach(() => testDb.seed.run())

test('getUsers gets all users', () => {
  // One for each letter of the alphabet!
  const expected = 3
  return db.getUsers(testDb)
    .then(users => {
      const actual = users.length
      expect(actual).toBe(expected)
    })
    .catch(err => expect(err).toBeNull())
})

describe('getUser', () => {
  test('gets a single user', () => {
    const expected = 'test user 1'
    return db.getUser(99901, testDb)
      .then(user => {
        const actual = user.name
        expect(actual).toBe(expected)
      })
      .catch(err => expect(err).toBeNull())
  })
  test("returns undefined if user doesn't exist", () => {
    return db.getUser('bananas', testDb)
      .then(user => {
        expect(user).toBe(undefined)
      })
  })
})

test('addUser creates a single user', () => {
  //arrange
  const user = {name: 'new user', email: 'newUser@email.com'}
  const expectedUserCount = 4

  //act
  return db.addUser(user, testDb)
    .then(() => {
      //assert
      return testDb('users').then(users => {
        expect(users.length).toBe(expectedUserCount)
      })
    })
})

describe('allUsersWhoLike', () => {
  test('returns users with this favourite', () => {
    let expectedUserCount = 2
    return db.getUsersWhoLike('chocolate', testDb)
      .then(users => {
        expect(users.length).toBe(expectedUserCount)
      })
  })
})
