// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from "react";
import RepositoryList from "./components/RepositoryList/RepositoryList";
import RepositoryAuthor from "./components/RepositoryAuthor/RepositoryAuthor";
import "./styles/global.scss";

function App() {
  return (
    <>
      <div className="container">
        <RepositoryAuthor />
        <RepositoryList />
      </div>
    </>
  );
}

export default App;
