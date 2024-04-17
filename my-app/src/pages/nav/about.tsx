// src/pages/nav/about.tsx

import Navigation from "@/components/nav/Navigation";

export default function NavAboutPage() {
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
        About 화면 입니다.
      </h1>
    </>
  );
}
