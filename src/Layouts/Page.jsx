import React from 'react'
import Navbar from"../components/Navbar/Navbar"
export default function Page({children}) {
  return (
    <div>
        <Navbar/>

        {children}
    </div>
  )
}
 