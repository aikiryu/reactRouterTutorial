import React from "react";
import MainBn from "../components/MainBn.js";

const AdBox = ({ active, children, to }) => {
  return (
    <div>
      <div className="menu-item">{children}</div>
      <div className="test">
        {active}, {to}
      </div>
    </div>
  );
};
const Home = () => {
  return (
    <div className="mainContainer">
      <MainBn />
      <div className="row1">
        <AdBox>야호</AdBox>
        <AdBox>테스트</AdBox>
        <AdBox>재미있다!!</AdBox>
      </div>
    </div>
  );
};

export default Home;
