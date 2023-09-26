import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../pages/Home'

const LandingRouter = () => {
  return (
    <>
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/rutas' element={<></>} />
        </Routes>
    </>
  )
}

export default LandingRouter