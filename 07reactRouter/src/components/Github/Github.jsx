import React, { useState } from 'react'
import { useEffect } from 'react'
import { useLoaderData } from 'react-router-dom'

export default function Github() {
    const data=useLoaderData()
//     const [data,setData]=useState([])
//     useEffect(()=>{
//         fetch('https://api.github.com/users/khiulaakash')
//         .then(response=>response.json())
//         .then(data=>setData(data))
//     },[])
  return (
    <div className='text-center m-4 bg-gray-600 text-white p-4 text-3xl rounded-2xl'>
      Github followers: {data.followers}
      <img  className='rounded-2xl' src={data.avatar_url} alt="profile" width={300}/>
    </div>
  )
}

export const githubInfoLoader=async()=>{
    const response=await fetch('https://api.github.com/users/khiulaakash')
    return response.json()
}
