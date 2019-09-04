const request = require('superagent')
module.exports = launchApp

function launchApp() {
  renderHello()
  listBooks()
  
}


function renderHello() {

  let html = `<h1> Client side rendering is working</h1>`

  document.getElementById('hello').innerHTML = html
}


function bookListHtml() {
  return `<li>${book.title}, By ${book.author}</li>`
}

function listBooks() {
  return request
  .get('/v1/books/')
    .then(result => {
      books = result.body.
      console.log(result.body)
      let html = `<ul>
    ${books.map(bookListHtml).join('\n')}
    </ul>`

      document.getElementById('books-list').innerHTML = html
    })
    .catch(e => {
      console.log(`Error ${e.message}`)
    })
}