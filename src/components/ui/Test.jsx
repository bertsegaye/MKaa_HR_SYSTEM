import { useState } from "react";

function Test() {
  const [activeIndex, setIndex] = useState("");
  const content = [
    ["React is best prog lang"],
    ["React is best prog lang"],
    ["React is best prog lang"],
    ["React is best prog lang"],
  ];
  return (
    <div>
      <header>
        <img src="logo.png" alt="Logo image" />
        <div>
          <h1>React.jsx</h1>
          <p>i.e it is a popular prog-lang</p>
        </div>
      </header>
      <div>
        <menu>
          <button
            className={activeIndex === 0 ? "active" : ""}
            onClick={() => setIndex(0)}
          >
            Why React?
          </button>
          <button
            className={activeIndex === 1 ? "active" : ""}
            onClick={() => setIndex(1)}
          >
            React JS
          </button>
          <button
            className={activeIndex === 2 ? "active" : ""}
            onClick={() => setIndex(2)}
          >
            Core JS
          </button>
          <button
            className={activeIndex === 3 ? "active" : ""}
            onClick={() => setIndex(3)}
          >
            Channel
          </button>
        </menu>
        <div>
          <ul>
            {content[activeIndex].map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
export default Test;
