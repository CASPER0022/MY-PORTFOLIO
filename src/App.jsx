import LogoSection from './components/LogoSection.jsx'
import NavBar from './components/NavBar.jsx'
import Contacts from './sections/Contacts.jsx'
import ExperienceSection from './sections/ExperienceSection.jsx'
import FeatureCards from './sections/FeatureCards.jsx'
import Footer from './sections/Footer.jsx'
import Hero from './sections/Hero.jsx'
import ShowcaseSection from './sections/ShowcaseSection.jsx'
import TechStack from './sections/TechStack.jsx'
import Testimonials from './sections/Testimonials.jsx'

const App = () => {
  return (
    <>
       < NavBar/>
       <Hero />  
       <ShowcaseSection/>
       {/*<LogoSection/>*/}
       < FeatureCards/>
       < ExperienceSection/>
       <TechStack/>
       <Testimonials/>
       <Contacts/>
       <Footer/>
    </>
  )
}

export default App