import React from 'react'

function About () {
	return (
		<section class="text-gray-700 body-font">
		  <div style = {{width: "100%", margin: "10px auto -60px auto", fontSize: "40px", textAlign: "center"}}>About</div>
		  <div class="container px-5 py-24 mx-auto flex flex-wrap">
		    <div class="lg:w-1/2 w-full mb-10 lg:mb-0 rounded-lg overflow-hidden">
		      <img alt="feature" class="object-cover object-center h-full w-full" src="https://i.gifer.com/9wg7.gif" />
		    </div>
		    <div class="flex flex-col flex-wrap lg:py-6 -mb-10 lg:w-1/2 lg:pl-12 lg:text-left text-center">
		      <div class="flex flex-col mb-10 lg:items-start items-center">
		        <div class="w-12 h-12 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-5">
		          	
		        </div>
		        <div class="flex-grow">
		          <h2 class="text-gray-900 text-lg title-font font-medium mb-3">Scroll through memes</h2>
		          <p class="leading-relaxed text-base">Scroll through funny memes. Some dank, some hummourous.....</p>
		          
		        </div>
		      </div>
		      <div class="flex flex-col mb-10 lg:items-start items-center">
		        <div class="w-12 h-12 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-5">
		          
		        </div>
		        <div class="flex-grow">
		          <h2 class="text-gray-900 text-lg title-font font-medium mb-3">Earn points by selecting popular memes</h2>
		          <p class="leading-relaxed text-base">Compare between 2 memes and double tap on your favourite one.... Who knows you have a good taste of memes that help you earn points....</p>
		          
		        </div>
		      </div>
		      <div class="flex flex-col mb-10 lg:items-start items-center">
		        <div class="w-12 h-12 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-5">
		          
		        </div>
		        <div class="flex-grow">
		          <h2 class="text-gray-900 text-lg title-font font-medium mb-3">Create your own memes</h2>
		          <p class="leading-relaxed text-base">Make your own memes, compete with others and show off your peeps....</p>
		          
		        </div>
		      </div>
		    </div>
		  </div>
		</section>
	)
}

export default About