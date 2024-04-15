// src/components/component_and_layout/Introduce.tsx

import { CodingOnIntro } from "@/data/intro";
import Paragraph from "./Paragraph";

export default function Introduce() {
  return (
    <>
      <div className="introduce-codingon-container">
        {CodingOnIntro.map((data) => {
          return (
            <Paragraph key={`paragraph_${data.id}`} content={data.content} />
          );
        })}
      </div>
      <style jsx>{`
        .introduce-codingon-container {
          padding: 1px 0;
          background-color: antiquewhite;
        }
      `}</style>
    </>
  );
}
