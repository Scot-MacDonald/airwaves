import Link from "next/link";
import { useRouter } from "next/router";
import { mixes } from "@/lib/data";
import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import styles from "@/styles/mixes.module.css";

export default function Movies() {
  const router = useRouter();
  return (
    <>
      <h1>List of Mixes</h1>
      <ul className={styles.mixes}>
        {mixes.map(({ id, date, country, title, cover, tag, slug }) => (
          <li className={styles.mix} key={id}>
            <div className={styles.mixContent}>
              <Image src={cover} alt={title} width={274} height={154} />
              {date}
              {country}
              <Link href={`/mixes/${slug}`}>{title}</Link>
              <div className={styles.mixTag}>{tag}</div>
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
