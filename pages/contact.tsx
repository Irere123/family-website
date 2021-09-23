import React from "react";
import Head from "next/head";
import { Email, Phone, Twitter } from "@mui/icons-material";

import styles from "../styles/Ab&Con.module.css";

const Contact: React.FC = () => {
  return (
    <div>
      <Head>
        <title>Contact - N&N</title>
      </Head>
      <main className={styles.ContactPageContainer}>
        <div>
          <div className={styles.ContactCard}>
            <h2>Get in touch</h2>
            <div className={styles.Contacts}>
              <h4>
                <span>
                  <Phone className={styles.Icon} />
                </span>
                +250788858349
              </h4>
              <h4>
                <span>
                  <Phone className={styles.Icon} />
                </span>
                +250786364543
              </h4>
              <h4>
                <span>
                  <Email className={styles.Icon} />
                </span>
                <a
                  style={{
                    color: "#000",
                  }}
                  href="mailto:jmvchickens1972@gmail.com"
                >
                  jmvchickens1972@gmail.com
                </a>
              </h4>
              <h4>
                <span>
                  <Twitter className={styles.Icon} />
                </span>

                <a
                  href="https://twitter.com/jmvchickens1972"
                  target="_blank"
                  rel="noreferrer"
                  style={{
                    color: "#000",
                  }}
                >
                  N&N Chickens
                </a>
              </h4>
            </div>
          </div>
          <div></div>
        </div>
      </main>
    </div>
  );
};

export default Contact;
