import { graphql } from 'gatsby';
import get from 'lodash/get';
import React from 'react';

import Header from '../components/header';
import Layout from '../components/layout';
import SectionAbout from '../components/section-about';
import SectionBlog from '../components/section-blog';
import SectionExperience from '../components/section-experience';
import SectionSkills from '../components/section-skills';
import SectionProjects from '../components/section-projects';
import SEO from '../components/seo';

const Index = ({ data }) => {
  const about = get(data, 'site.siteMetadata.about', false);
<<<<<<< HEAD
  const projects = get(data, 'site.siteMetadata.projects', false);
  const posts = data.allMarkdownRemark.edges;
  const experience = get(data, 'site.siteMetadata.experience', false);
  const skills = get(data, 'site.siteMetadata.skills', false);
  const noBlog = !posts || !posts.length;
=======
  const experience = get(data, 'site.siteMetadata.experience', false);
  const skills = get(data, 'site.siteMetadata.skills', false);
  const projects = get(data, 'site.siteMetadata.projects', false);
>>>>>>> 4596e9a (Update role description to accurately reflect leading ML/AI initiatives for Fraud Prevention in AWS)

  return (
    <Layout>
      <SEO />
<<<<<<< HEAD
      <Header metadata={data.site.siteMetadata} noBlog={noBlog} />
=======
      <Header metadata={data.site.siteMetadata} noBlog={true} />
>>>>>>> 4596e9a (Update role description to accurately reflect leading ML/AI initiatives for Fraud Prevention in AWS)
      {about && <SectionAbout about={about} />}
      {experience && experience.length && (
        <SectionExperience experience={experience} />
      )}
      {skills && skills.length && <SectionSkills skills={skills} />}
      {projects && projects.length && <SectionProjects projects={projects} />}
<<<<<<< HEAD
      {!noBlog && <SectionBlog posts={posts} />}
=======
>>>>>>> 4596e9a (Update role description to accurately reflect leading ML/AI initiatives for Fraud Prevention in AWS)
    </Layout>
  );
};

export default Index;

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        name
        title
        description
        about
        author
        github
        linkedin
        resume
        experience {
          name
          description
          link
        }
        skills {
          name
          description
        }
        projects {
          name
          description
          link
        }
      }
    }
    allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: DESC }
      limit: 5
    ) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
            description
          }
        }
      }
    }
  }
`;
