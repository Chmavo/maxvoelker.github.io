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
            image
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
          content: metaDescription,
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
    >
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Person",
          "name": site.siteMetadata.author,
          "url": site.siteMetadata.siteUrl,
          "sameAs": [
            site.siteMetadata.github,
            site.siteMetadata.linkedin
          ].filter(Boolean),
          "description": metaDescription
        })}
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
