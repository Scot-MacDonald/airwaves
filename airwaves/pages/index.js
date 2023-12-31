// import Head from "next/head";
// import Image from "next/image";
// import { Inter } from "next/font/google";
// import styles from "@/styles/Home.module.css";
// import Link from "next/link";
// import TrackList from "@/components/trackList";

// import Header from "@/components/Header";
// import Footer from "@/components/Footer";

// const inter = Inter({ subsets: ["latin"] });

// export default function Home() {
//   return (
//     <>
//       <Head>
//         <title>Create Next App</title>
//         <meta name="description" content="Generated by create next app" />
//         <meta name="viewport" content="width=device-width, initial-scale=1" />
//         <link rel="icon" href="/favicon.ico" />
//       </Head>

//       <main className={`${styles.main} ${inter.className}`}>
//         <div className={styles.description}>
//           <ul>
//             <li>
//               <Link href="/">Home</Link>
//             </li>
//             <li>
//               <Link href="mixes/time-is-away-the-colour-of-pomegranates">
//                 time-is-away-the-colour-of-pomegranates
//               </Link>
//             </li>
//             <li>
//               <Link href="/volumes/the-two-towers">The Two Towers</Link>
//             </li>
//           </ul>

//           <h1>main</h1>
//         </div>
//       </main>
//     </>
//   );
// }

// mixes/index.js
import { useState } from "react";
import { useSelectedTrack } from "@/context/SelectedTrackContext";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import styles from "@/styles/mixes.module.css";

