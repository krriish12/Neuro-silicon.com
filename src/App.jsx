import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './pages/Home'
import CoursesPage from './pages/CoursesPage'
import CourseDetail from './pages/CourseDetail'
import InternshipsPage from './pages/InternshipsPage'
import About from './pages/About'
import Contact from './pages/Contact'
import LeadModal from './components/LeadModal'
import WhatsAppButton from './components/WhatsAppButton'
import Admin from "./pages/Admin";

export default function App() {
  return (
    <div>
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/courses" element={<CoursesPage />} />
        <Route path="/course/:courseId" element={<CourseDetail />} />
        <Route path="/internships" element={<InternshipsPage />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="*" element={<Home />} />
      </Routes>

      <Footer />

      <LeadModal />
      <WhatsAppButton />
    </div>
  )
}
