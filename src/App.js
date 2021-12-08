import "./App.css";
import { lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import Loader from "./Components/Loader/Loader";

const Home = lazy(() => import("./Components/Home/Home"));

const App = () => (
  <Suspense fallback={<Loader />}>
    <Routes>
      <Route path="/" element={<Home />} />
    </Routes>
  </Suspense>
);

export default App;
