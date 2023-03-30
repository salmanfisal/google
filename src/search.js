import React, { useState,useRef,useEffect } from "react";
import "./search.css";
import SearchIcon from "@mui/icons-material/Search";
import MicIcon from "@mui/icons-material/Mic";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";
import { useStateValue } from "./stateprovider.js";
import { actionTypes } from "./reducer.js";
function Search({ hideButtons = false }) {
  const [input, setInput] = useState("");
  const [{ term }, dispatch] = useStateValue();
  const navigate = useNavigate();
  const Input = useRef();
  function searchHandler(e) {
    e.preventDefault();
    dispatch({
      type:actionTypes.SET_SEARCH_TERM,
      term : input
    })
    navigate("/search");
  }
  useEffect(()=>{
    Input.current.focus();
  },[Input])

  return (
    <form className="search">
      <div className="search_input">
        <SearchIcon className="search_inputIcon" />
        <input ref={Input} onChange={(e) => setInput(e.target.value)} 
 />
        <MicIcon />
      </div>
      { hideButtons ? (
        <div className="search_buttons">
          <Button type="submit" onClick={searchHandler} variant="outlined">
            Google Search
          </Button>
          <Button variant="outlined">I'm Feeling Lucky</Button>
        </div>
      ) : (
        <div className="search_buttons">
          <Button
            type="submit"
            className="searchButtonsHidden"
            onClick={searchHandler}
            variant="outlined"
          >
            Google Search
          </Button>
          <Button variant="outlined" className="searchButtonsHidden">
            I'm Feeling Lucky
          </Button>
        </div>
      )}
    </form>
  );
}

export default Search;
