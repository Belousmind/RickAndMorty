import Link from "next/link";
import styles from './header.module.scss'

const Header = () => {
  return (
    <header>
      <nav>
        <ul className={styles['nav-list']}>
          <li>
            <Link href="/">home</Link>
          </li>
          <li>
            <Link href="/characters">characters</Link>
          </li>
          <li>
            <Link href="/episodes">episodes</Link>
          </li>
          <li>
            <Link href="/locations">locations</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
