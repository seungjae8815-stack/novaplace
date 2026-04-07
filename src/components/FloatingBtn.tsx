"use client";
import { MessageCircle } from "lucide-react";
import styles from "./FloatingBtn.module.css";
import { motion } from "framer-motion";

export default function FloatingBtn() {
  return (
    <motion.div 
      className={styles.floatingContainer}
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 1 }}
    >
      <a href="http://pf.kakao.com/_eNxguX/chat" target="_blank" rel="noopener noreferrer" className={styles.btn}>
        <div className={styles.iconBox}>
          <MessageCircle size={24} color="#3A1D1D" strokeWidth={2.5} />
        </div>
        <span className={styles.text}>카카오톡 상담하기</span>
      </a>
    </motion.div>
  );
}
