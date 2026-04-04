"use client";

import { useState, useEffect } from "react";
import styles from "./Header.module.css";
import clsx from "clsx";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={clsx(styles.header, { [styles.scrolled]: scrolled })}>
      <div className={styles.container}>
        <div className={styles.logo}>
          <span className={styles.sparkle}>✨</span> NovaPlace
        </div>
        <nav className={styles.nav}>
          <a href="#hero">서비스 소개</a>
          <a href="#solution">핵심 전략</a>
          <a href="#process">진행과정</a>
          <a href="#metrics">성과지표</a>
          <a href="#cta" className={styles.ctaButton}>문의하기</a>
        </nav>
      </div>
    </header>
  );
}
