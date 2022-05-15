import { useEffect, useState } from "react";
import "./App.scss";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import { UsersPage } from "./copmonents/Users/UsersPage";
import { PostsPage } from "./copmonents/Posts/PostsPage";
import { NavLink } from "react-router-dom";
import { UserItemPage } from "./copmonents/Users/UserItemPage";



function App() {



  return (
    <div className="App">
      <BrowserRouter>
        <div className="nav">
          <NavLink to="/users" > Users </NavLink>
          <NavLink to="/posts" > Posts </NavLink>
        </div>
        <Routes>
          <Route path={"/users"} element={<UsersPage />} />
          <Route path={"/posts"} element={<PostsPage />} />
          <Route path={"/users/:id"} element={<UserItemPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
