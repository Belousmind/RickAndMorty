import { OverviewCard } from "@/components";
import { fetchCounts } from "@/lib";

import styles from "./main.module.scss";

export default async function Home() {
  const cards = await fetchCounts();

  return (
    <>
      <h1 className={styles.title}>Rick & Morty Universe</h1>

      <div className={styles["overview-cards"]}>
        {cards.map((card) => (
          <OverviewCard key={card.route} {...card} />
        ))}
      </div>
    </>
  );
}
