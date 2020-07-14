import React from 'react'

function Contribute () {
	return (
		<section class="text-gray-700 body-font">
			<div class="container mx-auto flex px-5 py-24 items-center justify-center flex-col">
			<img class="lg:w-2/6 md:w-3/6 w-5/6 mb-10 object-cover object-center rounded" alt="hero" src="https://giffiles.alphacoders.com/210/210092.gif" style = {{width: "800px", height: "300px"}}/>
			<div class="text-center lg:w-2/3 w-full">
			  <h1 class="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">Contribute</h1>
			  <p class="mb-8 leading-relaxed">You can contribute by sending url links of memes to the mentioned email</p>
			  <div class="flex justify-center">
			    <a class="text-indigo-500">foolmarshal@fool.com</a>
			  </div>
			</div>
			</div>
		</section>
	)
}

export default Contribute