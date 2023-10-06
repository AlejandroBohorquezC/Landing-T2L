import { Route, Routes } from 'react-router-dom'
import Home from '../pages/Home'
import RoutePage from '../pages/RoutePage'

const LandingRouter = () => {
  return (
    <>
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/:id' element={<RoutePage />} />
        </Routes>
    </>
  )
}

export default LandingRouter