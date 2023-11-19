/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from "react";
import "./style.scss";

function RepositoryItem({ repo }) {
  return (
    <a href={repo.html_url}>
      <li className="item">
        <div className="item-title">
          <img
            width="16"
            height="16"
            src="https://img.icons8.com/ios/50/book--v1.png"
            alt="book--v1"
          />
          <h2>{repo.name}</h2>
          <span className="visibility">
            {repo.visibility === "public" ? "Público" : "Privado"}
          </span>
        </div>
        <div>
          <span className="language">{repo.language}</span>
        </div>
      </li>
    </a>
  );
}

export default RepositoryItem;
