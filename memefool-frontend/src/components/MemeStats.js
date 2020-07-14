import React from "react"
import StarsRating from 'stars-rating'

function MemeStats (props) {
  return (
    <div class="meme-stat flex flex-wrap -mx-4 mt-auto mb-auto lg:w-1/2 sm:w-2/3 content-start">
        <div class="w-full sm:p-4 px-4 mb-6" style = {{borderBottom: "1px solid #F0F0F0"}}>
          <h1 class="title-font font-medium text-xl mb-2 text-gray-900">{props.memeStat.createrName}</h1>
          <StarsRating count={5} value={props.memeStat.rating} size={24} color2={'#ffd700'} class="leading-relaxed" className = "stars-rating"/>
        </div>
        <div class="p-4 sm:w-1/2 lg:w-1/4 w-1/2">
          <h2 class="title-font font-medium text-3xl text-gray-900">{props.memeStat.hits}</h2>
          <p class="leading-relaxed">Hits</p>
        </div>
        <div class="p-4 sm:w-1/2 lg:w-1/4 w-1/2">
          <h2 class="title-font font-medium text-3xl text-gray-900">{props.memeStat.viewed}</h2>
          <p class="leading-relaxed">Viewed</p>
        </div>
    </div>
  )
}

export default MemeStats
