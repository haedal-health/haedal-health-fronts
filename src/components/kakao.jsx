import React from "react";
import { KakaoLoginButton } from "kakao-sdk"; // Assuming you have imported the KakaoLoginButton component from the Kakao SDK
import { getCookie } from "./cookieUtils"; // Import the getCookie function

const KakaoLoginComponent = () => {
  const handleKakaoLogin = async () => {
    try {
      const accessToken = getCookie("Kakao_AccessToken");
      // Use the access token for further API calls or authentication logic
      console.log("Kakao Access Token:", accessToken);
    } catch (error) {
      console.error("Error occurred during Kakao login:", error);
    }
  };

  return (
    <div>
      {/* Your other components */}
      <KakaoLoginButton onSuccess={handleKakaoLogin} />
    </div>
  );
};

export default KakaoLoginComponent;
