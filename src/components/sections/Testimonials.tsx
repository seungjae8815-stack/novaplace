"use client";
import styles from "./Testimonials.module.css";
import { motion } from "framer-motion";
import { Star } from "lucide-react";
import { useState, useEffect } from "react";

const reviews = [
  { id: 1, author: "강남 🥩고깃집 사장님", text: "매출 떨어져서 걱정이었는데 노바플레이스 관리 2달 만에 주말 웨이팅이 생겨서 알바생 2명 더 뽑았습니다. 정말 믿고 맡길 수 있습니다.", rating: 5 },
  { id: 2, author: "부산 💇미용실 사장님", text: "주변 미용실이 너무 많아서 항상 홍보가 안됐는데, 출처/반응도 점수 관리해주신 이후로 신규 고객이 31배 늘었습니다.", rating: 5 },
  { id: 3, author: "홍대 🍷와인바 사장님", text: "제가 매장 관리에만 집중하고 네이버는 노바가 다 알아서 해주시니 마음이 너무 편합니다! 예약율 상승 체감이 장난아니네요.", rating: 5 }
];

export default function Testimonials() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % reviews.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section id="testimonials" className={styles.section}>
      <div className={styles.container}>
        <motion.div 
          className={styles.header}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className={styles.title}>노바플레이스와 <br className={styles.mobileBr}/><span className={styles.highlight}>함께 걷는 사장님들</span></h2>
        </motion.div>

        <div className={styles.sliderContainer}>
          <motion.div 
            key={index}
            className={styles.reviewCard}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.5 }}
          >
            <div className={styles.stars}>
               {[...Array(reviews[index].rating)].map((_, i) => <Star key={i} size={18} fill="#fca311" color="#fca311"/>)}
            </div>
            <p className={styles.reviewText}>&quot;{reviews[index].text}&quot;</p>
            <div className={styles.author}>- {reviews[index].author}</div>
          </motion.div>
          <div className={styles.dots}>
            {reviews.map((_, i) => (
              <div key={i} className={`${styles.dot} ${i === index ? styles.activeDot : ''}`} onClick={() => setIndex(i)}/>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
