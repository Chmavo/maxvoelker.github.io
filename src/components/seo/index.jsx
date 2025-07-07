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
            keywords
            image
          }
        }
      }
    `
  );

  const metaDescription = description || site.siteMetadata.description;
  const defaultTitle = site.siteMetadata?.title;
  const finalTitle = title ? `${title} | ${defaultTitle}` : defaultTitle;

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": site.siteMetadata.author,
    "url": site.siteMetadata.siteUrl,
    "image": `${site.siteMetadata.siteUrl}${site.siteMetadata.image}`,
    "description": metaDescription,
    "jobTitle": "Data Science Manager",
    "workLocation": {
      "@type": "Place",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "New York",
        "addressRegion": "NY",
        "addressCountry": "US"
      }
    },
    "worksFor": {
      "@type": "Organization",
      "name": "Amazon Web Services"
    },
    "alumniOf": {
      "@type": "Organization",
      "name": "Fidelity Investments"
    },
    "knowsAbout": [
      "Machine Learning",
      "Artificial Intelligence", 
      "Fraud Prevention",
      "Data Science",
      "MLOps",
      "AWS",
      "Python",
      "Deep Learning"
    ],
    "sameAs": [
      "https://www.linkedin.com/in/cmaxvoelker",
      "https://github.com/Chmavo"
    ]
  };

  return (
    <Helmet
      htmlAttributes={{
        lang,
      }}
      title={finalTitle}
      meta={[
        {
          name: `description`,
          content: metaDescription,
        },
        {
          name: `keywords`,
          content: site.siteMetadata.keywords,
        },
        {
          name: `author`,
          content: site.siteMetadata.author,
        },
        {
          name: `robots`,
          content: `index, follow`,
        },
        {
          name: `googlebot`,
          content: `index, follow`,
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
          property: `og:url`,
          content: site.siteMetadata.siteUrl,
        },
        {
          property: `og:image`,
          content: `${site.siteMetadata.siteUrl}${site.siteMetadata.image}`,
        },
        {
          property: `og:image:width`,
          content: `432`,
        },
        {
          property: `og:image:height`,
          content: `432`,
        },
        {
          property: `og:site_name`,
          content: site.siteMetadata.author,
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
        {
          property: `twitter:image`,
          content: `${site.siteMetadata.siteUrl}${site.siteMetadata.image}`,
        },
        {
          name: `linkedin:owner`,
          content: site.siteMetadata?.author || ``,
        },
      ].concat(meta)}
    >
      <script type="application/ld+json">
        {JSON.stringify(jsonLd)}
      </script>
    </Helmet>
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
