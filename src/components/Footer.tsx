import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.top}>
          <div className={styles.info}>
            <h2 className={styles.logo}>NovaPlace</h2>
            <p className={styles.desc}>사장님들은 장사에만 집중하세요!<br/>네이버 플레이스 최적화는 노바플레이스가 책임집니다.</p>
          </div>
          <div className={styles.contact}>
            <h3>무료 컨설팅 문의</h3>
            <p>1588-0000</p>
            <p>help@novaplace.kr</p>
            <p>평일 10:00 - 18:00 (주말/공휴일 휴무)</p>
          </div>
        </div>
        <div className={styles.bottom}>
          <p>&copy; 2026 NovaPlace. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
