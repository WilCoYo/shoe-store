import React from 'react'
import './Home.css'
import Header from '../../components/header/Header'
import Marquee from '../../components/marquee/Marquee'

function Home() {
  return (
    <div>
      <Marquee />
      <Header />
    </div>
  )
}

export default Home