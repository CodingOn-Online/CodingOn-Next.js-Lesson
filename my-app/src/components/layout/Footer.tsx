// src/components/layout/Footer.tsx

import styles from "@/styles/Layout.module.css";
import Link from "next/link";

export default function Footer() {
  return (
    <>
      <footer className={styles.footer}>
        <div>Github</div>
        <Link href="https://github.com/CodingOn-Online/Next.js-Lesson">
          https://github.com/CodingOn-Online/Next.js-Lesson
        </Link>
      </footer>
    </>
  );
}
