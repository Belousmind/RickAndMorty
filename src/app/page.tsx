import OverviewCard from "@/components/overview-card/overview-card";
import { fetchCounts } from "@/lib/fetchCounts";

export default async function Home() {
  const cards = await fetchCounts();

  return (
    <>
      <h1>Rick and Morty Universe</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi ab error,
        laboriosam ducimus voluptates soluta dolor eius tempore corporis maxime,
        eum iusto beatae sunt natus, facilis obcaecati voluptas quam ratione.
      </p>
      <div style={{display: "flex", gap: 8}}>
        {cards.map((card) => (
          <OverviewCard
            key={card.route}
            title={card.title}
            amount={card.amount}
            route={card.route}
          />
        ))}
      </div>
    </>
  );
}
