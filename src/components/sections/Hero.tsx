"use client";
import styles from "./Hero.module.css";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section id="hero" className={styles.heroSection}>
      <div className={styles.backgroundGlow} />
      <div className={styles.container}>
        <motion.div 
          className={styles.content}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className={styles.badge}>✨ 최신로직 적용 <span className={styles.desktopOnly}>프리미엄 </span>플레이스 최적화</div>
          <h1 className={styles.title}>
            사장님들은<br className={styles.desktopBr}/>
            <span className={styles.highlight}>장사에만 집중하세요!</span>
          </h1>
          <p className={styles.subtitle}>
            어려운 네이버 플레이스 로직, 노바플레이스가 모두 알아서 순위를 올려드립니다.<br className={styles.desktopBr}/>
            확실한 매출 상승을 경험해보세요.
          </p>
          <div className={styles.buttonGroup}>
            <a href="#cta" className={styles.primaryBtn}>무료 컨설팅 신청하기</a>
            <a href="#process" className={styles.secondaryBtn}>어떻게 진행되나요?</a>
          </div>
        </motion.div>
      </div>
      
      <div className={styles.scrollIndicator}>
        <span>SCROLL</span>
        <div className={styles.line}></div>
      </div>
    </section>
  );
}
