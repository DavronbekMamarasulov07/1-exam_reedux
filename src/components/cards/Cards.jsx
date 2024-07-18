import { Link } from 'react-router-dom'
import Container  from '../container/Container'
import React from 'react'

const Cards = () => {
  return (
    <Container>
        
        <div className='flex items-center justify-between -mt-[70px] mb-[100px]'>
          <Link to="category/women's-clothing" >
          <div className='flex items-center flex-col gap-4'>
            <div className='w-[300px] h-[300px] card'>
              <img  className='card__img w-full object-cover h-full' src="https://thumbs.dreamstime.com/b/gorgeous-female-brunette-model-white-clothes-portrait-posing-fashion-studio-147311462.jpg" alt="women" />
            </div>
            <h2 className=" text-center text-gray-700 text-xl font-bold  leading-[30px]">Women"s</h2>
          </div>
          </Link>
          <Link to="category/men's-clothing">
          <div className='flex items-center flex-col gap-4 '>
            <div className='w-[300px] h-[300px] card'>
              <img  className='card__img w-full object-cover h-full' src="https://i.ebayimg.com/images/g/~lQAAOSwAp5kIYBQ/s-l1200.webp" alt="men's" />
            </div>
            <h2 className=" text-center text-gray-700 text-xl font-bold  leading-[30px]">Men"s</h2>
          </div>
          </Link>
          <Link to="category/electronics">
          <div className='flex items-center flex-col gap-4 '>
            <div className='w-[300px] h-[300px] card'>
              <img  className='card__img w-full object-cover  h-full' src="https://cds.cern.ch/images/CERN-PHOTO-201809-235-1/file?size=large" alt="electronics" />
            </div>
            <h2 className=" text-center text-gray-700 text-xl font-bold  leading-[30px]">Electronics</h2>
          </div>
          </Link>
          <Link to={"category/jewelery"}>
          <div className='flex items-center flex-col gap-4 '>
            <div className='w-[300px] h-[300px] card'>
              <img  className='card__img w-full object-cover h-full ' src="https://time.com/shopping/static/cd09eba6652ee627f5e53b645dbd36fa/ca7ff/best-online-jewelry-stores.jpg" alt="jewelery" />
            </div>
            <h2 className=" text-center text-gray-700 text-xl font-bold  leading-[30px]">Jewelery</h2>
          </div>
          </Link>
        </div>
    </Container>
  )
}

export default Cards
