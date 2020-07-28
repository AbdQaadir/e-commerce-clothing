import React, { Component } from "react";
import Directory from "../../components/directory/directory.component";
import "./homepage.style.scss";

const HomePage = () => {
  return (
    <div>
      <div className="homepage">
        <Directory />
      </div>
    </div>
  );
};

export default HomePage;
