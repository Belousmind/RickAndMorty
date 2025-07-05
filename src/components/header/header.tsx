import Link from 'next/link';
import styles from './header.module.scss';
import { NAVIGATION_DATA } from '@/constants';

export default function Header() {
  return (
    <header>
      <nav>
        <ul className={styles['nav-list']}>
          {NAVIGATION_DATA.map((item, index) => (
            <Link key={index} href={item.link} className={styles.link}>
              {item.label}
            </Link>
          ))}
        </ul>
      </nav>
    </header>
  );
}
