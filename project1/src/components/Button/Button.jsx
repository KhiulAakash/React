import React from 'react'
import './Button.css'
export default function Button(props) {
  return (
    <div className='Button'>
      <button>{props.icon} {props.name}</button>
    </div>
  )
}
