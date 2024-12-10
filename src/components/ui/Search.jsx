import { searchSvg } from "../../assets/icons";

function Search({ bgColor = "none", border = "none" }) {
  return (
    <div
      className="p-2 flex items-center justify-center"
      style={{ backgroundColor: bgColor, border }}
    >
      <button>
        <img src={searchSvg} alt="search icon" />
      </button>
      <div>
        <input
          className="ml-4 appearance-none border-none focus:outline-none focus:ring-0 bg-transparent text-slate-lght placeholder:font-normal placeholder:text-slate-lght text-lg"
          placeholder="Search..."
        />
      </div>
    </div>
  );
}

export default Search;
