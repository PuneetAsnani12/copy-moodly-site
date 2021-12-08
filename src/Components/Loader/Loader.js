
import mainLoader from "../../assets/images/main-loader.gif";
import "./loader.styles.scss";

const Loader = () => (
  <div className="loader">
      <img src={mainLoader} alt="...Loading"></img>
  </div>
);

export default Loader;
