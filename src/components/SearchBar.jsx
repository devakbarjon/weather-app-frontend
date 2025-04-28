import React, { useState } from "react";

export default function SearchBar({ setCity }) {
  const [input, setInput] = useState("");

  const handleSearch = () => {
    if (input.trim()) {
      setCity(input.trim());
      setInput("");
    }
  };

  return (
    <div className="input-group mb-3 location-search">
      <input
        type="text"
        className="form-control"
        placeholder="Enter the city"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button className="btn btn-primary" type="button" onClick={handleSearch}>
        Search
      </button>
    </div>
  );
}