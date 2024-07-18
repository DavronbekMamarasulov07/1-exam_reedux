import { Link } from 'react-router-dom'
import './Hero.css'
import  Container  from '../container/Container'


const Hero = () => {
  return (
    <div className=' hero'>
      <Container>
        <div className='flex flex-col gap-3 '>
          <div className="text-zinc-900 text-lg font-bold  uppercase leading-[27px] tracking-wide">New collection</div>
          <div className="text-zinc-900 text-7xl font-black  leading-[93.60px] tracking-wide">Menswear 2020</div>
          <Link to="/products" className="hero__link text-sky-500 text-base font-bold uppercase leading-[17px] tracking-wide ">Shop Now</Link>
        </div>
      </Container>
    </div>
  )
}

export default Hero
