import React from "react"
import { Link } from "gatsby"

import indexStyles from './index.module.scss'
import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import Chip from '../components/chip'

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Chip>red</Chip>
    <Chip>lightcoral</Chip>
    <Chip>vermilion</Chip>
    <Chip>maroon</Chip>
    <Chip>darkred</Chip>
    <Chip>deepcarmine</Chip>
    <Chip>midnight</Chip>
    <br />
    <Chip>gold</Chip>
    <Chip>yelloworange</Chip>
    <Chip>orange</Chip>
    <Chip>mustard</Chip>
    <Chip>neoncarrot</Chip>
    <Chip>lightredochre</Chip>
    <Chip>vanilla</Chip>
    <Chip>tuscanbrown</Chip>
    <br />
    <Chip>blue</Chip>
    <Chip>darkblue</Chip>
    <Chip>skyblue</Chip>
    <Chip>lightblue</Chip>
    <Chip>midnightblue</Chip>
    <Chip>darkblue</Chip>
    <Chip>bluejeans</Chip>
    <Chip>airforceblue</Chip>
    <Chip>navy</Chip>
    <Chip>mediumblue</Chip>
    <Chip>lightcobaltblue</Chip>
    <Chip>cornflowerblue</Chip>
    <Chip>lightskyblue</Chip>
    <br />
    <Chip>green</Chip>
    <Chip>cadetblue</Chip>
    <Chip>seagreen</Chip>
    <Chip>teal</Chip>
    <Chip>darkcyan</Chip>
    <Chip>aquamarine</Chip>
    <Chip>aqua</Chip>
    <Chip>darkgreen</Chip>
    <Chip>darkolivegreen</Chip>
    <Chip>forestgreen</Chip>
    <Chip>olivedrab</Chip>
    <Chip>cambridgeblue</Chip>
    <Chip>mediumaquamarine</Chip>
    <Chip>limegreen</Chip>
    <Chip>lightgreen</Chip>
    <Chip>lawngreen</Chip>
    <Chip>forestgreen</Chip>
    <br />
    <Chip>richblack</Chip>
    <Chip>gunmetal</Chip>
    <Chip>silver</Chip>
    <Chip>platinum</Chip>

    <h2>Combinações</h2>
    <Chip>platinum</Chip>
    <Chip>bluejeans</Chip>
    <Chip>airforceblue</Chip>
    <Chip>white</Chip>
    <Chip>midnight</Chip>

  </Layout>
)

export default IndexPage
