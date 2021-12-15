import { useState,useEffect } from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import CardContainer from "../CardContainer/CardContainer";
import Cover from "../Cover/Cover";
import Presets from "../Presets/Presets";
import "./home.styles.scss";

const Home = () => {
  const [reRender, setReRender] = useState(false);
  const [showCover,setShowCover] = useState(true);
  useEffect(()=>{
    setTimeout(()=>{
      setShowCover(false)
    },4000)  
  },[])
  if(showCover){
    return <Cover/>
  }
  return <div className="home" style={{animation: `fadeIn 2s`}}>
    <Header></Header>
    <Presets reRender={reRender} setReRender={setReRender}></Presets>
    <CardContainer reRender={reRender} setReRender={setReRender}></CardContainer>
    <Footer></Footer>
  </div>
};

export default Home;
