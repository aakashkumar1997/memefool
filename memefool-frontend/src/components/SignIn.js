import React from 'react'
import UserContext from '../UserContext'
import ApiContext from '../ApiContext'

function SignIn (props) {
	const user = React.useContext(UserContext)
	const api_endpoint = React.useContext(ApiContext)
	const [signinname, setSigninname] = React.useState('')
	const [signupname, setSignupname] = React.useState('')
	const [showSigninMessage, setShowsigninmessage] = React.useState('')
	const [showSignupMessage, setShowsignupmessage] = React.useState('')
	function handleClick (event) {
		event.persist()
		const {name} = event.target
		event.target.disabled = true
		if(name === 'signin') {
			fetch(api_endpoint + '/signin', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json'
				},
				body: JSON.stringify({
					uname: signinname
				})
			})
			.then(response => response.json())
			.then(data => {
				if(data.success === true) {
					localStorage.clear()
					localStorage.setItem('jwt', data.jwt)
					localStorage.setItem('user', JSON.stringify(data.user))
					setShowsigninmessage('')
					user.setLoggedin(true)
					user.setUsername(data.user.uname)
				}else {
					setShowsigninmessage(data.data)
				}
				event.target.disabled = false
			})
		}else {
			fetch(api_endpoint + '/signup', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json'
				},
				body: JSON.stringify({
					uname: signupname
				})
			})
			.then(response => response.json())
			.then(data => {
				if(data.success === true) {
					localStorage.clear()
					localStorage.setItem('jwt', data.jwt)
					localStorage.setItem('user', JSON.stringify(data.user))
					setShowsignupmessage('')
					user.setLoggedin(true)
					user.setUsername(data.user.uname)
				}else {
					setShowsignupmessage(data.data)
				}
				event.target.disabled = false
			})
		}
	}

	function handleChange (event) {
		event.persist()
		const {name, value} = event.target
		if(name === 'signin') {
			setSigninname(value)
		}else {
			setSignupname(value)
		}
	}

	return (
		<section class="text-gray-700 body-font">
		  <div class="container px-5 py-24 mx-auto flex flex-wrap items-center">
		    <div class="lg:w-3/5 md:w-1/2 md:pr-16 lg:pr-0 pr-0">
		      <h1 class="title-font font-medium text-3xl text-gray-900">Already have an account</h1>
		      <p class="leading-relaxed mt-4">Sign in and start scrolling through your favourite memes and compete with friends.... </p>
		    </div>
		    <div class="lg:w-2/6 md:w-1/2 bg-gray-200 rounded-lg p-8 flex flex-col md:ml-auto w-full mt-10 md:mt-0">
		      {showSigninMessage.length > 0 ? <p style = {{textAlign: "center", backgroundColor: "#a5a4de", width: "100%", marginBottom: "10px"}}>{showSigninMessage}</p> : null}
		      <h2 class="text-gray-900 text-lg font-medium title-font mb-5">Sign In</h2>
		      <input class="bg-white rounded border border-gray-400 focus:outline-none focus:border-indigo-500 text-base px-4 py-2 mb-4" placeholder="User Name" type="text" name = "signin" onChange = {handleChange} value = {signinname} />
		      <button class="text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg" name = "signin" onClick = {handleClick}>Sign In</button>
		      <p class="text-xs text-gray-500 mt-3 text-center">SignIn and compete....</p>
		    </div>
		  </div>
		  <hr />
		  <div class="container px-5 py-24 mx-auto flex flex-wrap items-center">
		    <div class="lg:w-3/5 md:w-1/2 md:pr-16 lg:pr-0 pr-0">
		      <h1 class="title-font font-medium text-3xl text-gray-900">SignUp with just username</h1>
		      <p class="leading-relaxed mt-4">Sign up and start scrolling through your favourite memes and compete with friends.... </p>
		      <p class="leading-relaxed mt-4">Dive in to know more about competition....</p>
		    </div>
		    <div class="lg:w-2/6 md:w-1/2 bg-gray-200 rounded-lg p-8 flex flex-col md:ml-auto w-full mt-10 md:mt-0">
		      {showSignupMessage.length > 0 ? <p style = {{textAlign: "center", backgroundColor: "#a5a4de", width: "100%", marginBottom: "10px"}}>{showSignupMessage}</p> : null}
		      <h2 class="text-gray-900 text-lg font-medium title-font mb-5">Sign Up</h2>
		      <input class="bg-white rounded border border-gray-400 focus:outline-none focus:border-indigo-500 text-base px-4 py-2 mb-4" placeholder="User Name" type="text"  name = "signup" onChange = {handleChange} value = {signupname} />
		      <button class="text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg" name = "signup" onClick = {handleClick}>Sign Up</button>
		      <p class="text-xs text-gray-500 mt-3 text-center">SignUp with your favourite alias and compete....</p>
		    </div>
		  </div>
		  <hr />
		</section>
	)
}

export default SignIn