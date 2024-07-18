import { BiBasket } from "react-icons/bi"; 
import React from 'react'
import starsFunc from '../../components/stars_func/StarsFunc'

const SingleCardPage = ({ data }) => {
  return (
    <div className='flex gap-8 justify-around '>
      <div className='w-[550px] h-[580px] pt-12 px-8 pb-8 mix-blend-multiply bg-[#fff] card rounded-3xl'>
        <img className='w-full h-full object-contain' src={data.image} alt="image" />
      </div>
      <div className='flex flex-col gap-3 mt-[50px]'>
        <div className="w-[550px] text-gray-700 text-3xl font-bold  leading-[27px]">Shirt with insertion lace trims</div>
        <div className="w-[735px] h-[0px] border border-gray-200 "></div>

        <div className='flex flex-col gap-3 max-w-[800px]'>
          <div className=" text-zinc-800 text-xl font-bold  leading-[30px] ">Details</div>
          <div className=" text-gray-700 text-base font-normal  leading-relaxed">Id habitant tempor aliquam vulputate enim velit tincidunt sed. Urna sed facilisis nulla feugiat amet venenatis. Id suspendisse ut quis tellus aliquam pellentesque neque, semper donec.</div>
          <div className="w-[525px] h-[232px] flex-col justify-start items-start gap-1 inline-flex">
            <div className="justify-start items-center gap-4 inline-flex">
              <div className="w-1 h-1 bg-cyan-800 rounded-full" />
              <div className="text-gray-700 text-base font-normal  leading-relaxed">Brand: Jordan</div>
            </div>
            <div className="justify-start items-center gap-4 inline-flex">
              <div className="w-1 h-1 bg-cyan-800 rounded-full" />
              <div className="text-gray-700 text-base font-normal  leading-relaxed">Color: gray / red / yellow</div>
            </div>
            <div className="justify-start items-center gap-4 inline-flex">
              <div className="w-1 h-1 bg-cyan-800 rounded-full" />
              <div className="text-gray-700 text-base font-normal  leading-relaxed">Mid-cut design</div>
            </div>
            <div className="justify-start items-center gap-4 inline-flex">
              <div className="w-1 h-1 bg-cyan-800 rounded-full" />
              <div className="text-gray-700 text-base font-normal  leading-relaxed">Lace-up fastening </div>
            </div>
            <div className="justify-start items-center gap-4 inline-flex">
              <div className="w-1 h-1 bg-cyan-800 rounded-full" />
              <div className="text-gray-700 text-base font-normal  leading-relaxed">Rubber outsole pods for durability and traction</div>
            </div>
            <div className="justify-start items-center gap-4 inline-flex">
              <div className="w-1 h-1 bg-cyan-800 rounded-full" />
              <div className="text-gray-700 text-base font-normal  leading-relaxed">Moulded grooves in forefoot offer added flexibility</div>
            </div>
            <div className=" relative ">
              <div className="w-1 h-1 left-0 top-[11px] absolute bg-cyan-800 rounded-full" />
              <div className="w-[505px] left-[20px] top-0 absolute text-gray-700 text-base font-normal  leading-relaxed">Padded cuff with inner nodes designed to offer comfort and support around the Achilles tendon</div>
            </div>
            <div className="w-[735px] h-[0px] border border-gray-200 my-[60px]"></div>
          </div>
          <div className='flex justify-between mt-[10px]'>
            <span className="text-zinc-800 text-2xl font-bold  ">${data.price}</span>
            {/* <span className='text-zinc-800 text-2xl font-bold  '>{starsFunc(data?.rating?.rate)}</span> */}
          </div>
          <div className='flex gap-3 justify-between items-center'>
            <div className="w-[152px] h-6 justify-start items-center gap-2 inline-flex">
              <div className="w-6 h-6 rounded border border-gray-300 justify-center items-center flex">
                <div className="w-6 h-6 text-center text-gray-700 text-xs font-normal   leading-[18px]">XS</div>
              </div>
              <div className="w-6 h-6 rounded border border-cyan-800 justify-center items-center flex">
                <div className="w-6 h-6 text-center text-gray-700 text-xs font-normal   leading-[18px]">S</div>
              </div>
              <div className="w-6 h-6 rounded border border-gray-300 justify-center items-center flex">
                <div className="w-6 h-6 text-center text-gray-700 text-xs font-normal   leading-[18px]">M</div>
              </div>
              <div className="w-6 h-6 rounded border border-gray-300 justify-center items-center flex">
                <div className="w-6 h-6 text-center text-gray-700 text-xs font-normal   leading-[18px]">L</div>
              </div>
              <div className="w-6 h-6 rounded border border-gray-300 justify-center items-center flex">
                <div className="w-6 h-6 text-center text-gray-700 text-xs font-normal   leading-[18px]">XL</div>
              </div>
            </div>
            <div className="w-[258px] h-11 px-8 bg-cyan-800 rounded flex-col justify-start items-center gap-2.5 inline-flex">
              <div className="justify-start items-center gap-2 inline-flex">
                <div className="w-4 h-4 pr-px pt-[0.67px] pb-[1.67px] justify-center items-center flex" > <BiBasket  className="fill-white "/></div>
                <div className="text-center text-white text-sm font-bold   leading-[44px] tracking-wide">Add to cart</div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}

export default SingleCardPage
