// pages/_app.js
import "@/styles/globals.css";
import RootLayout from "@/components/Layout";
import { SelectedTrackProvider } from "@/context/SelectedTrackContext";

export default function App({ Component, pageProps }) {
  return (
    <SelectedTrackProvider>
      <RootLayout>
        <Component {...pageProps} />
      </RootLayout>
    </SelectedTrackProvider>
  );
}
