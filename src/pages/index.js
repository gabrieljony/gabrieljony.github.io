import React from "react"

import Layout from "components/layout"
import Image from "components/image"
import SEO from "components/seo"
import SocialLinks from "components/SocialLinks"

const IndexPage = () => (
  <Layout>
    <SEO
      title="Home"
      description="Full Stack developer, developing apps and web pages"
      keywords="Java, Javascript, React, Vuejs, Angular, Node, Full Stack, developer, API, Gabriel Jony"
    />
    <div className="photo">
      <Image />
    </div>
    <SocialLinks />
    <h1>Web Developer</h1>
    <h2>Hello, I am Gabriel Jony!</h2>
    <section>
      <p>
        I'm a Web Developer, I work with Full-Stack creating apps and web pages.
        I participate in events about technology and I like to study
        productivity and communication, it helps me stay organized and
        collaborative.
      </p>
      <p>
        I develop projects mainly with JavaScript using React, Vue, Angular and
        Node. I have great knowledge in the Java language, with the Spring Boot.
        Skills with Mysql Database, PostgreSQL and Oracle.
      </p>
    </section>
  </Layout>
)

export default IndexPage
