import Head from "next/head";
// import styles from '../styles/Home.module.css'

import Banner from "../components/banner";
import Galery from "../components/galery";
import Footer from "../components/footer";
import Section from "../components/divisor";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Galeria | Rios Jose</title>
        <link rel="icon" href="/gem-regular.svg" />
      </Head>

      <main>
        <Banner />
        <Section />
        <Galery />
        <Footer />
      </main>
    </div>
  );
}
