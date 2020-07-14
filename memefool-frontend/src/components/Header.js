import React from "react"
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom'
import PlayGround from './PlayGround'
import About from './About'
import Contribute from './Contribute'
import Contact from './Contact'
import SignIn from './SignIn'
import UserContext from '../UserContext'
import ApiContext from '../ApiContext'

function Header () {
  const user = React.useContext(UserContext)
  const api_endpoint = React.useContext(ApiContext)
  function handleClick () {
    fetch(api_endpoint + '/update', {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        jwt: localStorage.getItem('jwt'),
        user: JSON.parse(localStorage.getItem('user'))
      })
    })
    .then(response => response.json())
    .then(data => {
      console.log(data)
    })
    .catch(err => console.log(err))
    user.setLoggedin(false)
    user.setUsername('')
    localStorage.clear()
  }
  return (
    <Router>
      <header className="header text-gray-700 body-font">
        <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
          <nav className="flex lg:w-2/5 flex-wrap items-center text-base md:ml-auto">
            <Link className="mr-5 hover:text-gray-900" to = '/'> Home </Link>
            <Link className="mr-5 hover:text-gray-900" to = '/about'> About </Link>
            <Link className="mr-5 hover:text-gray-900" to = '/contribute'> Contribute </Link>
            <Link className="hover:text-gray-900" to = '/contact'> Contact me </Link>
          </nav>
          <a className="flex order-first lg:order-none lg:w-1/5 title-font font-medium items-center text-gray-900 lg:items-center lg:justify-center mb-4 md:mb-0">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-10 h-10 text-white p-2 bg-indigo-500 rounded-full" viewBox="0 0 24 24">
              <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
            </svg>
            <span className="ml-3 text-xl">memefool</span>
          </a>
          <div className="lg:w-2/5 inline-flex lg:justify-end ml-5 lg:ml-0">
            {user.loggedin ? <button className="inline-flex items-center bg-gray-200 border-0 py-1 px-3 focus:outline-none hover:bg-gray-300 rounded text-base mt-4 md:mt-0" onClick = {handleClick}>Logout {user.username}
                          <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-4 h-4 ml-1" viewBox="0 0 24 24">
                            <path d="M5 12h14M12 5l7 7-7 7"></path>
                          </svg>
                        </button> : null}
          </div>
        </div>
      </header>
      <Switch>
        <Route path = '/contact' > <Contact /> </Route>
        <Route path = '/contribute' > <Contribute /> </Route>
        <Route path = '/about' > <About /> </Route>
        <Route path = '/' > 
          {user.loggedin === false ? <SignIn setLoggedin = {user.setLoggedin} setUsername = {user.setUsername}/> : <PlayGround />}
        </Route>
      </Switch>
    </Router>
  )
}

export default Header