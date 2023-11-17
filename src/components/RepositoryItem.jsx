import React from "react";

function RepositoryItem({ repoName }) {
  return (
    <li>
      <h2>{repoName}</h2>
      <a href="">Acessar repositório</a>
    </li>
  );
}

export default RepositoryItem;
