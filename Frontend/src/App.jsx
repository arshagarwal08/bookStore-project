import React from 'react'
import Home from './components/Home'
import { Navigate, Route, Routes } from 'react-router-dom'
import Books from './components/Books'
import Signup from './components/Signup'
import Contact from './components/Contact'
import { useAuth } from './context/AuthProvider'
import About from './components/About'
import SingleBook from './components/SingleBook'
import Login from './components/Login'

function App() {

  const [authUser,setAuthUser] = useAuth()

  return (
    <>
      <div className='dark:bg-slate-900 dark:text-white'>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/book' element={authUser?<Books /> : <Navigate to="/signup"/>} />
        <Route path='/book/:id' element={<SingleBook />} />
        <Route path='/login' element={<Login />} />
        <Route path='/about' element={<About />} />
        <Route path='/signup' element={<Signup />} />
        <Route path='/contact' element={<Contact />} />
      </Routes>
      </div>
    </>
  )
}

export default App