import React from "react";

interface BoxProp {
  children: React.ReactNode;
}

const Box: React.FC<BoxProp> = ({ children }) => (
  <div className="border-2 border-gray-300 p-4 rounded m-2 bg-red-200 tracking-wide">
    {children}
  </div>
);

export default Box;
