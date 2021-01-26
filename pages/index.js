import Head from "next/head";
// import styles from '../styles/Home.module.css'
import Banner from "../components/banner/index";
import Footer from "../components/footer/index";
import Galery from "../components/galery";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
        // rel="noopener noreferrer"
      </Head>

      <main>
        <Banner />
        <Galery />
        <Footer />
      </main>
    </div>
  );
}
