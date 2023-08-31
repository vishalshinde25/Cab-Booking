import { useRouter } from 'next/router'
import React from 'react'
import VerifiedIcon from '@mui/icons-material/Verified';
import { Avatar } from '@mui/material';

const RideCard = () => {
    // const router = useRouter();
    return (
        <div 
        // onClick={() => router.push(`/ride-detail/${ride.id}`)}
            className='flex justify-between items-center rounded-s-sm p-3 cursor-pointer'>
            <div className='flex items-center'>
                <img
                    className='w-20 h-20'
                    src="https://olawebcdn.com/images/v1/cabs/sl/ic_mini.png" alt="" />
                <div className='ml-5 space-y-1'>
                    <p className='text-sm font-semibold'>Today 10:08 PM</p>
                    <p className='text-xs font-semibold opacity-60'>Cab KSLW9983</p>
                    <p className='opacity-60 text-xs'>Mumbai</p>
                    <p className='opacity-60 text-xs'>Pune</p>
                </div>
            </div>
            {true?(
                <div>
                    <VerifiedIcon className='text-green-800 text-4xl' fontSize='3rem' />
                </div>
            ):(
                <div className='flex flex-col justify-between pl-5'>
                    <p className='text-green-500 mb-5'>Schedule...</p>
                    <Avatar alt="Remy Sharp"
                    src='https://cdn.pixabay.com/photo/2016/12/02/03/08/people-talking-1876726_1280.jpg'/>
                </div>
            )}
        </div>
    )
}

export default RideCard