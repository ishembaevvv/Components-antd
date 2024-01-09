import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import data from "./data";
import Home from "./Pages/Home";

function App() {
  return (
    <Router>
      <Routes>
        {data.map((el, id) => {
          return <>
          <Route key={id} path={el.path} element={el.elem} />
          </>;
        })}
      </Routes>
    </Router>
  );
}

export default App;
