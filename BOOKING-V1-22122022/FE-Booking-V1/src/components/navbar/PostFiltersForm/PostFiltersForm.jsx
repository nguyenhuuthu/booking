import React from "react";
import PropTypes from "prop-types";
import { useState, useRef } from "react";
PostFiltersForm.propType = {
  onSubmit: PropTypes.func,
};
PostFiltersForm.defaultProps = {
  onSubmit: null,
};
function PostFiltersForm(props) {
  const { onSubmit } = props;
  const [searchTerm, setSearchTerm] = useState("");
  const typingTimeoutRef = useRef(null);

  function handleSearchTermChange(e) {
    const value = e.target.value;
    setSearchTerm(e.target.value);
    if (typingTimeoutRef.current) {
      clearTimeout(typingTimeoutRef.current);
    }
    if (!onSubmit) return;
    typingTimeoutRef.current = setTimeout(() => {
      const formValues = { searchTerm: value };
      onSubmit(formValues);
    }, 300);
  }
  return (
    <>
      <div className="search-input">
        {" "}
        <input
          style={{
            width: "90%",
            borderRadius: "20px",
            height: "40px",
            paddingLeft: "10px",
          }}
          className=""
          type="text"
          placeholder="Search"
          value={searchTerm}
          onChange={handleSearchTermChange}
        />
      </div>
    </>
  );
}

export default PostFiltersForm;
