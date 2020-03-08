import React from "react";
import MainBn from "../components/MainBn";
import BigText from "../components/BigText";
const AdBox = ({ children }) => {
  return (
    <div>
      <div className="menu-item">{children}</div>
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
      <BigText>YAHo</BigText>
    </div>
  );
};

export default Home;
