import React from 'react'
import Navbar from './components/navbar/Navbar'
import Footer from './components/footer/Footer'
import Employee from './components/Empoyees/Employee'
import EmployeePopup from './components/EmployeePopup/EmployeePopup'
import DeletePopup from './components/deletePopup/DeletePopup'

const App = () => {
  return (
  <div className='min-h-screen w-full flex flex-col'>

  <EmployeePopup/>
  <DeletePopup/>

  <Navbar/>

  <div className='flex-1 py-10'>
    <Employee/>
  </div>

  <Footer/>
  
  </div>
  )
}

export default App