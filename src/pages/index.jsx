import { graphql } from 'gatsby';
import get from 'lodash/get';
import React from 'react';

import Header from '../components/header';
import Layout from '../components/layout';
import SectionAbout from '../components/section-about';
import SectionBlog from '../components/section-blog';
import SectionExperience from '../components/section-experience';
import SectionEducation from '../components/section-education';
import SectionSkills from '../components/section-skills';
import SectionProjects from '../components/section-projects';
import SEO from '../components/seo';

const Index = ({ data }) => {
  const about = get(data, 'site.siteMetadata.about', false);
  const experience = get(data, 'site.siteMetadata.experience', false);
  const education = get(data, 'site.siteMetadata.education', false);
  const skills = get(data, 'site.siteMetadata.skills', false);
  const projects = get(data, 'site.siteMetadata.projects', false);

  return (
    <Layout>
      <SEO />
      <Header metadata={data.site.siteMetadata} noBlog={true} />
      {about && <SectionAbout about={about} />}
      {experience && experience.length && (
        <SectionExperience experience={experience} />
      )}
      {education && education.length && (
        <SectionEducation education={education} />
      )}
      {skills && skills.length && <SectionSkills skills={skills} />}
      {projects && projects.length && <SectionProjects projects={projects} />}
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
        education {
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