export default function Mixes() {
  const { setSelectedTrack } = useSelectedTrack();
  const [isPlaying, setIsPlaying] = useState(false); // New state variable

  const mixes = [
    {
      slug: "time-is-away-the-colour-of-pomegranates",
      date: "05.11.2023",
      country: "BERLIN",
      title: "time is away the colour of pomegranates",
      description:
        "This episode is inspired by the visionary world of Armenian filmmaker Sergei Parajanov. It draws on his 1969 masterpiece Sayat Nova, also known as The Colour of Pomegranates, a dreamlike poetic reimaginig of the life of the title character, an 18th-century poet and troubadour. ",
      cover: "/images/pomegranates.png",
      trackUrl: "https://soundcloud.com/inis-eto/time-is-away-iniseto",
      tags: ["AMBIENT", "TECHNO"],
    },
    {
      slug: "time-is-away-derek-jarman",
      date: "05.11.2023",
      country: "BERLIN",
      title: "Time Is Away - Derek Jarman: Prospect Cottage 1989",
      description:
        "Towards the end of his life, visionary artist, filmmaker and activist Derek Jarman moved to Dungeness in Kent. There, on the shingle, around his small fisherman’s cottage, he created an iconic garden which has become a potent symbol of his legacy. This month Prospect Cottage and its garden were saved from a private buyer following the largest ever arts crowdfunding campaign by the Art Fund. This programme draws on Jarman’s beautiful memoir, ‘Modern Nature’, to recreate one year in the dream life of his garden and the stark landscape that surrounds it. With love and thanks to Christina Petrie. ",
      cover: "/images/DereckJarman.jpeg",
      trackUrl:
        "https://soundcloud.com/nts-latest/time-is-away-the-colour-of-pomegranates-180520",
      tags: ["DRONE", "FOLK"],
    },
    {
      slug: "time-is-away-derek-jarman",
      date: "05.11.2023",
      country: "BERLIN",
      title: "Time Is Away - Derek Jarman: Prospect Cottage 1989",
      description:
        "Towards the end of his life, visionary artist, filmmaker and activist Derek Jarman moved to Dungeness in Kent. There, on the shingle, around his small fisherman’s cottage, he created an iconic garden which has become a potent symbol of his legacy. This month Prospect Cottage and its garden were saved from a private buyer following the largest ever arts crowdfunding campaign by the Art Fund. This programme draws on Jarman’s beautiful memoir, ‘Modern Nature’, to recreate one year in the dream life of his garden and the stark landscape that surrounds it. With love and thanks to Christina Petrie. ",
      cover: "/images/DereckJarman.jpeg",
      trackUrl: "https://soundcloud.com/inis-eto/time-is-away-iniseto",
      tags: ["AMBIENT", "FOLK"],
    },
    {
      slug: "time-is-away-derek-jarman",
      date: "05.11.2023",
      country: "BERLIN",
      title: "Time Is Away - Derek Jarman: Prospect Cottage 1989",
      description:
        "Towards the end of his life, visionary artist, filmmaker and activist Derek Jarman moved to Dungeness in Kent. There, on the shingle, around his small fisherman’s cottage, he created an iconic garden which has become a potent symbol of his legacy. This month Prospect Cottage and its garden were saved from a private buyer following the largest ever arts crowdfunding campaign by the Art Fund. This programme draws on Jarman’s beautiful memoir, ‘Modern Nature’, to recreate one year in the dream life of his garden and the stark landscape that surrounds it. With love and thanks to Christina Petrie. ",
      cover: "/images/DereckJarman.jpeg",
      trackUrl: "https://soundcloud.com/inis-eto/time-is-away-iniseto",
      tags: ["AMBIENT", "FOLK"],
    },
    {
      slug: "time-is-away-derek-jarman",
      date: "05.11.2023",
      country: "BERLIN",
      title: "Time Is Away - Derek Jarman: Prospect Cottage 1989",
      description:
        "Towards the end of his life, visionary artist, filmmaker and activist Derek Jarman moved to Dungeness in Kent. There, on the shingle, around his small fisherman’s cottage, he created an iconic garden which has become a potent symbol of his legacy. This month Prospect Cottage and its garden were saved from a private buyer following the largest ever arts crowdfunding campaign by the Art Fund. This programme draws on Jarman’s beautiful memoir, ‘Modern Nature’, to recreate one year in the dream life of his garden and the stark landscape that surrounds it. With love and thanks to Christina Petrie. ",
      cover: "/images/DereckJarman.jpeg",
      trackUrl: "https://soundcloud.com/inis-eto/time-is-away-iniseto",
      tags: ["AMBIENT", "FOLK"],
    },
    {
      slug: "time-is-away-derek-jarman",
      date: "05.11.2023",
      country: "BERLIN",
      title: "Time Is Away - Derek Jarman: Prospect Cottage 1989",
      description:
        "Towards the end of his life, visionary artist, filmmaker and activist Derek Jarman moved to Dungeness in Kent. There, on the shingle, around his small fisherman’s cottage, he created an iconic garden which has become a potent symbol of his legacy. This month Prospect Cottage and its garden were saved from a private buyer following the largest ever arts crowdfunding campaign by the Art Fund. This programme draws on Jarman’s beautiful memoir, ‘Modern Nature’, to recreate one year in the dream life of his garden and the stark landscape that surrounds it. With love and thanks to Christina Petrie. ",
      cover: "/images/DereckJarman.jpeg",
      trackUrl: "https://soundcloud.com/inis-eto/time-is-away-iniseto",
      tags: ["AMBIENT", "FOLK"],
    },
    {
      slug: "time-is-away-derek-jarman",
      date: "05.11.2023",
      country: "BERLIN",
      title: "Time Is Away - Derek Jarman: Prospect Cottage 1989",
      description:
        "Towards the end of his life, visionary artist, filmmaker and activist Derek Jarman moved to Dungeness in Kent. There, on the shingle, around his small fisherman’s cottage, he created an iconic garden which has become a potent symbol of his legacy. This month Prospect Cottage and its garden were saved from a private buyer following the largest ever arts crowdfunding campaign by the Art Fund. This programme draws on Jarman’s beautiful memoir, ‘Modern Nature’, to recreate one year in the dream life of his garden and the stark landscape that surrounds it. With love and thanks to Christina Petrie. ",
      cover: "/images/DereckJarman.jpeg",
      trackUrl: "https://soundcloud.com/inis-eto/time-is-away-iniseto",
      tags: ["AMBIENT", "FOLK"],
    },
    {
      slug: "time-is-away-derek-jarman",
      date: "05.11.2023",
      country: "BERLIN",
      title: "Time Is Away - Derek Jarman: Prospect Cottage 1989",
      description:
        "Towards the end of his life, visionary artist, filmmaker and activist Derek Jarman moved to Dungeness in Kent. There, on the shingle, around his small fisherman’s cottage, he created an iconic garden which has become a potent symbol of his legacy. This month Prospect Cottage and its garden were saved from a private buyer following the largest ever arts crowdfunding campaign by the Art Fund. This programme draws on Jarman’s beautiful memoir, ‘Modern Nature’, to recreate one year in the dream life of his garden and the stark landscape that surrounds it. With love and thanks to Christina Petrie. ",
      cover: "/images/DereckJarman.jpeg",
      trackUrl: "https://soundcloud.com/inis-eto/time-is-away-iniseto",
      tags: ["AMBIENT", "FOLK"],
    },
    {
      slug: "time-is-away-derek-jarman",
      date: "05.11.2023",
      country: "BERLIN",
      title: "Time Is Away - Derek Jarman: Prospect Cottage 1989",
      description:
        "Towards the end of his life, visionary artist, filmmaker and activist Derek Jarman moved to Dungeness in Kent. There, on the shingle, around his small fisherman’s cottage, he created an iconic garden which has become a potent symbol of his legacy. This month Prospect Cottage and its garden were saved from a private buyer following the largest ever arts crowdfunding campaign by the Art Fund. This programme draws on Jarman’s beautiful memoir, ‘Modern Nature’, to recreate one year in the dream life of his garden and the stark landscape that surrounds it. With love and thanks to Christina Petrie. ",
      cover: "/images/DereckJarman.jpeg",
      trackUrl: "https://soundcloud.com/inis-eto/time-is-away-iniseto",
      tags: ["AMBIENT", "techno"],
    },
    {
      slug: "ok-williams",
      date: "05.11.2023",
      country: "BERLIN",
      title: "Ok Williams",
      description:
        "Towards the end of his life, visionary artist, filmmaker and activist Derek Jarman moved to Dungeness in Kent. There, on the shingle, around his small fisherman’s cottage, he created an iconic garden which has become a potent symbol of his legacy. This month Prospect Cottage and its garden were saved from a private buyer following the largest ever arts crowdfunding campaign by the Art Fund. This programme draws on Jarman’s beautiful memoir, ‘Modern Nature’, to recreate one year in the dream life of his garden and the stark landscape that surrounds it. With love and thanks to Christina Petrie. ",
      cover: "/images/DereckJarman.jpeg",
      trackUrl: "https://soundcloud.com/inis-eto/time-is-away-iniseto",
      tags: ["AMBIENT", "FOLK", "FREE JAZZ", "AMBIENT", "FOLK", "FREE JAZZ"],
    },
    {
      slug: "time-is-away-derek-jarman",
      date: "05.11.2023",
      country: "BERLIN",
      title: "Time Is Away - Derek Jarman: Prospect Cottage 1989",
      description:
        "Towards the end of his life, visionary artist, filmmaker and activist Derek Jarman moved to Dungeness in Kent. There, on the shingle, around his small fisherman’s cottage, he created an iconic garden which has become a potent symbol of his legacy. This month Prospect Cottage and its garden were saved from a private buyer following the largest ever arts crowdfunding campaign by the Art Fund. This programme draws on Jarman’s beautiful memoir, ‘Modern Nature’, to recreate one year in the dream life of his garden and the stark landscape that surrounds it. With love and thanks to Christina Petrie. ",
      cover: "/images/DereckJarman.jpeg",
      trackUrl: "https://soundcloud.com/inis-eto/time-is-away-iniseto",
      tags: ["AMBIENT", "FOLK"],
    },
    {
      slug: "time-is-away-derek-jarman",
      date: "05.11.2023",
      country: "BERLIN",
      title: "Time Is Away - Derek Jarman: Prospect Cottage 1989",
      description:
        "Towards the end of his life, visionary artist, filmmaker and activist Derek Jarman moved to Dungeness in Kent. There, on the shingle, around his small fisherman’s cottage, he created an iconic garden which has become a potent symbol of his legacy. This month Prospect Cottage and its garden were saved from a private buyer following the largest ever arts crowdfunding campaign by the Art Fund. This programme draws on Jarman’s beautiful memoir, ‘Modern Nature’, to recreate one year in the dream life of his garden and the stark landscape that surrounds it. With love and thanks to Christina Petrie. ",
      cover: "/images/DereckJarman.jpeg",
      trackUrl: "https://soundcloud.com/inis-eto/time-is-away-iniseto",
      tags: ["AMBIENT", "FOLK"],
    },
    {
      slug: "time-is-away-derek-jarman",
      date: "05.11.2023",
      country: "BERLIN",
      title: "Time Is Away - Derek Jarman: Prospect Cottage 1989",
      description:
        "Towards the end of his life, visionary artist, filmmaker and activist Derek Jarman moved to Dungeness in Kent. There, on the shingle, around his small fisherman’s cottage, he created an iconic garden which has become a potent symbol of his legacy. This month Prospect Cottage and its garden were saved from a private buyer following the largest ever arts crowdfunding campaign by the Art Fund. This programme draws on Jarman’s beautiful memoir, ‘Modern Nature’, to recreate one year in the dream life of his garden and the stark landscape that surrounds it. With love and thanks to Christina Petrie. ",
      cover: "/images/DereckJarman.jpeg",
      trackUrl: "https://soundcloud.com/inis-eto/time-is-away-iniseto",
      tags: ["AMBIENT", "FOLK"],
    },
    {
      slug: "ok-williams",
      date: "05.11.2023",
      country: "BERLIN",
      title: "Ok Williams",
      description:
        "Towards the end of his life, visionary artist, filmmaker and activist Derek Jarman moved to Dungeness in Kent. There, on the shingle, around his small fisherman’s cottage, he created an iconic garden which has become a potent symbol of his legacy. This month Prospect Cottage and its garden were saved from a private buyer following the largest ever arts crowdfunding campaign by the Art Fund. This programme draws on Jarman’s beautiful memoir, ‘Modern Nature’, to recreate one year in the dream life of his garden and the stark landscape that surrounds it. With love and thanks to Christina Petrie. ",
      cover: "/images/DereckJarman.jpeg",
      trackUrl: "https://soundcloud.com/inis-eto/time-is-away-iniseto",
      tags: ["AMBIENT", "FOLK", "FREE JAZZ", "AMBIENT", "FOLK", "FREE JAZZ"],
    },
    {
      slug: "ok-williams",
      date: "05.11.2023",
      country: "BERLIN",
      title: "Ok Williams",
      description:
        "Towards the end of his life, visionary artist, filmmaker and activist Derek Jarman moved to Dungeness in Kent. There, on the shingle, around his small fisherman’s cottage, he created an iconic garden which has become a potent symbol of his legacy. This month Prospect Cottage and its garden were saved from a private buyer following the largest ever arts crowdfunding campaign by the Art Fund. This programme draws on Jarman’s beautiful memoir, ‘Modern Nature’, to recreate one year in the dream life of his garden and the stark landscape that surrounds it. With love and thanks to Christina Petrie. ",
      cover: "/images/DereckJarman.jpeg",
      trackUrl: "https://soundcloud.com/inis-eto/time-is-away-iniseto",
      tags: ["AMBIENT", "FOLK", "FREE JAZZ", "AMBIENT", "FOLK", "FREE JAZZ"],
    },
  ];

  // const handlePlayClick = (trackUrl) => {
  //   console.log("Play button clicked for:", trackUrl);
  //   setSelectedTrack(trackUrl);
  // };

  // Define the handlePlayClick function
  const handlePlayClick = (trackUrl) => {
    console.log("Play button clicked for:", trackUrl);
    setSelectedTrack(trackUrl);
    setIsPlaying(!isPlaying);
  };

  // Logging mix data
  console.log("Mixes:", mixes);

  return (
    <>
      <ul className={styles.mixes}>
        {mixes.map(
          ({ id, date, country, title, cover, tags, slug, trackUrl }) => (
            <li className={styles.mix} key={id}>
              <div className={styles.mixContent}>
                <div className={styles.imageContainer}>
                  <Image src={cover} alt={title} width={312} height={205} />
                  <div
                    className={styles.playButton}
                    onClick={() => handlePlayClick(trackUrl)}
                  >
                    {isPlaying ? (
                      /* Render pause icon when playing */
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <rect x="6" y="4" width="4" height="16"></rect>
                        <rect x="14" y="4" width="4" height="16"></rect>
                      </svg>
                    ) : (
                      /* Render play icon when not playing */
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
                    )}
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
                    {tags.map((tag) => (
                      <span key={tag} className={styles.mixTag}>
                        {tag}
                      </span>
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
}
