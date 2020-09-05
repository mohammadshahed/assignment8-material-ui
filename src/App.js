import React from 'react';

import {
  BrowserRouter as Router,
  Route,
} from "react-router-dom";
import Home from './Components/Home/Home';
// import Comments from './Components/Comments/Comments';
import PostDetail from './Components/PostDetail/PostDetail';


function App() {

  return (
    <Router>
      <Route path = "/home">
        <Home></Home>
      </Route>
      <Route path = "/comments?postId=:${userId}">
        <PostDetail></PostDetail>
      </Route>
      <Route exact path = "/">
        <Home></Home>
      </Route>
    </Router>
  );
}

export default App;
