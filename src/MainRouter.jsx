import React from 'react'
import { Route, Routes } from 'react-router-dom'
import LandingRouter from './router/LandingRouter'

const MainRouter = () => {
  return (
    <Routes>
        <Route path='/*' element={<LandingRouter />}/>
    </Routes>
  )
}

export default MainRouter