import React from 'react'
import { FaArrowLeft } from 'react-icons/fa'
import { useNavigate } from 'react-router-dom'

const Home = () => {

    const navigate = useNavigate()

  return (
    <div className=' h-screen w-screen bg-richblack-900 flex justify-center items-center'>
        <button className=' px-3 py-2 rounded-md bg-yellow-50 flex gap-x-1 justify-center items-center'
        onClick={()=>navigate("/Authentication")}>
            <FaArrowLeft/>
            <p>Authentication</p>
        </button>
    </div>
  )
}

export default Home