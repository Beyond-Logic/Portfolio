/** @format */
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { NavBar } from "./components";
import { Contact, Home, Services } from "./pages";

function App() {
  return (
    <>
      <Router>
        <div className="md:px-20 px-10">
          <NavBar />
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/services" element={<Services />} />
            <Route exact path="/contact" element={<Contact />} />
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
