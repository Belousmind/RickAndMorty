"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import styles from "./location-card.module.scss";

export type LocationCardProps = {
  id: number;
  name: string;
  type: string;
};

export default function LocationCard({ id, name, type }: LocationCardProps) {
  const pathname = usePathname();

  return (
    <Link
      className={styles["location-card"]}
      href={`/locations/${id.toString()}`}
    >
      <span>Name: {name}</span>
      <span> / </span>
      <span>Type: {type}</span>
    </Link>
  );
}
