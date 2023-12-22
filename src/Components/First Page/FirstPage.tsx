import React from 'react'
import './FirstPage.css'
import {useNavigate} from 'react-router-dom'

function FirstPage() {
     const nav = useNavigate();

     const navTo = () => {
        nav('/second')
     }
  return (
    <div>
      <button onClick={navTo}>Click me</button>
    </div>
  )
}

export default FirstPage
