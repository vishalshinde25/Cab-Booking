import React from 'react'

const AvailableCab = () => {
  return (
    <div className='flex items-center border rounded-md py-2 px-5 cursor-pointer -z-10'>
        <div>
            <img className='w-7' src="https://olawebcdn.com/images/v1/cabs/sl/ic_suv.png" alt="" />
            <p className='font-semibold text-xs'>1 min</p>
        </div>
        <div className='pl-5 text-sm'>
            <p className='font-semibold text-xs'>Prime SUV</p>
            <p className='text-xs -z-10'> SUVs with free wifi and top drivers</p>
        </div>
    </div>
  )
}

export default AvailableCab