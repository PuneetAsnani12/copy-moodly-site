import Button from "@mui/material/Button";
import "./presets.style.scss";
import ShuffleIcon from '@mui/icons-material/Shuffle';
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
          minWidth:"unset"
        }}
      >
        <div
          style={{
            border: "1px solid rgba(63,81,181,1)",
            borderRadius: "50%",
            color: "rgba(63,81,181,1)",
            fontFamily: "Epilogue",
            fontSize: "18px",
            height:"50px",
            width:"50px",
            justifyContent:"center",
            alignItems:"center",
            display:"flex"
          }}
        >
            <ShuffleIcon sx={{ color: "rgba(63,81,181,1)" }} />

        </div>
      </Button>
    </div>
  </div>
);

export default Presets;
