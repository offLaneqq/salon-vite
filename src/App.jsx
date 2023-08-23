import Header from "./Components/Header/Header";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./Components/PagesContent/HomePage";

function App() {
  return (
    <>
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
      </Routes>
    </Router>
    </>
  );
}

export default App;
