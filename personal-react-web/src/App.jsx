import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from "./assets/Components/Header"
import Project from "./assets/Components/Proj"

function App() {

  const projects = [
    {
      title: "UCI Scheduler",
      link: "https://hwijungk.shinyapps.io/UCI_Scheduler/",
      description: "A tool to schedule cources at UCI",
      imgSource: "src/assets/Imgs/UCIScheduler.png"
    },
    {
      title: "Evac",
      link: "https://gnlwnd1.itch.io/evac",
      description: "made for summer UNI Jam 2025 made for summer UNI Jam 2025",
      imgSource: "src/assets/Imgs/EVAC-picture.png"
    },
    {
      title: "Rune Trek",
      link: "https://gnlwnd1.itch.io/rune-trek",
      description: "made for Mini Jam 162",
      imgSource: "src/assets/Imgs/Rune-Trek-picture.png"
    },
    {
      title: "Airbaloon",
      link: "https://gnlwnd1.itch.io/airballoon",
      description: "made for ScoreSpace Jam 30",
      imgSource: "src/assets/Imgs/Airballoon-picture.png"
    },
    

  ]

  const projectComponents = projects.map((project) => {
    return (
      <div>
        <Project title={project.title} link={project.link} description={project.description} imgSource={project.imgSource}></Project>
      </div>
    )
  })

  return (
    <div className="app">
      <Header/>
      <h2>Projects</h2>
      <div className="project-container">
        {projectComponents}
      </div>
    </div>
  )
}

export default App
