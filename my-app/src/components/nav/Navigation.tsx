// src/components/nav/Navigation.tsx

import Link from "next/link";

export default function Navigation() {
  return (
    <>
      <div className="nav">
        <Link href="/nav">
          <div>Home</div>
        </Link>
        <Link href="/nav/skill" replace={true}>
          <div>Skill</div>
        </Link>
      </div>
      <div className="mypage">
        <Link href="/nav/about" as="/nav">
          <div>About</div>
        </Link>
        <Link href="/nav/mypage" scroll={false}>
          <div>Mypage</div>
        </Link>
      </div>
      <style jsx global>
        {`
          a {
            color: inherit;
            text-decoration: none;
            font-size: 20px;
          }
          a:hover {
            color: inherit;
          }
          .nav {
            display: flex;
            gap: 50px;
            background-color: rgb(255, 251, 226);
            padding: 20px 50px;
          }
          .mypage {
            position: fixed;
            bottom: 50px;
            right: 50px;
          }
          .mypage div {
            margin-top: 20px;
            text-align: center;
            padding: 10px 20px;
            border: 3px solid rgb(255, 164, 37);
            border-radius: 30px;
          }
        `}
      </style>
    </>
  );
}
