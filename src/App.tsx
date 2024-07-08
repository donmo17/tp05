
import './App.css'
import About from './components/About'
import Contact from './components/Contact'
import Home from './components/Home'
import Nav from './components/Nav'
import Portfolio from './components/Portfolio'
import Resume from './components/Resume'
import Services from './components/Services'
import Fact from './components/fact'
import { Footer } from './components/footer'


function App() {

  return (
    <>
    <Nav/>
    <Home/>
 
    <main id="main">
    <About/>
    <Fact/>

  
    <Resume/>
    <Portfolio/>
    <Services/>
    <Contact/>
    </main>
    <Footer/>

  
    


    
  

    
    </>
  )
}

export default App
