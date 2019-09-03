import request from 'superagent'


export function launchApp() {
  renderHello()

  
  
}

function renderHello(){

  let html= `<h1> Clinet side rendering is working</h1>`

  document.getElementById('hello').innerHTML = html
}

