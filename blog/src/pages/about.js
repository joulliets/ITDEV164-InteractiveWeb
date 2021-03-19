import React from 'react';
import { graphql } from "gatsby"
import { Link } from 'gatsby';

import { Layout } from "../components/Layout"
import { Image } from '../components/image';
import { Seo }  from '../components/Seo';

const About = ({ data }) => {
  const { name, company } = data.site.siteMetadata.contact
  return (
    <Layout>
      <Seo title="About" />
      <h1> About Us</h1>
      <p>{`${company} was started by ${name} in 2021.`}</p>
      <p>{`At ${company} we just make blogs!`}</p>

      <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
        <Image />
      </div>
      <Link to="/">Home</Link>
    </Layout>
  )
}

export default About

export const query = graphql`
  query {
    site {
      siteMetadata {
        contact {
          name
          company
        }
      }
    }
  }
`
