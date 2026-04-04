"use client";
import styles from "./FAQ.module.css";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  { q: "혹시 불법 매크로나 어뷰징을 사용하시나요?", a: "절대 아닙니다. 노바플레이스는 네이버의 공식 로직을 준수하며, 순수 마케팅 기법과 반응도 증대 전략만을 사용하여 상위 노출을 안전하게 관리합니다." },
  { q: "효과가 나타나는 데 얼마나 걸리나요?", a: "업종과 지역별 키워드 난이도에 따라 다르지만, 당사 데이터를 기준으로 평균 2주~4주 이내에 유의미한 순위 상승 효과를 확인하실 수 있습니다." },
  { q: "네이버 아이디나 관리자 권한을 전부 넘겨줘야 하나요?", a: "아닙니다. 최소한의 통계 조회를 위한 권한만 매니저 등급으로 요청드리며, 원본 계정의 중요한 개인정보나 영업 데이터는 철저히 사장님께서만 관리하게 됩니다." },
  { q: "이미 다른 대행사에 맡기고 있는데 전혀 효과가 없습니다.", a: "기존 업체의 방식(단순 리워드 영수증 방문 등)은 한계가 명확하며 오히려 어뷰징 패널티를 받을 수 있습니다. 노바플레이스는 콘텐츠, 반응도, 출처 점수를 종합적으로 관리하여 근본적인 플레이스 체질을 개선합니다." },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className={styles.section}>
      <div className={styles.container}>
        <motion.div 
          className={styles.header}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className={styles.title}>자주 묻는 질문</h2>
          <p className={styles.subtitle}>대행사 선정 시 많은 사장님들이 고민하시는 부분, 투명하게 답변드립니다.</p>
        </motion.div>

        <div className={styles.faqList}>
          {faqs.map((faq, idx) => (
            <motion.div 
              key={idx}
              className={styles.faqItem}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
            >
              <button className={styles.question} onClick={() => toggleFAQ(idx)}>
                <span>{faq.q}</span>
                <motion.div
                  animate={{ rotate: openIndex === idx ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <ChevronDown size={20} color="var(--primary-color)"/>
                </motion.div>
              </button>
              <AnimatePresence>
                {openIndex === idx && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    className={styles.answer}
                  >
                    <p>{faq.a}</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
