import "./header.styles.scss";
import Button from "@mui/material/Button";
import Avatar from "@mui/material/Avatar";
import avatarImage from "../../assets/images/avatar.jpg";
import instaImage from "../../assets/images/instagram.png";

const Header = () => (
  <div className="header">
    <div className="button-wrapper">
      <a className="background-button" href="#" title="Moodly"></a>
    </div>
    <div className="copyright-follow">
      <a href="https://www.instagram.com/_puneetasnani/" target="_blank" rel="noreferrer" >
        <Button
          className="Button"
          style={{
            borderRadius: 5,
            background: "white",
            textTransform: "none",
            padding: 0,
            border: "0.5px solid #ccc",
          }}
        >
          <div className="Button__inner">
            <div className="avatar">
              <Avatar
                alt="@PuneetAsnani12"
                src={avatarImage}
                style={{ height: "30px", width: "30px" }}
              />
            </div>
            <div className="text">
              <div className="text__upper">By Puneet Asnani</div>
              <div className="text__lower">
                follow on instagram
                <img src={instaImage} alt="instagram"></img>
              </div>
            </div>
          </div>
        </Button>
      </a>
    </div>
  </div>
);

export default Header;
