import React from "react"
import MemeStats from "./MemeStats"

function MemeComponentRL (props) {
  return (
    <div class="meme-component-div meme-component-div-rl container px-5 py-2 mx-auto flex flex-wrap">
      <div class="lg:w-1/2 sm:w-1/3 w-full rounded-lg overflow-hidden mt-6 sm:mt-0 sm:pr-10">
        <img class="meme-component-img object-cover object-center w-full h-full" src={props.memeContent.url} alt="meme" name = 'rl' onDoubleClick = {props.dbclick}/>
      </div>
      <div class="flex flex-wrap -mx-4 mt-auto mb-auto lg:w-1/2 sm:w-2/3 content-start"  style = {{margin: "50px auto", display: "none"}}>
        <MemeStats memeStat = {props.memeContent}/>
      </div>
    </div>
  )
}

export default MemeComponentRL
