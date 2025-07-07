import { Link } from 'gatsby';
import React from 'react';

const classes = {
  wrapper: 'mb-6',
  name: 'font-semibold text-gray-900 pb-1',
  description: 'text-md text-gray-600 font-light',
};

const SummaryItem = ({ name, description, link = false, internal = false }) => {
  let linkContent;
  if (internal) {
    linkContent = <Link to={link}>{name}</Link>;
  } else {
    linkContent = <a href={link}>{name}</a>;
  }

  // Handle multi-line descriptions by splitting on \n
  const descriptionParts = description.split('\n');
  const titleAndDate = descriptionParts[0];
  const narrative = descriptionParts.slice(1).join('\n').trim();

  return (
    <div className={classes.wrapper}>
      <h3
        className={`${classes.name} ${
          link ? 'hover:underline hover:text-black' : ''
        }`}
      >
        {link ? linkContent : name}
      </h3>
      <p className={classes.description}>{titleAndDate}</p>
      {narrative && (
        <p className={classes.description} style={{ marginTop: '0.5rem' }}>
          {narrative}
        </p>
      )}
    </div>
  );
};

export default SummaryItem;
