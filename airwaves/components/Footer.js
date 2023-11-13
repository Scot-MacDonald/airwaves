// export default function Footer() {
//   return (
//     <footer>
//       <p>&copy; {new Date().getFullYear()} airwaves. All rights reserved.</p>
//       <iframe
//         width="100%"
//         height="120"
//         scrolling="no"
//         // frameborder="no"
//         allow="autoplay"
//         src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/823639072&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true"
//       ></iframe>
//     </footer>
//   );
// }

import { useSelectedTrack } from "@/context/SelectedTrackContext";

export default function Footer() {
  const { selectedTrack } = useSelectedTrack();

  return (
    <footer>
      {selectedTrack && (
        <iframe
          width="100%"
          height="100px"
          scrolling="no"
          frameBorder="no"
          allow="autoplay"
          src={`https://w.soundcloud.com/player/?url=${encodeURIComponent(
            selectedTrack
          )}&auto_play=true&show_comments=false&color=72a383 `}
        ></iframe>
      )}
    </footer>
  );
}
