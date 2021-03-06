import React from "react";
function Search({handleInputChange}) {
  
  return (
    <form>
      <div className="form-group">
        <label htmlFor="search">Search:</label>
        <input
          onChange={ e => handleInputChange(e)}
          name="search"
          type="text"
          className="form-control"
          placeholder="Find an employee"
          id="search"
        />
        <br />
      </div>
    </form>
  );
}

export default Search