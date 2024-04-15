// src/pages/images.tsx

import LocalImage from "@/components/image/LocalImage";
import RemoteImage from "@/components/image/RemoteImage";
import Layout from "@/components/layout/Layout";

export default function ImagePage() {
  return (
    <>
      <Layout>
        <LocalImage />
        <br />
        <RemoteImage />
      </Layout>
    </>
  );
}
