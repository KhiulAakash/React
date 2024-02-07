import { useState } from 'react'
import Accordian from './components/accordian'
import RandomColor from './components/ramdomColor'
import StartRating from './components/starRating/StartRating'
import ImageSlider from './components/imageSlider/ImageSlider'
import LoadMoreData from './components/loadMoreData/LoadMoreData'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    {/* <div className="accordianBody">
    <Accordian/>
    </div>
    <RandomColor/>
    <StartRating/>
    <ImageSlider url={'https://picsum.photos/v2/list'} page={1} limit={5}/> */}
    <LoadMoreData/>
     </>
  )
}

export default App
