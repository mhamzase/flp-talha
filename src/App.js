import React from "react";
import "./App.css";

import ContactForm from "./components/ContactForm";

function App() {
  return (
    <div
      className="App"
      style={{ backgroundColor: "#212529", minHeight: "100vh" }}
    >
      <div className="container">
        <ContactForm />
      </div>
    </div>
  );
}

export default App;
