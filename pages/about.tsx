import React from "react";
import Head from "next/head";
import Image from "next/image";

import styles from "../styles/Ab&Con.module.css";
import pic3 from "../public/pic3.jpg";

const About: React.FC = () => {
  return (
    <div>
      <Head>
        <title>About - N&N</title>
      </Head>
      <main className={styles.AboutPageContainer}>
        <div className={styles.AboutNnN}>
          <div className={styles.AboutNnN__Text}>
            <h1>
              About <span className={styles.NnNLogo}>N&N</span>
            </h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga nam
              fugit rerum delectus, itaque odit maxime nisi et nostrum tempore,
              nihil cum harum accusamus amet. Assumenda, saepe. Vel alias
              blanditiis recusandae tempora odit at minima molestias obcaecati
              facere vero, nulla et eius illum culpa architecto asperiores ullam
              deleniti earum distinctio.
            </p>
            <div className={styles.AboutNnN__Info}>
              <h1>
                N&N <span className={styles.ESTdate}> EST.2000</span>
              </h1>
            </div>
          </div>
          <div className={styles.FoundersCard}>
            <div className={styles.FoundersCard__Image}>
              <Image
                className={styles.FoundersCard__Image_Img}
                src={pic3}
                width="140"
                height="140"
                alt="N&N Founders"
              />
            </div>
            <h3>Founders of N&N</h3>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Libero
              omnis fugit nulla ab aliquam quia magni, animi adipisci autem
              voluptatum. Dolores asperiores cupiditate temporibus veniam
              perspiciatis alias, maiores nam eaque.
            </p>
          </div>
        </div>
      </main>
    </div>
  );
};

export default About;
