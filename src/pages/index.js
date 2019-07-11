import React from "react"
import { graphql, useStaticQuery } from "gatsby"

import indexStyles from './index.module.scss'
import Layout from "../components/layout"
import SEO from "../components/seo"
import Chip from '../components/chip'
import ColorScheme from '../components/scheme'

const IndexPage = () => {
  const data = useStaticQuery(graphql`
    query {
      colors: allMarkdownRemark (
        sort: { fields: fields___hsl___h, order: ASC}
      ){
        edges {
          node {
            frontmatter {
              name
              hexColor
              textColor
              border
            }
            fields {
              hsl {
                h
                s
                l
              }
            }
          }
        }
      }
    }  
  `)

  const showChips = () => {
    const colors = data.colors.edges
    return colors.map((color) => {
      const { name, hexColor, textColor, border } = color.node.frontmatter
      const { hsl } = color.node.fields
      return (
        <Chip
          key={name}
          color={hexColor}
          hexColor={hexColor}
          textColor={textColor}
          border={border}
          hslColor={hsl}
        >
          {name}
        </Chip>
      )
    })
  }
  
  return (
    <Layout>
      <SEO title="Home" />
      {showChips()}

      <h1 className={indexStyles.titulos}>Combinações</h1>
      <ColorScheme colors={[
        'Phthalo green',
        "st. patrick's blue",
        "b'dazzled blue",
        'carolina blue',
        'medium turquoise'
      ]}/>
      <ColorScheme colors={[
        'platinum',
        "blue jeans",
        "air force blue",
        'white',
        'midnight'
      ]}/>

    </Layout>
  )
}

export default IndexPage
