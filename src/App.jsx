import { useState } from 'react'

import './App.css'
import NavBar from './Components/NavBar/NavBar'
import Banner from './Components/Banner/Banner'
import useMovieController from './Controllers/MoviesListController'

function App() {
  const [count, setCount] = useState(0)
  var{savedList,setSavedList,movieList}=useMovieController();

  return (
    <>
    <NavBar/>
    <Banner/> 
    {
      movieList.map((list, index) => {
                        return (
                            <div key={index} className='poster' onClick={(e)=>{

                                setSavedList([...savedList,list.id])
                                console.log(savedList)
                               
                            }}> 
                                {list.id}
                            </div>
                        )

                    })
                  }
    </>
  )
}

export default App
