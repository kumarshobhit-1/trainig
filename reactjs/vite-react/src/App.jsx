// import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { useState } from 'react'
import { Header } from './components/header/Header'
import { Dashboard } from './components/dashboard/Dashboard'
import { PageNotFound } from './components/pagenotfound/PageNotFound'
import { About } from './components/about/About'
import { Footer } from './components/footer/Footer'
import { Link } from 'react-router-dom'
import { Home } from './components/home/Home'
import { Contact } from './components/contact/Contact'
import { Contactlist } from './components/contactList/Contactlist'
import { EditContact } from './components/editContact/EditContact'


function App() {
  return (
    <>
      <BrowserRouter> 
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="contact" element={<Contact />} />
          <Route path="contactlist" element={<Contactlist />} />
          <Route path="contact/:id" element={<EditContact />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
        <Footer />
      </BrowserRouter>

    </>
  )
}

export default App
