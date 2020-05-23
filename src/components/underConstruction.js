import React from "react"
import { useStaticQuery, graphql } from "gatsby"

const UnderConstruction = () => {
  const data = useStaticQuery(graphql`
    query {
      placeholderImage: file(relativePath: { eq: "gabriel.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 300) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  return (
    <React.Fragment>
      <h1 className="construction">WEBSITE - WE ARE UNDER CONSTRUCTION</h1>
    </React.Fragment>
  )
}

export default UnderConstruction
