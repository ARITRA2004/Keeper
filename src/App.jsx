import { useState } from 'react'
import './App.css'
import Heading from './Heading'
import Card from './card'
import description from './details'

function Details(d){
  return(
    <Card 
      title = {d.title}
      content = {d.content}
    />
  )
}

function App() {

  return (
    <>
      <Heading />
      <div className='all-cards'>
        {description.map(Details)}
      </div>
      <div className='blank'></div>
    </>
  )
}

export default App
