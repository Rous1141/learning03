import React from 'react'

function GetAll() {
    fetch('https://64abc0e79edb4181202e7649.mockapi.io/gensokyoPeps')
    .then(response => response.json())
    .then(data)
  return (
    <div>GetAll</div>
  )
}

export default GetAll