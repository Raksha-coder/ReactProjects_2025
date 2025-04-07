import { useState } from "react";

function ColorPicker() {
  const [color, setColor] = useState("#FFFFFF");

  const handleColorChange = (e) => {
    setColor(e.target.value);
  };

  return (
    <>
      <div>
        <h2>Pick a color</h2>
        <div
          className="display-color"
          style={{ backgroundColor: color, width: "200px", height: "200px" ,border:"2px solid black"}}
        >
          <p>Selected: {color} </p>
        </div>

        <div>
          <p>Pick a color</p>
          <input type="color" value={color} onChange={handleColorChange} />
        </div>
      </div>
    </>
  );
}

export default ColorPicker;
