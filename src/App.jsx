import NewsBoard from "./components/News/NewsBoard";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import { NewsHeadlineProvider } from "./provider";

export default function App() {
  return (
    <>
      <NewsHeadlineProvider>
        <Header />
        <main className="my-10 lg:my-14">
          <NewsBoard />
        </main>
        <Footer />
      </NewsHeadlineProvider>
    </>
  );
}
