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
        <div className="language-container">
          {repo.language === "HTML" && (
            <span
              className="iconLanguage"
              style={{ background: "#e34c26" }}
            ></span>
          )}

          {repo.language === "JavaScript" && (
            <span
              className="iconLanguage"
              style={{ background: "#f1e05a" }}
            ></span>
          )}

          {repo.language === "TypeScript" && (
            <span
              className="iconLanguage"
              style={{ background: "#3178c6" }}
            ></span>
          )}

          {repo.language === "PHP" && (
            <span
              className="iconLanguage"
              style={{ background: "#4F5D95" }}
            ></span>
          )}

          {repo.language === "css" && (
            <span
              className="iconLanguage"
              style={{ background: "#563d7c" }}
            ></span>
          )}

          <span className="language">{repo.language}</span>
        </div>
      </li>
    </a>
  );
}

export default RepositoryItem;
