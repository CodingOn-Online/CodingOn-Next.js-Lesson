// src/pages/nav/index.tsx

import Navigation from "@/components/nav/Navigation";

export default function NavIndexPage() {
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
        Home 화면입니다.
      </h1>
    </>
  );
}
