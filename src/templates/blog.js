import React from 'react'

import Layout from '../components/layout';
import { graphql } from 'gatsby';
import {documentToReactComponents} from "@contentful/rich-text-react-renderer";
import Img from 'gatsby-image';
import Head from "../components/head";

export const query = graphql`
query($slug: String!){
    contentfulBlogPost(slug: {
      eq: $slug
    }){
      title
      slug
      plubishedDate(formatString:"MMMM Do, YYYY")
      body{json}
    }
  }`


const Blog = (props) => {
    const options = {
      renderNode: {
        "embedded-asset-block": (node) => {
          const alt = node.data.target.fields.title['en-US']
          const url = node.data.target.fields.file['en-US'].url
          console.log("node: ",alt,)
          return <img src={url} alt={alt} />
        }
      }
    }
    return (
        <Layout>
          <Head title={props.data.contentfulBlogPost.title} />
           <h2>{props.data.contentfulBlogPost.title}</h2>
           <p>{props.data.contentfulBlogPost.plubishedDate}</p>
           {documentToReactComponents(props.data.contentfulBlogPost.body.json, options)}
        </Layout>
    )
}

export default Blog;