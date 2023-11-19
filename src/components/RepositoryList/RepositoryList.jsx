// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from "react";
import RepositoryItem from "../RepositoryItem/RepositoryItem";
import "./style.scss";

function RepositoryList() {
  const [arrayRepo, setArrayRepo] = useState([]);

  useEffect(() => {
    fetch("https://api.github.com/users/VitorSeitiGaniko/repos").then(
      (response) => response.json().then((data) => setArrayRepo(data))
    );
  }, []);

  return (
    <div className="list">
      <h1>Repositórios do GitHub</h1>
      <ul className="list-repo">
        {arrayRepo.map((repo) => (
          <RepositoryItem repo={repo} key={repo.name} />
        ))}
      </ul>
    </div>
  );
}

export default RepositoryList;
