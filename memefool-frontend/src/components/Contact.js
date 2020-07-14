import React from 'react'
import ApiContext from '../ApiContext'

function Contact () {
	const api_endpoint = React.useContext(ApiContext)
	const [feedname, setFeedname] = React.useState('')
	const [email, setEmail] = React.useState('')
	const [message, setMessage] = React.useState('')
	const [responseMessage, setResponsemessage] = React.useState('')
	
	function handleChange (event) {
		setResponsemessage('')
		const {name, value} = event.target
		if(name === 'feedname') {
			setFeedname(value)
		}else if(name === 'email') {
			setEmail(value)
		}else {
			setMessage(value)
		}
	}

	function handleClick (event) {
		const data = {
			name: feedname,
			email: email,
			feedback: message,
			time: new Date()
		}
		if(localStorage.getItem('jwt') !== null) {
			data['jwt'] = localStorage.getItem('jwt')
			data['user'] = JSON.parse(localStorage.getItem('user'))	
		}
		fetch(api_endpoint + '/feedback', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify(data)
		})
		.then(response => response.json())
		.then(data => {
			setResponsemessage(data.data)
		})
		.catch(err => {
			setResponsemessage(err)
		})
	}

	return (
		<section class="text-gray-700 body-font relative">
		  <div class="container px-5 py-24 mx-auto">
		    <div class="flex flex-col text-center w-full mb-12">
		      <h1 class="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">Contact Me</h1>
		      <p class="lg:w-2/3 mx-auto leading-relaxed text-base">Lets connect to discuss some more interesting stuff.</p>
		    </div>
		    <div class="lg:w-1/2 md:w-2/3 mx-auto">
		      <div class="flex flex-wrap -m-2">
		        <div class="p-2 w-1/2">
		          <input class="w-full bg-gray-100 rounded border border-gray-400 focus:outline-none focus:border-indigo-500 text-base px-4 py-2" placeholder="Name" type="text" name = "feedname" value = {feedname} onChange = {handleChange} />
		        </div>
		        <div class="p-2 w-1/2">
		          <input class="w-full bg-gray-100 rounded border border-gray-400 focus:outline-none focus:border-indigo-500 text-base px-4 py-2" placeholder="Email" type="email" name = "email" value = {email}  onChange = {handleChange} />
		        </div>
		        <div class="p-2 w-full">
		          <textarea class="w-full bg-gray-100 rounded border border-gray-400 focus:outline-none h-48 focus:border-indigo-500 text-base px-4 py-2 resize-none block" placeholder="Message" name = "message" value = {message}  onChange = {handleChange} ></textarea>
		        </div>
		        <div class="p-2 w-full">
		          <button class="flex mx-auto text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg" onClick = {handleClick}>Lets Connect</button>
		        </div>
		        {
		        	responseMessage.length > 0 ? <div class="p-2 w-full" style = {{textAlign: "center", fontSize: "30px", marginBottom: "20px", color: "green"}}>{responseMessage}</div>: null
		        }
		        
		        <div class="p-2 w-full pt-8 mt-8 border-t border-gray-200 text-center">
		          <a class="text-indigo-500">foolmarshal@fool.com</a>
		          <p class="leading-normal my-5">Delhi
		            <br />India, IN 110031
		          </p>
		          <span class="inline-flex">
		            <a class="text-gray-500">
		              <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
		                <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
		              </svg>
		            </a>
		            <a class="ml-4 text-gray-500">
		              <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
		                <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
		              </svg>
		            </a>
		            <a class="ml-4 text-gray-500">
		              <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
		                <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
		                <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
		              </svg>
		            </a>
		            <a class="ml-4 text-gray-500">
		              <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
		                <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
		              </svg>
		            </a>
		          </span>
		        </div>
		      </div>
		    </div>
		  </div>
		</section>
	)
}

export default Contact