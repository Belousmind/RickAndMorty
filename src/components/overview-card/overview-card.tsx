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
    <Link className={styles.card} href={`/${route}`}>
      <span className={styles.amount}>{amount}</span>
      <h3 className={styles.title}>{title} [ ↗ ]</h3>

      {/* <Link className={styles.link} > */}
      {/* See all
      </Link> */}
    </Link>
  );
}
