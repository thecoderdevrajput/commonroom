
import NavBar from './Components/NavBar'
import Landing from './Components/Landing'
import Customers from './Components/Customers'
import Experiencecard from './Components/Experiencecard'
import HeadlineCarousel from './Components/Headlinecorausel'
import AnotherHeadlineCarousel from './Components/Anotherheadingcarousel'
import Testimonial from './Components/Testimonials'
import Footer from './Components/Footer'
import ContinousMarquee from './Components/ContinousMarquee'


const App = () => {
  return (
    <>
    <NavBar/>
    <Landing/>
    <Customers/>
    <Experiencecard/>
    <HeadlineCarousel/>
    <ContinousMarquee/>
    <AnotherHeadlineCarousel/>
    <Testimonial/>
    <Footer/>
    </>
  )
}

export default App