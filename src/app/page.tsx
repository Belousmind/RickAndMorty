import OverviewCard from "@/components/overview-card/overview-card";
import { fetchCounts } from "@/lib/fetchCounts";
import styles from "./main.module.scss";

export default async function Home() {
  
  const cards = await fetchCounts();

  return (
    <>
      <h1 className={styles.title}>Rick & Morty Universe</h1>

      <div>
        {cards.map((card) => (
          <OverviewCard key={card.route} {...card} />
        ))}
      </div>
    </>
  );
}
