// src/components/component_and_layout/Introduce.tsx

import { CodingOnIntro } from "@/data/intro";
import Paragraph from "./Paragraph";

export default function Introduce() {
  return (
    <>
      {CodingOnIntro.map((data) => {
        return (
          <Paragraph key={`paragraph_${data.id}`} content={data.content} />
        );
      })}
    </>
  );
}
