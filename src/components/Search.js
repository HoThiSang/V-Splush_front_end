import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Search = () => {
  const [keyword, setKeyword] = useState("");
  const navigate = useNavigate();

  const handleSearch = async () => {
    try {
      const response = await axios.get(
        `http://127.0.0.1:8000/api/search-product/${keyword}`
      );
      const searchData = response.data;
      console.log(searchData);
      navigate(`/products?keyword=${keyword}`);
    } catch (error) {
      console.error("Error searching products:", error);
    }
  };
  return (
    <>
      <input
        className="search-field"
        name="keyword_submitted"
        type="text"
        placeholder="Search here..."
        value={keyword}
        onChange={(e) => setKeyword(e.target.value)}
      />
      <button className="search-button" onClick={handleSearch}>
        Search
      </button>
    </>
  );
};
export default Search;
