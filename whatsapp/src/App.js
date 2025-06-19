import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./Components/Home";
import { AnimatePresence } from "framer-motion";
import { useLocation } from "react-router-dom";
import Signin from "./Components/Signin";
import Welcomepage from "./Components/Welcomepage";
import Chatcomponent from "./Components/Chatcomponent";
import Message from "./Components/Message";

function App() {
  const location = useLocation();
  return (
    <AnimatePresence key={location.pathname}>
      <Routes>
        <Route element={<Home />} path="/"></Route>
        <Route element={<Signin />} path="/signin" />

        <Route path="/welcome" element={<Welcomepage />}>
          <Route
            path="chatcomponent/:senderid/:reciverid/:username/:userimage"
            element={<Chatcomponent />}
          ></Route>
        </Route>
      </Routes>
    </AnimatePresence>
  );
}

export default App;
