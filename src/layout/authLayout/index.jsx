import React from 'react'
import { Main } from './style.js';
import backgroundImage from '../../assets/images/Abstract hexagon background , Technology polygonal concept.jpeg'

const AuthLayout = ({ children }) => {
  return (
    <Main>
      <img src={backgroundImage} alt="Background" />
      <div>
        {children}
      </div>
    </Main>
  )
}

export default AuthLayout
