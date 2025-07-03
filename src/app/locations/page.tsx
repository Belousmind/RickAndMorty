import { fetchPage } from "@/lib";
import { LocationCard, Pagination } from "@/components";
import { LocationCardProps } from "@/components/location-card/location-card";

type Props = {
  searchParams: { page?: string };
};

export default async function LocationPage({ searchParams }: Props) {
  const page = Number(searchParams.page) || 1;
  const data = await fetchPage("location", page);

  return (
    <>
      <h1>All Location</h1>
      <div className="list">
        {data.results.map((item: LocationCardProps) => (
          <LocationCard key={item.id} {...item} />
        ))}
      </div>
      <Pagination
        currentPage={page}
        totalPages={data.info.pages}
        basePath="/locations"
      />
    </>
  );
}
