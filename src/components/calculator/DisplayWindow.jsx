import React from "react";

const DisplayWindow = ({ expression, result }) => {
  return (
    <div className="bg-[rgb(20,20,20)] flex flex-col items-end justify-end p-4 h-[120px]">
      <p className="w-full overflow-x-auto text-right text-white font-semibold [scrollbar-width:none]">{expression}</p>
      <p className="text-[2.2rem] text-white font-semibold">{result}</p>
    </div>
  );
};

export default DisplayWindow;