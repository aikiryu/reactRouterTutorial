import React, { Component } from "react";
import { Route } from "react-router-dom";
import { Home, About } from "pages";
/*
    먼저, App 컴포넌트를 만든다. 어떤 주소로 왔을떄 무엇을 보여줄지, 나중에 여기서 정의하도록 한다. 
    지금은 일단 비어있는 컴포넌트를 만들어둔다. 
*/
class App extends Component {
  render() {
    return (
      <div>
        {/*
             라우트를 설정할 때는 Route 컴포넌트를 사용하고, 경로는 path 값으로 설정한다
             첫번째 라우트 / 의 경우, Home 컴포넌트를 보여주게 했고,
             두번째 라우트 /about에서는 About 컴포넌트를 보여주게 했다.
             첫번째 라우트의 경우엔 exact가 붙어있는데, 이게 붙어있으면 주어진 경로와
             정확히 맞아떨어져야만 설정한 컴포넌트를 보여준다. 

             exact가 없는 경우, about에 접속 시 -> Home 과 About 둘 다 보인다.
             /about에도 /가 있기 때문에 매칭이 되어서 보여지는 것
            
             

             지금의 경우에는 개발서버쪽에서 historyApiFallback설정을 통하여
             어떤 요청으로 들어오던 우리 어플리케이션이 불러와져있는 index.html을 보여주도럭
             설정하기 때문이다
            
             링크를 이렇게 직접 입력해서 들어갈 때는, 서버라우트를 한번 타게 된다.
             그러면 서버쪽에서 리액트 앱으로 연결시켜줘야 하고, 실제 서버에서는
             우리가 설정한 라우트에 들어왔을 때 리액트 앱이 보여지는 페이지를 보여주게 하거나,
             혹은 Api등 사전 준비된 라우트를 제외한 모든 요청을 리액트 앱쪽으로
             연결시켜주는 작업을 해야한다.
             그렇게 하지 않으면 서버측에서는 연결할 라우터가 없어서 404 NOT Found 페이지만 뜰 것이다.

              */}
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
      </div>
    );
  }
}

export default App;
