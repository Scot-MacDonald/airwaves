// pages/tags/[tag].js
import { useRouter } from "next/router";
import Mixes from "@/pages/mixes/index";

const TagPage = () => {
  const router = useRouter();
  const { tag } = router.query;

  return (
    <>
      <h1>Mixes with Tag: {tag}</h1>
      <Mixes tag={tag} />
    </>
  );
};

export default TagPage;
