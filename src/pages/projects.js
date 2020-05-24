import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import UnderConstruction from "../components/underConstruction"

const Projects = () => (
  <Layout>
    <SEO
      title="Projects"
      description="Full Stack developer, developing apps and web pages"
      keywords="GitHub, Java, Javascript, React, Vuejs, Angular, Node, Full Stack, developer, API, Gabriel Jony"
    />
    <h1>Projects</h1>
    <h2>
      Some of my featured projects, see more on my{` `}
      <a href="https://github.com/gabrieljony?tab=repositories">GitHub</a>.
    </h2>
    <section>
      <ul>
        <li></li>
      </ul>
    </section>
    <UnderConstruction></UnderConstruction>
  </Layout>
)

export default Projects
