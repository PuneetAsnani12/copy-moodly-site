import Button from "@mui/material/Button";
import "./card.styles.scss";

const Card = ({ title, Icon, sound }) => (
  <div className="Card">
    <Button
      onClick={() => {
        if (!document.getElementById(title).paused) {
          document.getElementById(title).pause();
          document
            .querySelector(`#${title}-card`)
            .classList.remove(`gradient-animation`);
          return;
        }
        document
          .querySelector(`#${title}-card`)
          .classList.add(`gradient-animation`);
        document.getElementById(title).play();
      }}
      className="Card__Button"
      style={{ borderRadius: 20, background: "white", textTransform: "none",padding:0 }}
    >
      <div id={`${title}-card`} className="Card__Button__gr">
        <div className="Card__ButtonInner">
          <div
            style={{
              textAlign: "left",
              display: "flex",
              color: "black",
              textTransform: "capitalize",
            }}
          >
            {title}
          </div>
          <div
            style={{
              display: "flex",
              flex: 1,
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <div style={{ width: "60%", height: "60%" }}>
              <Icon></Icon>
            </div>
          </div>
          <audio id={title} preload="none" loop>
            <source src={sound} alt="play" type="audio/mp3" />
          </audio>
        </div>
      </div>
    </Button>
  </div>
);

export default Card;
