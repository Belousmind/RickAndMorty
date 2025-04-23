import Link from "next/link";
import styles from "./overview-card.module.scss";

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
    <div className={styles.card}>
      <h3 className={styles.title}>{title}</h3>
      <span className={styles.amount}>{amount}</span>
      <Link className={styles.link} href={`/${route}`}>
        See all
      </Link>
    </div>
  );
}
