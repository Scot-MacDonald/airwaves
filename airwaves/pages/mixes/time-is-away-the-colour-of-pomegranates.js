import Image from "next/image";
import { mixes } from "../../lib/data";
import Footer from "@/components/Footer";

export default function Pomegranates() {
  const mix = mixes.find(
    ({ slug }) => slug === "time-is-away-the-colour-of-pomegranates"
  );
  return (
    <>
      <div key={mix.slug}>
        <h2>{mix.title}</h2>
        <p>{mix.description}</p>
        <Image src={mix.cover} alt={mix.title} width={274} height={154} />
      </div>
      <Footer />
    </>
  );
}
