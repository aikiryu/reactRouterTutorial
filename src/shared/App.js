import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import { Home, About, Post } from "pages";
import Header from "../components/header";
/*
    먼저, App 컴포넌트를 만든다. 어떤 주소로 왔을떄 무엇을 보여줄지, 나중에 여기서 정의하도록 한다. 
    지금은 일단 비어있는 컴포넌트를 만들어둔다.
    
    src/shared: 서버와 클라이언트에서 공용으로 사용되는 컴포넌트 App.js 가 여기에 위치합니다.

*/
class App extends Component {
  render() {
    return (
      <div>
        <Header />
        {this.props.children}
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
        <Switch>
          <Route path="/post/:name" component={Post} />
          <Route path="/post" component={Post} />
        </Switch>
      </div>
    );
  }
}

export default App;
