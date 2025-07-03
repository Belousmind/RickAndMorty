import { NamedLink, LabelText } from "@/components";
import type { CharacterApi } from "@/types";

type CharacterProfileProps = Omit<CharacterApi, "url" | "created" | "episode">;

export default function CharacterProfile({
  image,
  name,
  species,
  status,
  type,
  gender,
  origin,
  location,
}: CharacterProfileProps) {
  return (
    <div>
      <img src={image} alt={name} />
      <h1>{name}</h1>

      <LabelText label="Status:" text={status} />
      <LabelText label="Species:" text={species} />
      <LabelText label="Type:" text={type === "" ? "-" : type} />
      <LabelText label="Gender:" text={gender} />

      <LabelText
        label="Origin:"
        text={
          <NamedLink
            name={origin.name}
            url={origin.url}
            basePath="/locations"
          />
        }
      />
      <LabelText
        label="Location:"
        text={
          <NamedLink
            name={location.name}
            url={location.url}
            basePath="/locations"
          />
        }
      />
    </div>
  );
}
