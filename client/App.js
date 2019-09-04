const request = require('superagent')
module.exports = launchApp

function launchApp() {
  renderHello()
  listBooks()  
}


function renderHello() {

  let html = `<h1> Client side rendering is working</h1>`

  document.getElementById('body').innerHTML = html
}


function bookListHtml() {
  return 
}

function listBooks() {
  return request
  .get('/v1/books/')
    .then(result => {
      books = result.body
      
      let html = `<ul>
    ${books.map(`<li>${book.title}, By ${book.author}</li>`).join('\n')}
    </ul>`

      document.getElementById('books-list').innerHTML = html
    })
    .catch(e => {
      console.log(`Error ${e.message}`)
    })
}