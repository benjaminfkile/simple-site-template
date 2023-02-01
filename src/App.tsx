import Footer from "./components/Footer"
import Header from "./components/Header"
import NavMenu from "./menu/NavMenu"
import About from "./sections/about/About"
import Contact from "./sections/contact/Contact"
import Services from "./sections/services/Services"

function App() {
  return (
    <div className="App">
      <NavMenu />
      <Header companyName="Your Company Name" />
      <About />
      <Services servicesHeader="Lorem ipsum dolor sit amet, consectetur adipisicing" />
      <Contact />
      <Footer companyName="Your Company Name" />
    </div >
  )
}

export default App
