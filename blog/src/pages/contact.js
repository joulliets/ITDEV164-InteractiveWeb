import React from 'react';
import { graphql } from "gatsby"
import { Link } from 'gatsby';

import { Layout } from "../components/Layout"
import { Image } from '../components/image';
import { Seo }  from '../components/Seo';

const Contact = ({ data }) => {
  const { name, company, address } = data.site.siteMetadata.contact
  return (
    <Layout>
      <Seo title="Contact" />
      <h1>Contact Us</h1>
      <p>Please send all inquiries to: </p>
      <div>{company}</div>
      <div>{`C/O ${name}`}</div>
      <div>{address}</div>

      <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
        <Image />
      </div>
      <Link to="/">Home</Link>
    </Layout>
  )
}

export default Contact

export const query = graphql`
  query {
    site {
      siteMetadata {
        contact {
          name
          company
          address
        }
      }
    }
  }
`
