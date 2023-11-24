import "./App.css";
import { Header } from "./Components/Header";
import { Shop } from "./Components/Shop";
import { Footer } from "./Components/Footer";
import { Navigate, Route, Router, Routes } from "react-router-dom";
import { Basket } from "./Components/Basket";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path={"/"} element={<Shop />} />
        <Route path={"/basket"} element={<Basket />} />
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
