import Link from "next/link";
import { useRouter } from "next/router";
import { mixes } from "@/lib/data";
import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import styles from "@/styles/mixes.module.css";

export default function Mixes() {
  const router = useRouter();
  return (
    <>
      <ul className={styles.mixes}>
        {mixes.map(({ id, date, country, title, cover, tags, slug }) => (
          <li className={styles.mix} key={id}>
            <div className={styles.mixContent}>
              <div className={styles.imageContainer}>
                <Image src={cover} alt={title} width={312} height={205} />
                <div className={styles.playButton}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <polygon points="5 3 19 12 5 21 5 3"></polygon>
                  </svg>
                </div>
              </div>
              <div>
                <div className={styles.mixHeader}>
                  <div className={styles.mixDate}>
                    <div>{date}</div>
                    <div>{country}</div>
                  </div>

                  <Link href={`/mixes/${slug}`}>{title}</Link>
                </div>
                <div className={styles.mixTags}>
                  {tags.map((tag) => (
                    <span key={tag} className={styles.mixTag}>
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </>
  );
}

//       <Header />
//       <main>
//         <ul>
//           <li>
//             <Link href="mixes/time-is-away-the-colour-of-pomegranates">
//               time-is-away-the-colour-of-pomegranates
//             </Link>
//           </li>
//           <li>
//             <Link href="/mixes/time-is-away-derek-jarman">
//               Time Is Away - Derek Jarman: Prospect Cottage 1989
//             </Link>
//           </li>
//         </ul>
//         <h1>main</h1>
//       </main>
//       <Footer />
//     </>
//   );
// }
