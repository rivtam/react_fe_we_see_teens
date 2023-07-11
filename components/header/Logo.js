import React from "react";
import Image from "next/image";

import styles from '../../styles/Home.module.css'
const Logo = () => {
  // return <div className="logo">CodeWithMarish</div>;
  return <div>
    <Image
      className={styles.logo}
      src="/weeseeyou_logo.png"
      alt="weeseeyou Logo"
      width={40}

      // src="/wizzit_logo.jpeg"
      // alt="wizzit_logo.jpeg"
      // width={90}
      height={40}
      priority
    />
  </div>
};

export default Logo;
