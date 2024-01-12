import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { Header } from "./assets/components/Header";
import { Body1 } from "./assets/components/Body1";
import { Body2 } from "./assets/components/Body2";
import { Body3 } from "./assets/components/Body3";
import { Footer } from "./assets/components/Footer";

function App() {
  return (
    <>
      <Header></Header>
      <Body1></Body1>
      <Body2></Body2>
      <Body3></Body3>
      {/* <Footer></Footer> */}
    </>
  );
}

export default App;
