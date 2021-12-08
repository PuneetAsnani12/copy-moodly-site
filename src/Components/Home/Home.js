import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import CardContainer from "../CardContainer/CardContainer";
import Presets from "../Presets/Presets";
import "./home.styles.scss";

const Home = () => (
  <div className="home">
    <Header></Header>
    <Presets></Presets>
    <CardContainer></CardContainer>
    <div>
      {" "}
      <a href="https://dissertation-writingservice.com/">
      </a>{" "}
      <script
        type="text/javascript"
        src="https://www.freevisitorcounters.com/auth.php?id=acc285b15649c82ebe90a9c294b9afa595579257"
      ></script>
      <script
        type="text/javascript"
        src="https://www.freevisitorcounters.com/en/home/counter/892028/t/7"
      ></script>
    </div>
    <Footer></Footer>
  </div>
);

export default Home;
