import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import UnderConstruction from "../components/underConstruction"

const Blog = () => (
  <Layout>
    <SEO
      title="Blog"
      description="Full Stack developer, developing apps and web pages"
      keywords="GitHub, Java, Javascript, React, Vuejs, Angular, Node, Full Stack, developer, API, Gabriel Jony"
    />
    <h1>Blog</h1>
    <h2>
      On{` `}
      <a href="https://gabrieljony.netlify.app/">My Blog</a> I create more
      technology topics.
    </h2>
    <section>
      <p></p>
    </section>
    <UnderConstruction></UnderConstruction>
  </Layout>
)

export default Blog
