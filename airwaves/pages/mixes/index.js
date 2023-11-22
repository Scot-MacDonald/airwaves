// mixes/index.js
import { useSelectedTrack } from "@/context/SelectedTrackContext";
import Image from "next/image";
import Link from "next/link";
import styles from "@/styles/mixes.module.css";
import { mixes } from "../../lib/data";

const Mixes = ({ tag }) => {
  const { setSelectedTrack } = useSelectedTrack();

  const handlePlayClick = (trackUrl) => {
    console.log("Play button clicked for:", trackUrl);
    setSelectedTrack(trackUrl);
  };

  const filteredMixes = tag
    ? mixes.filter((mix) => mix.tags.includes(tag))
    : mixes;

  return (
    <>
      <ul className={styles.mixes}>
        {filteredMixes.map(
          ({ id, date, country, title, cover, tags, slug, url }) => (
            <li className={styles.mix} key={id}>
              <div className={styles.mixContent}>
                <div className={styles.imageContainer}>
                  <Image src={cover} alt={title} width={312} height={205} />
                  <div
                    className={styles.playButton}
                    onClick={() => handlePlayClick(url)}
                  >
                    {/* Your play button SVG */}
                  </div>
                </div>
                <div>
                  <div className={styles.mixHeader}>
                    <Link href={`/mixes/${slug}`}>
                      <div className={styles.mixDate}>
                        <div>{date}</div>
                        <div>{country}</div>
                      </div>

                      <div className={styles.mixTitle}>{title}</div>
                    </Link>
                  </div>
                  <div className={styles.mixTags}>
                    {tags.map((tagItem) => (
                      <Link key={tagItem} href={`/tags/${tagItem}`}>
                        {tagItem}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            </li>
          )
        )}
      </ul>
    </>
  );
};

export default Mixes;
