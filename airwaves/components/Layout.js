import Header from "@/components/Header";
import Footer from "@/components/Footer";
import TrackList from "./trackList";
import LiveHeader from "./LiveHeader";

const RootLayout = ({ children }) => {
  return (
    <>
      <Header />
      <LiveHeader />
      <main>{children}</main>
      <Footer />
    </>
  );
};

export default RootLayout;
