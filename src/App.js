/** @format */

import logo from "./logo.svg";
import "./App.css";
import Navbars from "./Navbars";
import Body from "./Body";
import Footer from "./Footer";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div className='App'>
      <Navbars />
      <Body />
      <Footer />
    </div>
  );
}

export default App;
