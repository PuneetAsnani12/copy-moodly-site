import "./header.styles.scss";
import Button from "@mui/material/Button";
import Avatar from "@mui/material/Avatar";
import avatarImage from "../../assets/images/avatar.jpg";
import githubImage from "../../assets/images/github_icon.svg";

const Header = () => (
  <div className="header">
    <div class="container">
      <div class="box">
        <div class="title">
          <span class="block"></span>
          <h1>Inspiritely<span></span></h1>
        </div>
      </div>
    </div>
    <div className="copyright-follow" title="@PuneetAsnani12">
      <a href="https://github.com/PuneetAsnani12" target="_blank" rel="noreferrer" >
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
                follow on github
                <img src={githubImage} alt="github" height="15px" width="14px" style={{ marginLeft: 2 }}></img>
              </div>
            </div>
          </div>
        </Button>
      </a>
    </div>
  </div>
);

export default Header;
