import React from 'react'
import Navbar from './components/header/Navbar'
import Cards from './components/main/Cards'

import imageOne from './assets/image-one.jpg'

function App() {
  return (
    <>
      <Navbar />
      <Cards src={imageOne} title='Punjab' desc='Description of the card' />
    </>
  )
}

export default App
