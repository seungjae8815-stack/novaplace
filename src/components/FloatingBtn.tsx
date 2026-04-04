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
      <a href="#cta" className={styles.btn}>
        <div className={styles.iconBox}>
          <MessageCircle size={24} color="#000" />
        </div>
        <span className={styles.text}>무료 진단 받기</span>
      </a>
    </motion.div>
  );
}
