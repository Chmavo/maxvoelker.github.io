import { Helmet } from 'react-helmet';
import { useStaticQuery, graphql } from 'gatsby';
import PropTypes from 'prop-types';
import React from 'react';

const SEO = ({ description, lang, meta, title }) => {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
            author
            siteUrl
            name
            github
            linkedin
          }
        }
      }
    `
  );

  const metaDescription = description || site.siteMetadata.description;
  const defaultTitle = site.siteMetadata?.title;
  const finalTitle = title ? `${title} | ${defaultTitle}` : defaultTitle;

  return (
    <Helmet
      htmlAttributes={{
        lang,
      }}
      title={finalTitle}
      meta={[
        {
          name: `description`,
          content: `${metaDescription} Based in New York City (NYC). Expert in ML/AI, fraud prevention, and enterprise data science leadership.`,
        },
        {
          name: `keywords`,
          content: `Max Voelker, Data Science Manager NYC, Data Science New York, Machine Learning Engineer NYC, AWS Data Science, AI Manager New York, Data Science Leadership NYC, ML Engineering New York City, Fraud Prevention, Risk Management, Enterprise AI, Deep Learning Engineer, MLOps Expert`,
        },
        {
          name: `robots`,
          content: `index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1`,
        },
        {
          name: `viewport`,
          content: `width=device-width, initial-scale=1`,
        },
        {
          name: `format-detection`,
          content: `telephone=no`,
        },
        {
          name: `geo.region`,
          content: `US-NY`,
        },
        {
          name: `geo.placename`,
          content: `New York City`,
        },
        {
          property: `og:title`,
          content: finalTitle,
        },
        {
          property: `og:description`,
          content: metaDescription,
        },
        {
          property: `og:type`,
          content: `website`,
        },
        {
          property: `twitter:card`,
          content: `summary`,
        },
        {
          property: `twitter:creator`,
          content: site.siteMetadata?.author || ``,
        },
        {
          property: `twitter:title`,
          content: finalTitle,
        },
        {
          property: `twitter:description`,
          content: metaDescription,
        },
      ].concat(meta)}
      script={[
        {
          type: 'application/ld+json',
          innerHTML: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Person',
            name: site.siteMetadata.name,
            url: site.siteMetadata.siteUrl,
            sameAs: [
              site.siteMetadata.github,
              site.siteMetadata.linkedin,
            ],
            jobTitle: 'Data Science Manager',
            worksFor: {
              '@type': 'Organization',
              name: 'Amazon Web Services (AWS)',
              address: {
                '@type': 'PostalAddress',
                addressLocality: 'New York',
                addressRegion: 'NY',
                addressCountry: 'US'
              }
            },
            description: metaDescription,
            workLocation: {
              '@type': 'Place',
              address: {
                '@type': 'PostalAddress',
                addressLocality: 'New York',
                addressRegion: 'NY',
                addressCountry: 'US'
              }
            },
            knowsAbout: [
              'Machine Learning',
              'Artificial Intelligence',
              'Deep Learning',
              'MLOps',
              'Fraud Prevention',
              'Risk Management',
              'Team Leadership',
              'AWS',
              'Python',
              'R',
              'SQL'
            ],
            hasOccupation: {
              '@type': 'Occupation',
              name: 'Data Science Manager',
              skills: 'Machine Learning, AI, Deep Learning, MLOps, Team Leadership, Fraud Prevention',
              occupationLocation: {
                '@type': 'City',
                name: 'New York City'
              }
            },
            alumniOf: [
              {
                '@type': 'Organization',
                name: 'Fidelity Investments',
                url: 'https://www.fidelity.com'
              }
            ],
            award: [
              'US Patent 10,826,927 - Data Exfiltration Detection Systems and Methods'
            ],
            hasCredential: [
              {
                '@type': 'EducationalOccupationalCredential',
                name: 'Data Science Patent',
                url: 'https://patents.google.com/patent/US10826927B1/en'
              }
            ]
          })
        }
      ]}
    />
  );
};

SEO.defaultProps = {
  lang: `en`,
  meta: [],
  description: ``,
};

SEO.propTypes = {
  description: PropTypes.string,
  lang: PropTypes.string,
  meta: PropTypes.arrayOf(PropTypes.object),
  title: PropTypes.string,
};

export default SEO;
