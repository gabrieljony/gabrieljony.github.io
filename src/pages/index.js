import React from "react"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <div className="photo">
      <Image />
    </div>
    <h1>Web Developer</h1>
    <h2>Hello, I am Gabriel Jony!</h2>
    <section>
      <p>
        I'm a Web Developer, I work with Full-Stack creating apps and web pages.
        I participate in events about technology and I like to study
        productivity and communication, it helps me stay organized and
        collaborative.
      </p>
      <p>I develop projects mostly with JavaScript using React and Node.</p>
    </section>
  </Layout>
)

export default IndexPage
