import React from 'react'
import { AiFillStar, AiOutlineStar } from 'react-icons/ai';
import { v4 as uuidv4 } from 'uuid';


const starsFunc = (numString) => {
    const munStars = 5 - Math.floor(numString);
    const stars = Array(Math.floor(numString)).fill(
      <AiFillStar className="fill-amber-500" />
    );
    const starsE = Array(munStars).fill(
      <AiOutlineStar className="fill-amber-500" />
    );

    return (
      <div key={uuidv4()} className="starsWrapper flex items-center gap-2 mt-1">
        <div className="flex items-center gap-1 w-24">
          {stars} {starsE}
        </div>
      </div>
    );
      
}

export default starsFunc
