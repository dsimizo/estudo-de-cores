import React from 'react'
import { graphql, useStaticQuery } from "gatsby"
import PropTypes from 'prop-types'
import _ from 'lodash'

import schemeStyles from './scheme.module.scss'

const scheme = (props) => {
  const { allColors } = useStaticQuery(graphql`
    query {
      allColors: allMarkdownRemark (
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

  const findColors = (colors) => {
    const colorsLowerCase = colors.map((color) => {
      return color.toLowerCase()
    })
    
    let colorScheme = []
    colorsLowerCase.forEach((color) => {
      const colorData = _.find(allColors.edges, (allColor) => {
        return allColor.node.frontmatter.name.toLowerCase() === color
      })
      if (colorData) {
        colorScheme.push(colorData)
      }
    })
    return colorScheme
  }
  
  const { colors } = props

  const colorScheme = findColors(colors)

  return (
    <div className={schemeStyles.scheme}>
      {
        colorScheme.map((colorNode) => {
          const color = colorNode.node
          const style = {
            backgroundColor: color.frontmatter.hexColor,
            color: color.frontmatter.textColor,
            border: color.frontmatter.border === "" ? 'none' : color.frontmatter.border
          }

          return (
            <div key={color.frontmatter.name}
              className={schemeStyles.divColor}
              style={style}
            >
              <p className={schemeStyles.colorName}>
                {color.frontmatter.name}
              </p>
              <p className={schemeStyles.colorHex}>
                {color.frontmatter.hexColor.toUpperCase()}
              </p>
            </div>
          )
        })
      }
    </div>
  )
}



export default scheme