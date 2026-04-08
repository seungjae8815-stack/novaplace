"use client";
import styles from "./Solution.module.css";
import { motion } from "framer-motion";

export default function Solution() {
  return (
    <section id="solution" className={styles.section}>
      <div className={styles.container}>
        <motion.div 
          className={styles.header}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
        >
          <h2 className={styles.title}>
            내 플레이스 순위 상승의 비밀.<br/>
            <span className={styles.highlight}>반응도 점수</span>와 <span className={styles.highlight}>출처 점수</span>
          </h2>
          <p className={styles.subtitle}>
            네이버 알고리즘은 정확합니다. 체류시간, 유입량, 저장, 공유하기 등 <br className={styles.brDesktop}/>모든 지표를 관리해야만 순위가 상승합니다.
          </p>
        </motion.div>

        <div className={styles.processCards}>
          {[
            { id: 1, title: "콘텐츠 점수", desc: "사용자 검색의도 맞춤 / 속성태그 관리", icon: "📝" },
            { id: 2, title: "반응도 점수", desc: "검색 유입, 클릭수, 저장하기 증가", icon: "❤️" },
            { id: 3, title: "출처 점수", desc: "믿을 수 있는 출처, 체류시간 확보", icon: "🔍" }
          ].map((item, index) => (
            <motion.div 
              key={item.id}
              className={styles.pCard}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ delay: index * 0.2 }}
            >
              <div className={styles.icon}>{item.icon}</div>
              <h3>{item.title}</h3>
              <p>{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
      
      <div id="process" className={styles.processSection}>
        <div className={styles.container}>
           <motion.h2 
             className={styles.title}
             style={{ textAlign: 'center' }}
             initial={{ opacity: 0, y: 30 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true }}
           >
             노바플레이스는 <span className={styles.highlight}>이렇게 진행합니다!</span>
           </motion.h2>

           <div className={styles.stepTimeline}>
             {[
               { no: 1, title: "컨설턴트 상담", text: "현황 확인 및 진단" },
               { no: 2, title: "데이터 분석", text: "상권/경쟁사 타겟 파악" },
               { no: 3, title: "맞춤형 컨설팅", text: "최적화 전략 제시 및 조율" },
               { no: 4, title: "실행 & 보고서", text: "솔루션 적용 후 성과 보고" },
             ].map((step, idx) => (
               <motion.div 
                 key={step.no}
                 className={styles.stepItem}
                 initial={{ opacity: 0, x: -30 }}
                 whileInView={{ opacity: 1, x: 0 }}
                 viewport={{ once: true }}
                 transition={{ delay: idx * 0.2 }}
               >
                 <div className={styles.stepNum}>STEP 0{step.no}</div>
                 <h4>{step.title}</h4>
                 <p>{step.text}</p>
                 {idx !== 3 && <div className={styles.connector} />}
               </motion.div>
             ))}
           </div>
        </div>
      </div>
    </section>
  );
}
