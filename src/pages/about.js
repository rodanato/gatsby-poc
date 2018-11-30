import React from "react"
import { graphql, Link } from "gatsby"
import Header from "../components/header"

export default ({data}) => (
  <div style={{ color: `teal` }}>
      <Link to="/">Home</Link>
    <p>{data.site.siteMetadata.title}</p>
    <Header secondLine={data.site.siteMetadata.title} />
  </div>
);


export const query = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`