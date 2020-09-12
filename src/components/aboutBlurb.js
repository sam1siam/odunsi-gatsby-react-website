import React from "react";
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import { Link } from "gatsby"

const AboutBlurb = () => {
  const data = useStaticQuery(graphql`
    query {
      flower: file(relativePath: { eq: "flower-mouth.png" }) {
        childImageSharp {
          fluid(maxWidth: 300) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      fist: file(relativePath: { eq: "fist.png" }) {
        childImageSharp {
          fluid(maxWidth: 300) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)
  return (
    <div className="about-blurb">
      <div className="container">
        <div className="inner-blurb">
          <div className="content">
            <h3>The ability to create</h3>
            <p>Oladimeg is a Visual artist and photographer based in Ottawa, Canada. He is a Visual storyteller and does that through collaborations with both individuals and brands.

Oladimeg creates strong and powerful visual contents using original creative approaches and inventions. He uses these inventions and creative approaches to produce works that stand out and stands for something for both brands and individuals. He has worked with various brands such as Canon Canada, Grey Goose Canada, ICArt Miami, Unsplash, Pink Squid, Zara Portugal, Daniel Wellington, Andrea Iyamah, Blues fest, The Creator class and a host of others,

Some of his works have been presented in a Solo exhibition and various group shows.

Reach out today and Let’s Create!
            </p>
            <div className="btn-row">
              <Link to="/">View Series</Link>
            </div>
          </div>
          <div className="images">
            <div className="top-right">
              <Img fluid={data.fist.childImageSharp.fluid} />
            </div>
            <div className="bottom-left">
              <Img fluid={data.flower.childImageSharp.fluid} />
            </div>
          </div>
        </div>
      </div>
      <div className="black-box"></div>
      <div className="black-box overlay"></div>
    </div>
  )
}

export default AboutBlurb
