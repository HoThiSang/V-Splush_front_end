import React, { useState } from "react";
import axiosService from "../services/configAxios";
import { useNavigate } from "react-router-dom";

const Search = () => {
  const [keyword, setKeyword] = useState("");
  const navigate = useNavigate();

  const handleSearch = async () => {
    try {
      const response = await axiosService.get(
        `/search-product/${keyword}`
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
      </button>
    </>
  );
};
export default Search;
