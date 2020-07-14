import React from "react"
import MemeComponentLR from "./MemeComponentLR"
import MemeComponentRL from "./MemeComponentRL"
import ApiContext from '../ApiContext'

function PlayGround () {
  const api_endpoint = React.useContext(ApiContext)
  const [memeArr, setMemeArr] = React.useState([{
    imgUrl: "loading-blur.png",
    createrName: "",
    hits: "",
    viewed: "",
    rating: 0
  },
  {
    imgUrl: "loading-blur.png",
    createrName: "",
    hits: "",
    viewed: "",
    rating: 0
  }]);
  const [loading, setLoading] = React.useState(true);

  function fetchMemes () {
    fetch(api_endpoint, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      }
    }).then(response => response.json())
      .then(data => {
        setMemeArr(data.memes)
      })
    setLoading(false)
  }

  React.useEffect(() => {
    fetchMemes()
  }, [])

  function handleDoubleClick (event) {
    setLoading(true)
    setMemeArr(prevMemeArr => {
      const newMemeArr = prevMemeArr.map(item => {
        item.url = "https://i.pinimg.com/originals/97/e9/42/97e942ce7fc4e9d4ea6d844a382f251f.gif"
        return item
      })
      return newMemeArr
    })
    event.preventDefault()
    event.persist()
    const {name} = event.target
    const chosenIndex = (name === 'lr' ? 0 : 1);
    var isPopular = true
    for (var meme of memeArr) {
      isPopular = isPopular && (memeArr[chosenIndex].rating >= meme.rating)
    }
    const updatedUser = JSON.parse(localStorage.getItem('user'))
    if(isPopular) {
      updatedUser['points'] += 1
      localStorage.setItem('user',
        JSON.stringify(updatedUser)
      )
    }else {
      updatedUser['points'] -= 1
      localStorage.setItem('user',
        JSON.stringify(updatedUser)
      )
    }
    fetchMemes()
  }

  return (
      <section class="playground text-gray-700 body-font">
        <div class="w-12 h-12 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-5" style = {{margin: "0 auto 10px auto", width: "100%"}}>
          {JSON.parse(localStorage.getItem('user'))['points']}
        </div>
        <MemeComponentLR memeContent = {memeArr[0]} dbclick = {handleDoubleClick}/>
        <hr style = {{margin: "20px 0"}}/>
        <MemeComponentRL  memeContent = {memeArr[1]} dbclick = {handleDoubleClick}/>
      </section>
  )
}

export default PlayGround