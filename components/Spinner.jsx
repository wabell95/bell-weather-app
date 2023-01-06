import React from 'react'
import spinner from '../public/Bean Eater-1s-200px (1).gif'
import Image from 'next/image'


const Spinner = () => {
  return (
    <div>
        <Image className='w-[200px] m-auto block' src={spinner} alt='spinner'/>
    </div>
  )
}

export default Spinner