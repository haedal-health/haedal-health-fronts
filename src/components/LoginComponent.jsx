import React from "react";

import "../styles/fonts.scss";
import "../styles/LoginComponent.scss";

export default function LoginComponents() {
  const imgSrcKakao = "/img/kakaobtn-img.png";

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
      <button className="LoginComponents-kakaobtn">
        <img src={process.env.PUBLIC_URL + imgSrcKakao} alt="" />
        카카오 계정으로 1초 로그인
      </button>
    </div>
  );
}
