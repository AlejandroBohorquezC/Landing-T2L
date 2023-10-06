import NavBar from '../components/NavBar'
import Footer from '../components/Footer'

const MainLayout = ({children}) => {
  return (
    <>
        <NavBar />
        {children}
        <Footer />
    </>
  )
}

export default MainLayout