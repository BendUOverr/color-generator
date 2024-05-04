import React, { useState } from "react";
import Values from "values.js";
import SingleColor from "./SingleColor";

function App() {
  const [error, setError] = useState(false);
  const [list, setList] = useState([]);
  const [color, setColor] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    try {
      let colors = new Values(color).all(10);
      setList(colors);
    } catch (error) {
      setError(true);
    }
  };

  return (
    <div>
      <div className="flex font-mono gap-5 items-center m-3">
        <h3 className="text-2xl">Color Generator</h3>
        <form onSubmit={handleSubmit} className="flex gap-3">
          <input
            type="text"
            value={color}
            onChange={(e) => setColor(e.target.value)}
            placeholder="#f15025"
            className={`${
              error ? "border-red-600 border-2" : "border-green-500 border-2"
            }`}
          />
          <button type="submit" className="p-1 bg-sky-500 rounded-lg">
            Submit
          </button>
        </form>
      </div>
      <div className="grid grid-cols-4 mt-10 sm:grid-cols-9">
        {list.map((color, index) => {
          return (
            <SingleColor
              key={index}
              {...color}
              index={index}
              hexColor={color.hex}
            />
          );
        })}
      </div>
    </div>
  );
}

export default App;
