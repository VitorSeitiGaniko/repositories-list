import React from "react";
import "../styles/global.scss";
import RepositoryItem from "./RepositoryItem";

function RepositoryList() {
  return (
    <div>
      <h1>Meus Repositórios do GitHub</h1>
      <ul>
        <RepositoryItem repoName="Nome do repositório" />
      </ul>
    </div>
  );
}

export default RepositoryList;
