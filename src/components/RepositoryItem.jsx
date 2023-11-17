/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from "react";

function RepositoryItem({ repo }) {
  return (
    <li>
      <h2>{repo.name}</h2>
      <a href={repo.html_url}>Acessar repositório</a>
    </li>
  );
}

export default RepositoryItem;
