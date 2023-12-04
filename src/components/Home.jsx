import React, { useEffect, useState } from "react";
import "../style/Home.css";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { Link } from "react-router-dom";
import SearchIcon from "@mui/icons-material/Search";
import "../style/Navbar.css";

const Home = () => {
  const [lists, setlists] = useState([]);
  const [search, setsearch] = useState("");

  useEffect(() => {
    fetch("https://api.punkapi.com/v2/beers")
      .then((data) => data.json())
      .then((result) => setlists(result));
  });

  return (
    <div>
      <div className="navbar">
        <div className="wrapper">
          <div className="search">
            <input
              type="text"
              placeholder="search"
              onChange={(e) => setsearch(e.target.value)}
            />
            <SearchIcon />
          </div>
          <div className="items">
            <Link to="/">
              {" "}
              <h4>
                Home<span className="span">Page</span>
              </h4>
            </Link>
          </div>
        </div>
      </div>
      <div className="lists">
        {lists
          .filter((list) => {
            return search.toLowerCase() === ""
              ? list
              : list.name.toLowerCase().includes(search);
          })
          .map((list) => (
            <div key={list.id}>
              <div className="box">
                <h5>{list.name}</h5>
                <h6>{list.tagline}</h6>
                <img className="images" src={list.image_url} alt="" />
              </div>
              <div className="details">
                <Link to={`/details/${list.id}`}>
                  <button className="button">
                    <div className="click">
                      details
                      <ArrowForwardIosIcon id="icon" />
                    </div>
                  </button>
                </Link>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default Home;
