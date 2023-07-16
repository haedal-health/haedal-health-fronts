import React from "react";
import { Link } from "react-router-dom";

import "../styles/NavBar.scss";
export default function NavBar() {
  const imgSrcLogo = "/img/NavBar-Logo.png";
  const imgSrcPurchase = "/img/NavBar-purchase.png";
  const imgSrcBookmark = "/img/NavBar-bookmark.png";
  const imgSrcSearch = "/img/search-icon.png";

  return (
    <nav className="NavBar-wrapper">
      <div className="NavBar-container">
        <div className="NavBar-Logo">
          <img src={process.env.PUBLIC_URL + imgSrcLogo} alt="" />
        </div>
        <div>
          <p className="NavBar-text">
            <span className="text1">해달헬스</span>
            <span className="text2">| 해달뷰티</span>
          </p>
        </div>

        <div className="NavBar-item">
          <div className="NavBar-search"></div>
          <div className="NavBar-search-icon">
            <img src={process.env.PUBLIC_URL + imgSrcSearch} alt="" />
          </div>

          <span className="NavBar-searchtext">검색어를 입력해주세요</span>
        </div>

        <div className="NavBar-bookmark ">
          <img src={process.env.PUBLIC_URL + imgSrcBookmark} alt="" />
        </div>
        <div className="NavBar-purchase">
          <img src={process.env.PUBLIC_URL + imgSrcPurchase} alt="" />
        </div>
        {/* <li>
          <Link to='/'>헬스</Link>
        </li>

        <li className="NavBar-item">
          <Link to='/'>Home</Link>
        </li>

        <li className="NavBar-item">
          <Link to='/'>About</Link>
        </li>

        <li className="NavBar-item">
          <Link to='/'>Posts</Link>
        </li> */}
      </div>

      <div className="NavBar-detail"></div>
    </nav>
  );
}
