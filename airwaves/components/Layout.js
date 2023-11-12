import Header from "@/components/Header";
import Footer from "@/components/Footer";
import TrackList from "./trackList";

const RootLayout = ({ children }) => {
  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
};

export default RootLayout;
