import React from "react";
import { Routes, Route } from "react-router-dom";
import Profiles from "./Components/Profiles/Profiles";
import Explore from "./Components/Explore/Explore";
import More from "./Components/More/More";
import Message from "./Components/Message/Message";
import Lists from "./Components/Lists/Lists";
import Bookmarks from "./Components/Bookmarks/Bookmarks";
import Notifications from "./Components/Notifications/Notifications";
import Nav from "./Components/Nav/nav";
import Footer from "./Components/Footer/Footer";
import Main from "./Components/Main/main";
import "./App.css";

function AuthenticatedApp() {
  return (
    <div className="App">
      <Nav />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/profile" element={<Profiles />}></Route>
        <Route path="/explore" element={<Explore />}></Route>
        <Route path="/more" element={<More />}></Route>
        <Route path="/message" element={<Message />}></Route>
        <Route path="/lists" element={<Lists />}></Route>
        <Route path="/bookmarks" element={<Bookmarks />}></Route>
        <Route path="/notifications" element={<Notifications />}></Route>
        <Route path="*" element={<h1>Page Not Found 404 Error</h1>}></Route>
      </Routes>
      <Footer />
    </div>
  );
}

export default AuthenticatedApp;
