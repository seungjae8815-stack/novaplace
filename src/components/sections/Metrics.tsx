"use client";
import styles from "./Metrics.module.css";
import { motion, useInView, useMotionValue, useTransform, animate } from "framer-motion";
import { useEffect, useRef } from "react";

function Counter({ from = 0, to = 100, suffix = "" }) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const count = useMotionValue(from);
  const rounded = useTransform(count, (latest) => Math.round(latest) + suffix);

  useEffect(() => {
    if (isInView) {
      animate(count, to, { duration: 2.5, ease: "easeOut" });
    }
  }, [count, isInView, to]);

  return <motion.span ref={ref}>{rounded}</motion.span>;
}

export default function Metrics() {
  return (
    <section id="metrics" className={styles.section}>
      <div className={styles.container}>
        <motion.div 
          className={styles.header}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className={styles.title}>
            결과는 <span className={styles.highlight}>숫자</span>로 증명합니다
          </h2>
          <p className={styles.subtitle}>
            수많은 리뷰와 데이터가 증명하는 노바플레이스의 압도적인 성과를 확인하세요.
          </p>
        </motion.div>

        <div className={styles.statsGrid}>
          <motion.div 
            className={styles.statCard}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <div className={styles.statIcon}>🚀</div>
            <div className={styles.statValue}>
               <Counter from={0} to={1600} suffix="%" />
            </div>
            <p className={styles.statDesc}>관리 3개월 후 평균 예약 증가율</p>
          </motion.div>
          <motion.div 
            className={styles.statCard}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
          >
            <div className={styles.statIcon}>👥</div>
            <div className={styles.statValue}>
               <Counter from={0} to={116} suffix="명" />
            </div>
            <p className={styles.statDesc}>사진 리뷰 100개 당 평균 방문자 증가</p>
          </motion.div>
          <motion.div 
            className={styles.statCard}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6 }}
          >
            <div className={styles.statIcon}>📈</div>
            <div className={styles.statValue}>
               <Counter from={0} to={31} suffix="배" />
            </div>
            <p className={styles.statDesc}>뷰티/미용 업종 관리 후 최다 상승폭</p>
          </motion.div>
        </div>

      </div>
    </section>
  );
}
