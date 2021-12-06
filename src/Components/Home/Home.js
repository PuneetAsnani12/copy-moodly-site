import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import CardContainer from "../CardContainer/CardContainer";
import Presets from "../Presets/Presets";
import "./home.styles.scss"

const Home = () => (
  <div className="home">
    <Header></Header>
    <Presets></Presets>
    <CardContainer></CardContainer>
    <Footer></Footer>
  </div>
);

export default Home;
