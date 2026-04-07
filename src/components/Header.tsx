"use client";

import { useState, useEffect } from "react";
import styles from "./Header.module.css";
import clsx from "clsx";
import { Menu, X } from "lucide-react";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => setMenuOpen(!menuOpen);
  const closeMenu = () => setMenuOpen(false);

  return (
    <header className={clsx(styles.header, { [styles.scrolled]: scrolled })}>
      <div className={styles.container}>
        <div className={styles.logo}>
          <span className={styles.sparkle}>✨</span> NovaPlace
        </div>
        
        {/* Desktop Nav */}
        <nav className={styles.nav}>
          <a href="#hero">서비스 소개</a>
          <a href="#solution">핵심 전략</a>
          <a href="#process">진행과정</a>
          <a href="#metrics">성과지표</a>
          <a href="#cta" className={styles.ctaButton}>문의하기</a>
        </nav>

        {/* Mobile Menu Button */}
        <button className={styles.mobileMenuBtn} onClick={toggleMenu} aria-label="Toggle menu">
          {menuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Nav */}
      {menuOpen && (
        <div className={styles.mobileNav}>
          <a href="#hero" onClick={closeMenu}>서비스 소개</a>
          <a href="#solution" onClick={closeMenu}>핵심 전략</a>
          <a href="#process" onClick={closeMenu}>진행과정</a>
          <a href="#metrics" onClick={closeMenu}>성과지표</a>
          <a href="#cta" className={styles.mobileCtaButton} onClick={closeMenu}>문의하기</a>
        </div>
      )}
    </header>
  );
}
