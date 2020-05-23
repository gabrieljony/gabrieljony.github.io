import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import UnderConstruction from "../components/underConstruction"

const Blog = () => (
  <Layout>
    <SEO title="Blog" />
    <h1>Blog</h1>
    <h2>Follow me on Twitter and Medium to read more topics of tech.</h2>
    <section>
      <p><UnderConstruction></UnderConstruction></p>
    </section>
  </Layout>
)

export default Blog
