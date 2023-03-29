import Head from "next/head";
import Navbar from "../Components/Navbar";
import HomePage from "../Components/HomePage";
import About from "../Components/About";
import Times from "../Components/Times";
import Quesion from "../Components/Quesion";
import HappyRamd from "../Components/HappyRamd";
import Footer from "../Components/Footer";

export default function Home() {
  return (
    <>
      <Head>
        <title>Ramadan Kareem</title>
        <meta name="description" content="شهر رمضان المعظم" />
        <link rel="icon" href="/fanoos.png" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Navbar />
        <HomePage />
        <About />
        <Times />
        <Quesion />
        <HappyRamd />
        <Footer />
      </main>
    </>
  );
}
