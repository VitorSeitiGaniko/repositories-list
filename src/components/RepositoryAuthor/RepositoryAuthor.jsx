// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from "react";
import "./style.scss";

function RepositoryAuthor() {
  const [dataGithub, setDataGithub] = useState([]);
  const [isMobile, setIsMobile] = useState([]);

  useEffect(() => {
    fetch("https://api.github.com/users/VitorSeitiGaniko").then((response) =>
      response.json().then((data) => setDataGithub(data))
    );

    setIsMobile(screen.width < 768 ? true : false);
  }, []);

  return (
    <div className="author">
      {!isMobile && (
        <div className="image">
          <img src={dataGithub.avatar_url} alt="" />
        </div>
      )}

      {!isMobile && <h1>{dataGithub.login}</h1>}

      {isMobile && (
        <div className="imageMobile">
          <img src={dataGithub.avatar_url} alt="" />
          <h1>{dataGithub.login}</h1>
        </div>
      )}

      <p>{dataGithub.bio}</p>
      <a href="https://www.linkedin.com/in/vitor-ganiko/" target="_blank" rel="noreferrer">
        <button>Entre em contato</button>
      </a>
    </div>
  );
}

export default RepositoryAuthor;
