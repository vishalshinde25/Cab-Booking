import { Height } from '@mui/icons-material'
import React from 'react'

const CardVideoSection = () => {
  return (
    <div className='mt-32'>
        <h1 className='text-5xl font-bold my-10 text-center'>India's Most Ambition Car</h1>
        <div>
        <video autoPlay loop controls muted style={{width:'100%', height:'100%'}} src="https://s3-ap-southeast-1.amazonaws.com/ola-prod-website/ola-car-video.mp4"></video>
        </div>
    </div>
  )
}

export default CardVideoSection