import { useState } from "react";
// import "./App.css";
import Login from "./components/common/Login";
import Header from "./components/common/Header";
import SideBar from "./components/common/SideBar";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Header/>
      <SideBar/>
      {/* <Login/> */}
      
    </>
  );
}

export default App;
