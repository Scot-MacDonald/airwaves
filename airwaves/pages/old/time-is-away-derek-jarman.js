import Image from "next/image";
import { mixes } from "../../lib/data";

export default function DerekJarman() {
  const mix = mixes.find(({ slug }) => slug === "time-is-away-derek-jarman");
  return (
    <div key={mix.slug}>
      <h2>{mix.title}</h2>
      <p>{mix.description}</p>
      <Image src={mix.cover} alt={mix.title} width={1900} height={1000} />
    </div>
  );
}
