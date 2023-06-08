import React from 'react'
import Navbar from '../components/Navbar'
import './Screens.css'
import { CardContainer } from '../components/CardContainer'
import { Footer } from '../components/Footer'
export default function Home() {
  return (
    <div>
        <Navbar />
        <CardContainer/>
        <Footer />
    </div>
  )
}
