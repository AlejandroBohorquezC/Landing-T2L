import { Navigate, Route, Routes } from 'react-router-dom'
import Home from '../pages/Home'
import RoutePage from '../pages/RoutePage'

const LandingRouter = () => {
  return (
    <>
        <Routes>
            <Route path='home' element={<Home />} />
            <Route path='route/:id' element={<RoutePage />} />

            <Route path='/' element={<Navigate to='/home' />} />
        </Routes>
    </>
  )
}

export default LandingRouter