import React from "react";
import Navbar from "./Navbar/Navbar";
import Jumbotron from "./jumbotron/Jumbotron";
import request from "../request";
import Row from "./Row/Row";
const Layout = () => {
  return (
    <div>
      <Navbar />
      <Jumbotron />
      <Row title='netflix original' isLarge={true} fetchURL={request.fetchNetflixOriginals} />
      <Row title='trending now' fetchURL={request.fetchTrending} />
     
    </div>
  );
};

export default Layout;
