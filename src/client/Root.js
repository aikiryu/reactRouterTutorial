import React from "react";
import { BrowserRouter } from "react-router-dom";
import App from "shared/App";

/*
 그 다음, Root 컴포넌트를 만든다. 
 이 컴포넌트는 우리의 웹어플리케이션에 Browser Router를 적용한다.
 나중에 리덕스를 적용하게 될 때, 여기서 Provider를 통하여 프로젝트에 
 리덕스를 연결시켜준다. 
 
*/

const Root = () => {
  return (
    <BrowserRouter>
      <App />
    </BrowserRouter>
  );
};

export default Root;
