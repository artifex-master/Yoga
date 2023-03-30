import "bootstrap/dist/css/bootstrap.min.css";
import NaviBar from "./components/NaviBar";
import { BrowserRouter, Routes, Route, BrowserRouter } from "react-router-dom";

import { Home } from "./Home";
import { Users } from "./Users";
import { About } from "./About";

function App() {
  return (
    <>
      <BrowserRouter>
        <NaviBar />
        <Routes>
          <Route exact path="/" component={ Home }></Route>
          <Route exact path="/users" component={ Users }></Route>
          <Route exact path="/about" component={ About }></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
