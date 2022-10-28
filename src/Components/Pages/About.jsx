import React from 'react'
import { AboutSlides } from '../Partials/AbouSlides'
import { Aboutman } from '../Partials/AboutBlogger'

export const About = () => {
  return (
    <section>
    <h1>Om Bloggerman</h1>
      <Aboutman />
      <AboutSlides />
    </section>
  )
}
