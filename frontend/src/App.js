import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css"
import WebFont from "webfontloader";
import { useEffect } from "react";
import Header from "./component/layout/Header/Header.js";
import Footer from "./component/layout/Footer/Footer.js";
import Home from "./component/Home/Home.js";

function App() {

  useEffect(() => {

    WebFont.load({
      google: {
        families: ["Roboto", "Droid Sans", "Chilanka"]
      }
    })
  }, [])
  return <BrowserRouter>
    <Header />
    <Routes>
      <Route exact path="/" element={<Home />} />
    </Routes>
    <Footer />
  </BrowserRouter>
}

export default App;

// 5:27:48