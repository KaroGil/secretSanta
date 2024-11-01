import styles from '../../styles/Nav.module.css';
import Link from 'next/link';

export default function Nav() {
  return (
    <nav className={styles.nav}>
      <Link href="/" className={styles.link}>
        🎅
      </Link>
      <ul className={styles.ul}>
        <li className={styles.li}>
          <Link href="/picker" className={styles.link}>
            Picker
          </Link>
        </li>
        <li className={styles.li}>
          <Link href="/picks" className={styles.link}>
            Picks
          </Link>
        </li>
      </ul>
    </nav>
  );
}
