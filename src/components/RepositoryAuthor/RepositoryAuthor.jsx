// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from "react";
import "./style.scss";

function RepositoryAuthor() {
  const [dataGithub, setDataGithub] = useState([]);

  useEffect(() => {
    fetch("https://api.github.com/users/VitorSeitiGaniko").then((response) =>
      response.json().then((data) => setDataGithub(data))
    );
  }, []);

  return (
    <div className="author">
      <div className="image">
        <img src={dataGithub.avatar_url} alt="" />
      </div>

      <h1>{dataGithub.login}</h1>
      <p>{dataGithub.bio}</p>
      <button>Entre em contato</button>
    </div>
  );
}

export default RepositoryAuthor;
