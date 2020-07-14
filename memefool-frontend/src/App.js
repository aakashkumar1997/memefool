import React from 'react';
import './App.css';
import MemeContainer from "./components/MemeContainer"
import { ApiProvider } from './ApiContext'
import { UserProvider } from './UserContext'

const API_ENDPOINT = 'https://memefool-backend.foolmarshal.vercel.app' //'http://192.168.0.104:5000'

function App () {
  const [loggedin, setLoggedin] = React.useState(localStorage.getItem('jwt') !== null)
  const [username, setUsername] = React.useState(localStorage.getItem('jwt') !== null ? JSON.parse(localStorage.getItem('user')).uname : '')
  return (
  	<ApiProvider value = {API_ENDPOINT} >
    	<UserProvider value = {{loggedin: loggedin, setLoggedin: setLoggedin, username: username,setUsername: setUsername}}>
    		<MemeContainer loggedin = {loggedin} setLoggedin = {setLoggedin} username = {username} setUsername = {setUsername}/>
    	</UserProvider>
    </ApiProvider>
  )
}

export default App;
