import React from "react";
import Main from "./components/Main";
import Container from "./components/Container";
import Header from "./components/Header";
import "./App.css";

function App(){
return (
<div className="App">
  <Container>
    <Header />
    <Main />
  </Container>
</div>
);
}
export default App;
