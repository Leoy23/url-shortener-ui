import React from 'react';
import UrlCard from '../UrlCard/UrlCard';
import './UrlContainer.css';

const UrlContainer = props => {
  const urlEls = props.urls.map(url => {
    return (
     <UrlCard
      id={url.id}
      title={url.title}
      short_url={url.short_url}
      long_url={url.long_url}
      key={url.id}
     />
    )
  });

  return (
    <section>
      { urlEls.length ? urlEls : <p>No urls yet! Find some to shorten!</p> }
    </section>
  )
}

export default UrlContainer;
