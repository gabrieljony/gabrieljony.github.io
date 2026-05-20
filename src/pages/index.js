import React from "react"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import SocialLinks from "../components/SocialLinks"

/**
 * Página inicial da aplicação
 * Exibe apresentação do desenvolvedor com foto, links sociais e descrição
 */
const IndexPage = () => (
  <Layout>
    <SEO
      title="Home"
      description="Full Stack developer, desenvolvendo apps e páginas web"
      keywords="Java, Javascript, React, Vue, Angular, Node, Full Stack, developer, API, Gabriel Jony"
    />
    <div className="photo">
      <Image />
    </div>
    <SocialLinks />
    <h1>Web Developer!</h1>
    <h2>Olá, eu sou Gabriel Jony!</h2>
    <section className="about-content">
      <p>
        Sou um Desenvolvedor Web, trabalho com Full-Stack criando apps e páginas
        web. Participo de eventos sobre tecnologia e gosto de estudar produtividade
        e comunicação, isso me ajuda a ficar organizado e colaborativo.
      </p>
      <p>
        Desenvolvo projetos principalmente com JavaScript usando React, Vue, Angular
        e Node. Tenho grande conhecimento na linguagem Java, com Spring Boot.
        Habilidades com banco de dados MySQL, PostgreSQL e Oracle.
      </p>
    </section>
  </Layout>
)

export default IndexPage
