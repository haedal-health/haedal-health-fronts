import React from "react";

export default function Admin_createPass() {
  return (
    <>
      <div className="createPass-wrapper">
        <div className="createPass-container">
          <div className="createPass-item">
            <label className="createPass-item-text">이름</label>
            <input className="createPass"></input>
          </div>

          <button className="createPass-AddClientBtn"></button>

          <button className="createPass-createBtn"></button>
        </div>
      </div>
    </>
  );
}
