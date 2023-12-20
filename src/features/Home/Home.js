import React from 'react'
import Name from './components/Name'
import Info from './components/Info'
import Bio from './components/Bio'
import Favorite from './components/Favorite'
import OnTheWeb from './components/OnTheWeb'

const Home = () => {
  return (
    <div className="mx-96 mt-4 max-2xl:mx-80 max-xl:mx-60 max-lg:mx-24 max-md:mx-16 max-sm:mx-10 text-black dark:text-dark">
      <head>
        <title>React Portfolio</title>
      </head>
      <Name />
      
      <Info />

      <Bio />

      <Favorite />
      
      <OnTheWeb />
    </div>
  )
}

export default Home