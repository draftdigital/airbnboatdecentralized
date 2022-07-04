import Head from "next/head";
import Home from "./home/index";
import styles from "../styles/Home.module.css";

export default function start() {
  return (
    <div className={styles.container}>
      <Head>
        <title>AirBnBoat</title>
        <meta name="description" content="Air, Beach and Boats for rent" />
        <link rel="icon" href="/faviconBoat.png" />
      </Head>

      <Home />
    </div>
  );
}
