import React, { useState } from "react";
import "../styles/admin_createPass.scss";

export default function Admin_createPass() {
  const [name, setName] = useState([]);

  return (
    <>
      <div className="createPass-wrapper">
        <div className="createPass-container">
          <div className="createPass-items">
            <label className="createPass-item-text">이름</label>
            <input
              className="createPass-item"
              type="text"
              value={name}
              onChange={(e) => {
                setName(e.target.value);
                console.log("변경:", e.target.value);
              }}
            />
            <label className="createPass-item-text">횟수</label>
            <input
              className="createPass-item"
              type="text"
              value={name}
              onChange={(e) => {
                setName(e.target.value);
                console.log("변경:", e.target.value);
              }}
            />
            <label className="createPass-item-text">시작 날짜</label>
            <input
              className="createPass-item"
              type="text"
              value={name}
              onChange={(e) => {
                setName(e.target.value);
                console.log("변경:", e.target.value);
              }}
            />
            <label className="createPass-item-text">만료 날짜</label>
            <input
              className="createPass-item"
              type="text"
              value={name}
              onChange={(e) => {
                setName(e.target.value);
                console.log("변경:", e.target.value);
              }}
            />

            <label className="createPass-item-text">가격</label>
            <input
              className="createPass-item"
              type="text"
              value={name}
              onChange={(e) => {
                setName(e.target.value);
                console.log("변경:", e.target.value);
              }}
            />

            <label className="createPass-item-text">수강중인 고객</label>
            <input
              className="createPass-item"
              type="text"
              value={name}
              onChange={(e) => {
                setName(e.target.value);
                console.log("변경:", e.target.value);
              }}
            />
          </div>
          <button className="createPass-AddClientBtn">고객 추가</button>

          <button className="createPass-createBtn">생성</button>
        </div>
      </div>
    </>
  );
}
