import React from 'react'
import Nav from '../../components/nav/Nav'
import Hero from '../../components/hero/Hero'
import Cards from '../../components/cards/Cards'
import Products from '../products/Products'

const Home = () => {
  return (
    <div >
      <Nav />
      <Hero/>
      <Cards/>
    </div>
  )
}

export default Home
