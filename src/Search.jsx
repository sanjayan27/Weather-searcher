import React from "react";
import { IoSearchSharp } from "react-icons/io5";

const Search = ({
  fetchingWheather,
  city,
  setCity,
  handleSubmit,
  inputRef,
}) => {
  const btn = document.getElementById("input");
  const handleKeyBtn = (e) => {
    if (e.key === "Enter") {
      fetchingWheather();
    }
  };

  return (
    <section className="section-search">
      <form action="" onSubmit={handleSubmit} className="form-search">
        {/* <label htmlFor="" className='label-search'>Search your city</label> */}
        <input
          autoFocus
          ref={inputRef}
          type="text"
          placeholder="Enter your city"
          className="input"
          id="input"
          value={city}
          onChange={(e) => setCity(e.target.value)}
          onKeyDown={handleKeyBtn}
        />
        <button onClick={fetchingWheather} className="btn-search">
          <IoSearchSharp />
        </button>
      </form>
    </section>
  );
};

export default Search;
