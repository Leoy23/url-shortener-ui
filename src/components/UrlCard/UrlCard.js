import React from "react";

const UrlCard = ({title, short_url, long_url}) => {
  return (
    <div className="url">
      <h3>{title}</h3>
      <a className="short-url-link" href={short_url} target="blank">
        {short_url}
      </a>
      <p className="long-url-link">{long_url}</p>
    </div>
  );
};

export default UrlCard;
