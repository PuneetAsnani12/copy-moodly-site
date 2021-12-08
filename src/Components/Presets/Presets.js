import Button from "@mui/material/Button";
import "./presets.style.scss";
import ShuffleIcon from "@mui/icons-material/Shuffle";

let previousNum = undefined;

const _handlePreset = (presets) => {
  document.querySelectorAll(`.gradient-animation`).forEach((eachElem) => {
    eachElem.classList.remove(`gradient-animation`);
    document.getElementById(eachElem.id.split("-")[0]).pause();
  });

  presets.forEach((preset) => {
    document
      .querySelector(`#${preset}-card`)
      .classList.add(`gradient-animation`);
    document.getElementById(preset).play();
  });
};

const generateRandomSound = () => {
  const soundArray = [
    ["lightning", "farm", "steps"],
    ["rain", "keyboard", "clock"],
    ["leaves", "keyboard", "clock"],
    ["campfire", "rowing", "steps"],
    ["campfire", "wind", "farm"],
    ["leaves", "cafe", "night"],
    ["rain", "snow", "clock"],
  ];
  let index = Math.floor(Math.random() * 10) % 7;
  if (previousNum !== undefined && index === previousNum) {
    if (!index) {
      index = index + 1;
    } else if (index + 1 > 6) {
      index = index - 1;
    } else {
      index = index - 1;
    }
  }
  previousNum = index;
  return soundArray[index];
};

const Presets = () => (
  <div className="presets-container">
    <div className="definite-presets">
      <Button
        className="Button"
        style={{
          borderRadius: 13,
          background: "white",
          textTransform: "none",
          padding: 0,
        }}
        onClick={() => {
          _handlePreset(["campfire", "rowing", "library"]);
        }}
      >
        <div
          style={{
            paddingInline: 20,
            paddingBlock: 5,
            border: "1px solid rgba(63,81,181,1)",
            borderRadius: 13,
            color: "rgba(63,81,181,1)",
            fontFamily: "Epilogue",
            fontSize: "18px",
          }}
        >
          Productivity
        </div>
      </Button>
      <Button
        className="Button"
        style={{
          borderRadius: 13,
          background: "white",
          textTransform: "none",
          padding: 0,
        }}
        onClick={() => {
          _handlePreset(["wind", "birds", "farm"]);
        }}
      >
        <div
          style={{
            paddingInline: 20,
            paddingBlock: 5,
            border: "1px solid rgba(63,81,181,1)",
            borderRadius: 13,
            color: "rgba(63,81,181,1)",
            fontFamily: "Epilogue",
            fontSize: "18px",
          }}
        >
          Focus
        </div>
      </Button>
      <Button
        className="Button"
        style={{
          borderRadius: 13,
          background: "white",
          textTransform: "none",
          padding: 0,
        }}
        onClick={() => {
          _handlePreset(["leaves", "library", "train"]);
        }}
      >
        <div
          style={{
            paddingInline: 20,
            paddingBlock: 5,
            border: "1px solid rgba(63,81,181,1)",
            borderRadius: 13,
            color: "rgba(63,81,181,1)",
            fontFamily: "Epilogue",
            fontSize: "18px",
          }}
        >
          Relax
        </div>
      </Button>
    </div>
    <div className="random-presets">
      <Button
        className="Button"
        style={{
          borderRadius: "50%",
          background: "white",
          textTransform: "none",
          padding: 0,
          minWidth: "unset",
        }}
        onClick={() => {
          _handlePreset(generateRandomSound());
        }}
      >
        <div
          style={{
            border: "1px solid rgba(63,81,181,1)",
            borderRadius: "50%",
            color: "rgba(63,81,181,1)",
            fontFamily: "Epilogue",
            fontSize: "18px",
            height: "50px",
            width: "50px",
            justifyContent: "center",
            alignItems: "center",
            display: "flex",
          }}
        >
          <ShuffleIcon sx={{ color: "rgba(63,81,181,1)" }} />
        </div>
      </Button>
    </div>
  </div>
);

export default Presets;
