import React from 'react'
import { Name } from '../components/Name'
import { FullProject } from '../components/Full-project/FullProject'

export const Projects = () => {
  return (
    <div>
      <Name firstSymbol="/" Name="projects"/>
      <p style={{color: "grey", fontSize: "24", fontWeight: "500"}}>List of my projects</p>
      <FullProject/>
    </div>
  )
}
