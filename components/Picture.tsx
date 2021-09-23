import React from "react";
import Image from "next/image";

import styles from "../styles/Home.module.css";

interface Props {
  imageUrl: any;
}

export const Picture: React.FC<Props> = ({ imageUrl }) => {
  return (
    <div className={styles.Image}>
      <Image src={imageUrl} alt="Introduction Image" width="250" height="250" />
    </div>
  );
};
