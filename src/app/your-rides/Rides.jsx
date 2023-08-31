'use client'
import React from 'react'
import RideCard from '../components/user/RideCard/RideCard'
import WestIcon from '@mui/icons-material/West';
import { useRouter } from 'next/navigation';

const Rides = () => {
    const router = useRouter();
    console.log(router)
    const goBack = () => {
        router.back()
    }
  return (
    <div className='h-screen'>
        <div className='flex items-center px-2 lg:px-5 py-2'>
        <WestIcon onClick={goBack} className='cursor-pointer' />
            <p className='text-center w-full'>Your Rides</p>
        </div>
        <div className='border space-y-5 px-2 lg:px-5 h-[90vh] overflow-y-scroll'>
            {[1,1,1,1].map(()=><RideCard/>)}
        </div>
    </div>
  )
}

export default Rides