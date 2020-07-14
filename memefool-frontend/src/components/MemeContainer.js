import React from "react"
import Header from "./Header"
import PlayGround from "./PlayGround"
import Footer from "./Footer"
import About from './About'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom'

function MemeContainer () {
  return (
      <div className = "meme-container">
          <Header />
          <Footer />
      </div>
  )
}

export default MemeContainer
