import React, { useNavigate, useEffect, axios } from "react";
import { getCookie } from "./cookieUtils"; // Import the getCookie function

import "../styles/fonts.scss";
import "../styles/LoginComponent.scss";

export default function LoginComponents() {
  const imgSrcKakao = "/img/kakaobtn-img.png";
  const REST_API_KEY = "b5d91872e5fa2c8c0a684e8f5c696e16";
  // const REDIRECT_URI = "http://localhost:3000/kakaoLogin";
  const REDIRECT_URI = "http://localhost:8080/login/oauth2/code/kakao";
  const link = `https://kauth.kakao.com/oauth/authorize?client_id=${REST_API_KEY}&redirect_uri=${REDIRECT_URI}&response_type=code`;

  // const code = window.location.search; // code?=이상한코드가한가득
  const code = "b5d91872e5fa2c8c0a684e8f5c696e16";
  // const navigate = useNavigate();

  // useEffect(() => {
  //   console.log(process.env.REACT_APP_URL);
  //   axios.post(`${process.env.REACT_APP_URL}kakaoLogin${code}`).then((r) => {
  //     console.log(r.data);

  //     // 토큰을 받아서 localStorage같은 곳에 저장하는 코드를 여기에 쓴다.
  //     // localStorage.setItem("name", r.data.user_name); // 일단 이름만 저장했다.

  //     // navigate("/loginSuccess");
  //   });
  // }, []);

  const loginHandler = () => {
    window.location.href = link;
  };

  return (
    <div className="LoginComponents ReservationDetails-wrapper ">
      <span className="LoginComponents-title">해달 헬스</span>

      <div className="LoginComponents-groups">
        <span className="LoginComponents-text">이메일</span>
        <div className="LoginComponents-input">
          <span className="textGray">@naver.com</span>
        </div>

        <span className="LoginComponents-text">비밀번호</span>
        <div className="LoginComponents-input"></div>

        <div className="LoginComponents-checkbox"></div>
        <span className="LoginComponents-text">로그인 상태유지</span>
        <span className="LoginComponents-text">아이디/비밀번호 찾기</span>
      </div>

      <button className="LoginComponents-btn">로그인</button>

      <a href={link} className="LoginComponents-kakaobtn">
        <img src={process.env.PUBLIC_URL + imgSrcKakao} alt="" />
        카카오 계정으로 1초 로그인
      </a>

      <button type="button" onClick={loginHandler}>
        로그인 하기2
      </button>
    </div>
  );
}
