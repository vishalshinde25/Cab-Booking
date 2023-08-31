'use client'
import React from 'react'
import WestIcon from '@mui/icons-material/West';
import { useRouter } from 'next/navigation';
import { Avatar, Button } from '@mui/material';
import { deepOrange } from '@mui/material/colors';
import RideCard from '../components/user/RideCard/RideCard';
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';
import ContactEmergencyIcon from '@mui/icons-material/ContactEmergency';
import WifiIcon from '@mui/icons-material/Wifi';

const Profile = () => {
    const router = useRouter();
    console.log(router)
    const goBack = () => {
        router.back()
    }
    return (
        <div className='px-2 lg:px-5'>
            <div className='px-2 lg:px-5 py-2'>
                <WestIcon onClick={goBack} className='cursor-pointer' />
            </div>
            <div className='flex flex-col items-center space-y-2'>
                <Avatar sx={{ bgcolor: deepOrange[500] }}
                >U</Avatar>
                <p>Unknown</p>
                <p>+919100000000</p>
            </div>
            <div className='border rounded-sm mt-5'>
                <RideCard />
            </div>

            <div className='border rounded-sm mt-1 flex flex-col items-center p-3'>
                <Button onClick={()=>router.push("/your-rides")} className='w-full' variant='text'>See all rides</Button>
            </div>

            <div className='border mt-5'>
                <div className='flex items-center p-3 border-b'>
                    <AccountBalanceWalletIcon className='text-green-600' />
                    <p className='ml-4'>Ola Money</p>
                </div>
            </div>
            <div className='border mt-2'>
                <div className='flex items-center p-3 border-b'>
                    <ContactEmergencyIcon className='' />
                    <p className='ml-4'>Emergency Contact</p>
                </div>
            </div>
            <div className='border mt-2s'>
                <div className='flex items-center p-3 border-b'>
                    <WifiIcon />
                    <p className='ml-4'>Ola wifi credentials</p>
                </div>
            </div>
            <div className='mt-5'>
                <Button className='w-full bg-red-500 text-white' variant='contained' color='error'>Logout</Button>
            </div>

        </div>
    )
}

export default Profile