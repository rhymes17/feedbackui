
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'  

import React, { useState } from 'react'
import FeedbackForm from './components/FeedbackForm'
import FeedbackList from './components/FeedBackList'
import FeedBackStats from './components/FeedBackStats'
import Header from './components/Header'
import About from './pages/About'
import AboutLink from './components/AboutLink'

import { FeedbackProvider } from './context/FeedbackContext'

const App = () => {
  return (
    <FeedbackProvider>
          <Router>
      <Header text="Feedback UI" />
      
      
      <div className="container">
        <Routes>
        
        <Route exact path='/' element={
          <>
              <FeedbackForm />
              <FeedBackStats />
              <FeedbackList />
              
          </>
        } />

        <Route path='/about' element={<About/>}/>

        </Routes>
        <AboutLink />
      </div>
      
      </Router>
    </FeedbackProvider>
    
    
  )
}

export default App