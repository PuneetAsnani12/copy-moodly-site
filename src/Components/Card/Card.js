import { useState,useEffect } from "react";
import Button from "@mui/material/Button";
import "./card.styles.scss";
import Slider from '@mui/material/Slider';
import { styled } from '@mui/material/styles';
import { VolumeDown, VolumeUp, VolumeOff, VolumeMute } from "@mui/icons-material";

const VolumeSlider = styled(Slider)({
  color: 'rgba(63, 81, 181, 1)',
  height: 3,
  '& .MuiSlider-track': {
    border: 'none',
  },
  '& .MuiSlider-thumb': {
    height: 12,
    width: 12,
    backgroundColor: 'rgba(63, 81, 181, 1)',
    border: '2px solid rgba(63, 81, 181, 1)',
    '&:focus, &:hover, &.Mui-active, &.Mui-focusVisible': {
      boxShadow: 'inherit',
    },
    '&:before': {
      display: 'none',
    },
  },
  '& .MuiSlider-valueLabel': {
    lineHeight: 1.2,
    fontSize: 12,
    background: 'unset',
    padding: 0,
    width: 32,
    height: 32,
    borderRadius: '50% 50% 50% 0',
    backgroundColor: 'rgba(63, 81, 181, 1)',
    transformOrigin: 'bottom left',
    transform: 'translate(50%, -100%) rotate(-45deg) scale(0)',
    '&:before': { display: 'none' },
    '&.MuiSlider-valueLabelOpen': {
      transform: 'translate(50%, -100%) rotate(-45deg) scale(1)',
    },
    '& > *': {
      transform: 'rotate(45deg)',
    },
  },
});

const Card = ({ title, Icon, sound, reRender, setReRender }) => {
  useEffect(() => {
    return
  }, [reRender])
  const [volume, setVolume] = useState(100)
  const _handleVolumeChange = (event, newVal) => {
    setVolume(newVal)
    document.getElementById(title).volume = newVal / 100;
  }

  return <div
    className="Card"
  >
    <Button
      className="Card__Button"
      style={{
        borderRadius: 20,
        background: "white",
        textTransform: "none",
        padding: 0,
      }}
    >
      <div id={`${title}-card`} className="Card__Button__gr">
        <div className="Card__ButtonInner"
          onClick={() => {
            if (!document.getElementById(title).paused) {
              document.getElementById(title).pause();
              setReRender(!reRender)
              document
                .querySelector(`#${title}-card`)
                .classList.remove(`gradient-animation`);
              return;
            }
            document
              .querySelector(`#${title}-card`)
              .classList.add(`gradient-animation`);
            document.getElementById(title).play();
            setReRender(!reRender);
          }}
        >
          <div
            style={{
              textAlign: "left",
              display: "flex",
              color: "black",
              textTransform: "capitalize",
              fontFamily: "Epilogue",
            }}
          >
            <h1>{title}</h1>
          </div>
          <div
            style={{
              display: "flex",
              height: 110,
              justifyContent: "center"
            }}
          >
            <div style={{ width: "60%", alignItems:"center",display:"flex" }}>
              <Icon></Icon>
            </div>
          </div>
          <audio id={title} preload="none" loop>
            <source src={sound} alt="play" type="audio/mp3" />
          </audio>
        </div>
        {document.getElementById(title) && !document.getElementById(title)?.paused ?
          <div className="Card__VolumeContainer">
            <VolumeSlider
              valueLabelDisplay="auto"
              aria-label="volume-slider"
              defaultValue={volume}
              onChange={_handleVolumeChange}
              style={{ width: 100 }}
            />
            {volume > 67 ? <VolumeUp sx={{ color: "rgba(63, 81, 181, 1)" }} /> : (volume <= 67 && volume > 33 ? <VolumeDown sx={{ color: "rgba(63, 81, 181, 1)" }} /> : (volume > 0 ? <VolumeMute sx={{ color: "rgba(63, 81, 181, 1)" }} /> : <VolumeOff sx={{ color: "rgba(63, 81, 181, 1)" }} />))}
          </div> : null}
      </div>
    </Button>
  </div>
};

export default Card;
