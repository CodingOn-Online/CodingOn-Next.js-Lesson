// src/components/image/LocalImage.tsx

import Image from "next/image";
import codingowl from "../../../public/codingowl.png";

export default function LocalImage() {
  return (
    <>
      <Image src={codingowl} alt="코딩오울" placeholder="blur" />
      <Image src={codingowl} alt="코딩오울 100px" width={100} height={100} />
    </>
  );
}
