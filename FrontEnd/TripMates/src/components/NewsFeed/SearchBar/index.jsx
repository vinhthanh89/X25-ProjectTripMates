import { useState } from "react";
import { useNavigate } from "react-router";

const SearchBar = () => {
  const navigate = useNavigate();
  const [searchInput, setSearchInput] = useState("");

  const handleChangeSearchInput = (e) => {
    const value = e.target.value;
    setSearchInput(value);
  };

  const onClickSearch = () => {
    navigate(`/search?keyword=${searchInput}`);
    setSearchInput("");
  };

  return (
    <>
      <label className="input input-bordered flex items-center gap-2 bg-white w-[65%]">
        <input
          onChange={handleChangeSearchInput}
          value={searchInput}
          type="text"
          className="grow text-black font-semibold"
          placeholder="Search topic title ..."
        />
        <svg
          onClick={onClickSearch}
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 16 16"
          fill="black"
          className="w-4 h-4 opacity-70 cursor-pointer"
        >
          <path
            fillRule="evenodd"
            d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
            clipRule="evenodd"
          />
        </svg>
      </label>
    </>
  );
};
export default SearchBar;
