import React, { useContext } from 'react'
import { AuthContext } from './Context/AuthContext/AuthContext'

const Anywhere = () => {
    const data=useContext(AuthContext)
    console.log("data data",data)
  return (
    <div>
      data {data}
    </div>
  )
}

export default Anywhere
