import React, { useState } from "react";
import { BrowserRouter } from "react-router-dom";
import NavBar from "./components/NavBar";
import AppRoutes from "./Routes";
import "./App.css";

function App() {
  const [currentUser, setCurrentUser] = useState(null);

  return (
    <BrowserRouter>
      <NavBar currentUser={currentUser} />
      <AppRoutes currentUser={currentUser} />  
    </BrowserRouter>
  );
}

export default App;