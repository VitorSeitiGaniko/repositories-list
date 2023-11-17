import React, { useEffect, useState } from "react";
import "../styles/global.scss";
import RepositoryItem from "./RepositoryItem";

function RepositoryList() {
  const [arrayRepo, setArrayRepo] = useState([]);

  useEffect(() => {
    fetch("https://api.github.com/users/VitorSeitiGaniko/repos").then(
      (response) => response.json().then((data) => setArrayRepo(data))
    );
  }, []);

  return (
    <div>
      <h1>Meus Repositórios do GitHub</h1>
      <ul>
        {arrayRepo.map((repo) => (
          <RepositoryItem repo={repo} key={repo.name} />
        ))}
      </ul>
    </div>
  );
}

export default RepositoryList;
