import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import UnderConstruction from "../components/underConstruction"
import SocialLinks from "../components/SocialLinks/SocialLinks"

const About = () => (
  <Layout>
    <SEO
      title="About"
      description="Full Stack developer, developing apps and web pages"
      keywords="Java, Javascript, React, Vuejs, Angular, Node, Full Stack, developer, API, Gabriel Jony"
    />
    <h1>About</h1>
    <SocialLinks />
    <section>
      <p></p>
    </section>
    <UnderConstruction></UnderConstruction>
  </Layout>
)

export default About
