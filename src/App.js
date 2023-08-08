import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SignIn from "./Screens/SignIn/SignIn";
import Dashboard from "./Screens/Dashboard/Dashboard";
import Pending from "./Screens/Pending/Pending";
function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<SignIn />} />
          <Route path="/Dashboard" element={<Dashboard />} />
          <Route path="/Pending" element={<Pending />} />
        </Routes>
      </Router>
     
    </>
  );
}

export default App;
