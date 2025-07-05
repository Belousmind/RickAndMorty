import Link from 'next/link';
import styles from './overview-card.module.scss';

type OverviewCardProps = {
  title: string;
  amount: number;
  route: string;
};

export default function OverviewCard({
  title,
  amount,
  route,
}: OverviewCardProps) {
  return (
    <Link className={styles.card} href={`/${route}`}>
      <span className={styles.amount}>{amount}</span>
      <span className={styles.title}>{title} [ ↗ ]</span>
    </Link>
  );
}
