import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import Frame from "./components/Frame";
import Error404 from "./pages/Erreur404";
import "./App.css";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route index element={<Home />} />
          <Route
            path='/contact'
            element={
              <Frame>
                {" "}
                <Contact />
              </Frame>
            }
          />
          <Route path='*' element={<Error404 />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
