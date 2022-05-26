/* eslint-disable react/require-default-props */
import React from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
import { resolvePageUrl } from 'utilities/core/string';
import config from '../../config';

function SeoComponent({ title, description, path = '/', lang, keywords = 'Rashgaroth', contentType, imageUrl, meta }) {
  const metaKeywords = keywords && keywords.length > 0 ? { name: 'keywords', content: keywords.join(', ') } : [];
  const pageUrl = resolvePageUrl(config.siteUrl, config.basename, path);
  return (
    <Helmet
      title={title} // Page title
      titleTemplate={`%s | ${config.siteTitle}`}
      meta={
        [
          { name: 'description', content: description }, // Page description
          /* Open Graph */
          { property: 'og:title', content: title },
          { property: 'og:type', content: contentType || 'website' },
          { property: 'og:url', content: pageUrl },
          { property: 'og:description', content: description },
          { property: 'og:image', content: imageUrl },
          { property: 'og:image:alt', content: description },
          { property: 'og:site_name', content: config.siteTitle },
          { property: 'og:locale', content: lang || 'en_US' },
          /* Twitter card */
          { name: 'twitter:card', content: 'summary_large_image' },
          { name: 'twitter:title', content: title },
          { name: 'twitter:description', content: description },
          { name: 'twitter:image', content: imageUrl },
          { name: 'twitter:image:alt', content: description },
          { name: 'twitter:site', content: 'Rashgaroth' },
          { name: 'twitter:creator', content: 'Rashgaroth' },
        ]
          .concat(metaKeywords) // Keywords
          .concat(meta || []) // Other provided metadata
      }
      link={[
        { rel: 'canonical', href: pageUrl }, // Canonical url
      ]}
    />
  );
}

SeoComponent.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  path: PropTypes.string,
  lang: PropTypes.string,
  keywords: PropTypes.string,
  contentType: PropTypes.string,
  imageUrl: PropTypes.string,
  meta: PropTypes.string,
};

export default SeoComponent;
