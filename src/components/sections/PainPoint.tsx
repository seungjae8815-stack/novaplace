"use client";
import styles from "./PainPoint.module.css";
import { motion } from "framer-motion";
import { Search, Star, MessageSquare } from "lucide-react";

export default function PainPoint() {
  return (
    <section id="painpoint" className={styles.section}>
      <div className={styles.container}>
        <motion.div 
          className={styles.header}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
        >
          <h2 className={styles.title}>
            매일 내 플레이스보다 앞서던 옆집...<br className={styles.desktopBr}/>
            <span className={styles.highlight}>&quot;대체 뭘 한거지?&quot;</span>
          </h2>
          <p className={styles.subtitle}>
            사장님만 모르는 상위 1% 업체의 비밀, 지금부터 노바플레이스가 전부 알려드립니다.
          </p>
        </motion.div>

        <div className={styles.comparisonGrid}>
          <motion.div 
            className={styles.badCard}
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className={styles.cardHeader}>관리가 안 된 우리 가게</div>
            <div className={styles.searchMockup}>
              <div className={styles.mockupTitle}>우리동네 맛집</div>
              <div className={styles.mockupStats}>
                <span className={styles.grayText}>방문자 리뷰 1</span>
                <span className={styles.grayText}>블로그 리뷰 0</span>
              </div>
              <div className={styles.sadFace}>왜... 아무도 찾아주지 않는걸까 ㅠㅠ</div>
            </div>
          </motion.div>

          <motion.div 
            className={styles.goodCard}
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
             <div className={styles.cardHeader}>승승장구하는 옆집</div>
             <div className={styles.searchMockupHighlight}>
              <div className={styles.mockupTitleHighlight}>스테이크, 립</div>
              <div className={styles.mockupStatsHighlight}>
                <span className={styles.star}><Star size={14} fill="currentColor" /> 4.58</span>
                <span>방문자 리뷰 3,173</span>
                <span>블로그 리뷰 2,882</span>
              </div>
              <div className={styles.mockupDesc}>맛있는 스테이크와 즐거움이 있는 곳</div>
              <div className={styles.actionButtons}>
                 <button><Search size={14}/> 길찾기</button>
                 <button className={styles.reserveBtn}><MessageSquare size={14}/> 예약</button>
              </div>
            </div>
          </motion.div>
        </div>

        <motion.div 
          className={styles.conclusion}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <h3>미뤘던 플레이스 관리, 지금 당장 시작해야 할 때!</h3>
          <p>이제 네이버 플레이스 최적화는 선택이 아닌 <strong className={styles.highlightText}>필수</strong> 입니다.</p>
        </motion.div>
      </div>
    </section>
  );
}
