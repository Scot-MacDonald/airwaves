import Link from "next/link";
import { useRouter } from "next/router";
import { mixes } from "../../lib/data";

export default function Mix() {
  const router = useRouter();
  const { slug, id } = router.query;

  console.log(router.query);

  const currentMix = mixes.find((mix) => mix.slug === slug);

  if (!currentMix) {
    return null;
  }

  const { title, description, year } = currentMix;

  return (
    <>
      <title>{title}</title>

      <h1>
        {title} <small>{year}</small>
      </h1>
      <p>{description}</p>
    </>
  );
}
