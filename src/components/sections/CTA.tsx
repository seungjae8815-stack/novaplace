"use client";
import styles from "./CTA.module.css";
import { motion } from "framer-motion";
import { useState } from "react";

export default function CTA() {
  const [formData, setFormData] = useState({ name: "", phone: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert(`제출 완료! 상호명: ${formData.name}, 연락처: ${formData.phone}\n빠른 시일 내에 연락드리겠습니다.`);
    setFormData({ name: "", phone: "" });
  };

  return (
    <section id="cta" className={styles.section}>
      <div className={styles.container}>
        <motion.div 
          className={styles.glassBox}
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
        >
          <h2>이제 최적화는 <br className={styles.mobileBr}/> 선택이 아닌 <br className={styles.mobileBr}/> <span>필수</span>입니다.</h2>
          <p>수많은 상위 노출 사례가 증명하는 노바플레이스와 함께 매출 상승을 경험하세요.</p>
          
          <form className={styles.formContainer} onSubmit={handleSubmit}>
            <div className={styles.inputGroup}>
              <input 
                type="text" 
                placeholder="상호명을 입력해주세요" 
                required 
                value={formData.name}
                onChange={(e) => setFormData({...formData, name: e.target.value})}
              />
              <input 
                type="tel" 
                placeholder="연락처를 입력해주세요" 
                required 
                value={formData.phone}
                onChange={(e) => setFormData({...formData, phone: e.target.value})}
              />
              <button type="submit" className={styles.submitBtn}>
                무료 진단 신청하기
              </button>
            </div>
            <p className={styles.formNote}>* 남겨주신 정보는 무료 진단 목적으로만 사용됩니다.</p>
          </form>

          <div className={styles.phoneBox}>
            <span className={styles.label}>빠른 문의 (평일 10:00 - 18:00)</span>
            <strong className={styles.number}>1588-0000</strong>
          </div>

        </motion.div>
      </div>
    </section>
  );
}
