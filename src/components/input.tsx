import React, { useState } from "react";

export interface InputProps {
  color?: string;
};

const ColorPickerInput : React.FC<InputProps> = ({color = "3498db"}) => {
  const [iColor, setColor] = useState(color);
  return (
    <div className="flex flex-col items-center gap-4 mt-10">
      <input
      type="text"
      value={iColor}
      onChange={(e) => setColor(e.target.value)}
      placeholder="Put a color here"
      className="w-64 p-2 text-center border-2 border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      <div
      className="w-48 h-48 rounded-lg flex items-center justify-center text-white font-bold shadow-lg transition-all duration-300"
      style={{backgroundColor: iColor}}
      >
       <p>Color: {iColor}</p> 
      </div>
    </div>
  );
}

export default ColorPickerInput;
