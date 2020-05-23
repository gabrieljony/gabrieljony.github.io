import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import UnderConstruction from "../components/underConstruction"
import SocialLinks from "../components/SocialLinks/SocialLinks"

const About = () => (
  <Layout>
    <SEO title="About" />
    <h1>About</h1>
    <SocialLinks />
    <section>
      <p></p>
    </section>
    <UnderConstruction></UnderConstruction>
  </Layout>
)

export default About
