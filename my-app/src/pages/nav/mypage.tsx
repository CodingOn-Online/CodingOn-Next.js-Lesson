// src/pages/nav/mypage.tsx

import Navigation from "@/components/nav/Navigation";

export default function NavMypagePage() {
  return (
    <>
      <Navigation />
      <h1
        style={{
          textAlign: "center",
          marginTop: "200px",
          marginBottom: "500px",
        }}
      >
        Mypage 화면 입니다.
      </h1>
    </>
  );
}
