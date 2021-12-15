import { useState } from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import CardContainer from "../CardContainer/CardContainer";
import Presets from "../Presets/Presets";
import "./home.styles.scss";

const Home = () => {
  const [reRender, setReRender] = useState(false)
  return <div className="home">
    <Header></Header>
    <Presets reRender={reRender} setReRender={setReRender}></Presets>
    <CardContainer reRender={reRender} setReRender={setReRender}></CardContainer>
    <Footer></Footer>
  </div>
};

export default Home;
