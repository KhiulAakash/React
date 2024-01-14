import React from 'react'
import { useParams } from 'react-router-dom'

export default function User() {
    const{userid}=useParams()
  return (
    <div className='bg-orange-700 flex justify-center text-white text-2xl py-4'>
      User:{userid}
    </div>
  )
}
