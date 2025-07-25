import { Helmet } from 'react-helmet';
import { useStaticQuery, graphql } from 'gatsby';
import PropTypes from 'prop-types';
import React from 'react';

const SEO = ({ description, lang, meta, title, pathname }) => {
  const { site, socialImage } = useStaticQuery(
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
        socialImage: file(relativePath: { eq: "profile_max.jpg" }) {
          childImageSharp {
            gatsbyImageData(width: 1200, height: 630, layout: FIXED)
            resize(width: 1200, height: 630) {
              src
            }
          }
        }
      }
    `
  );

  const metaDescription = description || site.siteMetadata.description;
  const defaultTitle = site.siteMetadata?.title;
  const finalTitle = title ? `${title} | ${defaultTitle}` : defaultTitle;
  const canonicalUrl = `${site.siteMetadata.siteUrl}${pathname || ''}`;

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
          content: canonicalUrl,
        },
        {
          property: `og:image`,
          content: `${site.siteMetadata.siteUrl}${socialImage?.childImageSharp?.resize?.src || '/favicon-32x32.png'}`,
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
          "url": canonicalUrl,
          "image": `${site.siteMetadata.siteUrl}${socialImage?.childImageSharp?.resize?.src || '/favicon-32x32.png'}`,
          "sameAs": [
            site.siteMetadata.github,
            site.siteMetadata.linkedin
          ].filter(Boolean),
          "description": metaDescription
        })}
      </script>
      <link rel="canonical" href={canonicalUrl} />
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
  pathname: PropTypes.string,
};

export default SEO;
