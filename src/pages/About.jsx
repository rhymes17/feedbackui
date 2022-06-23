import React from 'react'
import Card from '../components/shared/Card'
import { Link } from 'react-router-dom'

const About = () => {
  return (
    <Card>
        <div className="about">
            <h1>About This Project</h1>
            <p>This is a React project, made just to understand and practise the basics of React, React Router and Context API</p>
        </div>

        <Link to='/'>
            <p>Back To Home</p>
        </Link>
    </Card>
  )
}

export default About