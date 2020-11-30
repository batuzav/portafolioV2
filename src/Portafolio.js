import React from 'react'
import { Code } from './components/codea/Code'
import { Employments } from './components/employments/Employments'
import { Footer } from './components/footer/Footer'
import { Header } from './components/header/Header'
import { Projects } from './components/projects/Projects'
import { SingleSlider } from './components/slider/SingleSlider'

export const Portafolio = () => {
    return (
        <>  
            <Header />
            <SingleSlider />
            <Employments />
            <Code />
            <Projects />
            <Footer />
        </>
    )
}
