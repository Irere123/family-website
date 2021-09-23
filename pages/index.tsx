/* eslint-disable react/jsx-key */
import { useState } from "react";
import Head from "next/head";
import Link from "next/link";
import { ChevronRight, Circle } from "@mui/icons-material";

import styles from "../styles/Home.module.css";
import pic from "../public/chicken.png";
import pic2 from "../public/egg.png";
import pic3 from "../public/trays.png";
import { Picture } from "../components/Picture";

const pictures = [
  <Picture imageUrl={pic} />,
  <Picture imageUrl={pic2} />,
  <Picture imageUrl={pic3} />,
];

function Home() {
  const [pageNum, setPageNum] = useState(0);

  const setPage = (num: number) => {
    setPageNum(num);
  };

  return (
    <div>
      <Head>
        <title>Welcome - Home</title>
      </Head>
      <main className={styles.Container}>
        <div className={styles.IntroText}>
          <h2>Welcome to</h2>
          <h1>N&N</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt
            reprehenderit natus sequi illo ex molestiae temporibus beatae
            corrupti, labore odit?
          </p>
          <div className={styles.Button}>
            <Link href="/contact">
              <a>
                <h4>Contact</h4>
              </a>
            </Link>
            <span>
              <ChevronRight />
            </span>
          </div>
        </div>
        <div className={styles.HomeLeftSide}>
          <div className={styles.HomeLeftSide__Gallery}>
            <div className={styles.HomeLeftSide__Gallery_Pics}>
              {pictures[pageNum]}
            </div>
            <div className={styles.ChangePicDots}>
              <span onClick={() => setPage(0)}>
                <Circle />
              </span>
              <span onClick={() => setPage(1)}>
                <Circle />
              </span>
              <span onClick={() => setPage(2)}>
                <Circle />
              </span>
            </div>
          </div>
          <div className={styles.Statistics}>
            <div className={styles.StatElement}>
              <h3>3,000</h3>
              <h4>Chickens</h4>
            </div>
            <div className={styles.StatElement}>
              <h3>12,000</h3>
              <h4>Eggs Sold</h4>
            </div>
            <div className={styles.StatElement}>
              <h3>15</h3>
              <h4>Employees</h4>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default Home;
