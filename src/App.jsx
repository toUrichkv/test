import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Main from './modules/main/Main'
import Contacts from './modules/contacts/Contacts'
import Basket from './modules/basket/Basket'
import About from './modules/about/About'
import Header from './components/header/Header'
import Details from './modules/details/Details'

function App() {

  return (
      <>
        <BrowserRouter>
          <Header/>
          <Routes>
            <Route path="/test" element={<Main />}></Route>
            <Route path="/contacts" element={<Contacts />}></Route>
            <Route path="/basket" element={<Basket />}></Route>
            <Route path="/about" element={<About />}></Route>
            <Route path='/details/:id' element={<Details />}></Route>
          </Routes>
        </BrowserRouter>
      </>
  )
}

export default App
