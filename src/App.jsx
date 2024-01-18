import About from './components/About'
import Category from './components/Category'
import Header from './components/Header'
import Home from './components/Home'
import Package from './components/Packages'
import Reviews from './components/Reviews'
import Services from './components/Services'
import Shop from './components/Shop'
import './styles/styles.sass'

function App() {

  return (
    <>
        <Header/>
          <Home/>
          <Category/>
          <About/>
          <Shop/>
          <Package/>
          <Reviews/>
          <Services/>
    </>
  )
}

export default App
