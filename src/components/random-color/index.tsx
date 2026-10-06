import { useState } from "react";

type TColor = "hex" | "rgb";

const RandomColor = () => {
  const [colorType, setColorType] = useState<TColor>("hex");
  const [color, setColor] = useState<string>("#000000");

  const randomColorUtil = (val: number) => {
    return Math.floor(Math.random() * val);
  };

  const handleHexRandom = () => {
    const hex = "01234567890ABCDEF";

    let hexcolor = "#";
    for (let i = 0; i < 6; i++) {
      hexcolor += hex[randomColorUtil(16)];
    }

    return hexcolor;
  };

  const handleRgbRandom = () => {
    const r = randomColorUtil(256);
    const g = randomColorUtil(256);
    const b = randomColorUtil(256);

    return `rgb(${r},${g},${b})`;
  };

  const generateColor = () => {
    const newColor =
      colorType === "hex" ? handleHexRandom() : handleRgbRandom();

    setColor(newColor);
  };

  const handleCOlorTypeChange = (type: "hex" | "rgb") => {
    setColorType(type);

    const newColor = type === "hex" ? handleHexRandom() : handleRgbRandom();

    setColor(newColor);
  };

  return (
    <>
      <div
        style={{
          width: "100vw",
          height: "100vw",
          background: color,
        }}
      >
        <div className="flex items-center justify-center gap-1.5">
          <button onClick={() => handleCOlorTypeChange("hex")}>
            Create Hex Color
          </button>
          <button onClick={() => handleCOlorTypeChange("rgb")}>
            Create RGB
          </button>
          <button onClick={generateColor}>Generate random color</button>
        </div>
        <div className="flex items-center justify-center h-56 font-bold text-4xl">
          {color}
        </div>
      </div>
    </>
  );
};

export default RandomColor;
