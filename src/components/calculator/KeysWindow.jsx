import React from "react";

const KeysWindow = ({ handleButton }) => {
  const sciKeys = ["sin", "cos", "ln", "log", "tan", "π", "e", "^", "!", "√"];

  const basicKeys = [
    "7",
    "8",
    "9",
    "*",
    "/",
    "4",
    "5",
    "6",
    "-",
    "(",
    "1",
    "2",
    "3",
    "+",
    ")",
    ".",
    "0",
    "DEL",
    "AC",
    "=",
  ];

  return (
    <div className="bg-[rgb(41,41,41)] flex p-4 gap-4 sm:flex-col sm:gap-0">
      <div className="w-[30%] grid grid-cols-2 sm:w-full sm:grid-cols-5">
        {sciKeys.map((item, index) => (
          <button className="px-5 py-3 text-[1.3rem] text-white/50 rounded-[5px] hover:bg-white/20 cursor-pointer" key={index} onClick={() => handleButton(item)}>
            {item}
          </button>
        ))}
      </div>
      <div className="my-6 w-[2px] bg-white/10 sm:hidden"></div>
      <div className="flex-1 grid grid-cols-5 gap-2">
        {basicKeys.map((item, index) => (
          <button
            key={index}
            className={`${item >= "0" && item <= "9" ? "text-white rounded-[5px] font-semibold p-3 active:bg-gray-500 hover:bg-white/20" : ""}rounded-[5px] hover:bg-white/20 text-white ${
              item === "=" && "bg-[#fb9a40] text-[#000000]"
            }`}
            onClick={() => handleButton(item)}
          >
            {item}
          </button>
        ))}
      </div>
    </div>
  );
};

export default KeysWindow;