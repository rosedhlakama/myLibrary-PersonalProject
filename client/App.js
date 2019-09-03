import request from 'superagent'


export default function launchApp() {
  renderHello()
  loadUsers()
  
  document.getElementById('app').innerHTML = html
}

renderHello(){
  return `<h1> Clinet side rednering is working</h1>`
}
loadUsers(){
  return request.get('/')
  .then(users => {
    users = users.body
    let html = `<ul>${users.map(`<a id='user' href="/users/{{user.id}}"><li> ${user.name} - (${user.email})</li></a></ul>`
  })
}