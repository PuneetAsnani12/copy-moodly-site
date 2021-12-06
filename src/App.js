import "./App.css";
import { lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";

const Home = lazy(() => import("./Components/Home/Home"));
const App = () => (
  <Suspense fallback={<div>...Loading</div>}>
    <Routes>
      <Route path="/" element={<Home />} />
    </Routes>
  </Suspense>
);

export default App;
