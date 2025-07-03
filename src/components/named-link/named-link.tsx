import Link from "next/link";
import extractDigits from "@/utils/extract-digits";

type NamedLinkProps = {
  name: string;
  url: string;
  basePath: string;
};

export default function NamedLink({ name, url, basePath }: NamedLinkProps) {
  if (!url || name.toLowerCase() === "unknown") {
    return name;
  }

  const id = extractDigits(url);

  return <Link href={`${basePath}/${id}`}>{name} [ ↗ ]</Link>;
}
