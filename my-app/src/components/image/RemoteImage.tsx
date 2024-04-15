// src/components/image/RemoteImage.tsx

import Image from "next/image";

export default function RemoteImage() {
  const src =
    "https://d2iwdqgro8i2ew.cloudfront.net/codingon/lesson/lesson/nextjs/5_imagetag.png";
  return (
    <>
      <Image src={src} alt="코딩오울_1" width={120} height={100} />
      <div style={{ position: "relative", width: "500px", height: "300px" }}>
        <Image src={src} alt="코딩오울_2" fill={true} />
      </div>
    </>
  );
}
