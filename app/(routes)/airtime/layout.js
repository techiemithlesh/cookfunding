import React from 'react'
import Navbar from './Navbar'

export default function layout({children}) {
  return (
    <div className='flex flex-col'>
        <Navbar />
        {children}</div>
  )
}
