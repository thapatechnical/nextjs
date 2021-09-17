import Navbar from "../components/Navbar";
import styles from "../styles/about.module.css";
import Image from "next/image";

const about = () => {
  return (
    <>
      <Navbar />
      <div style={{ textAlign: "center" }}>
        <h1 className={styles.mainHeading}>Hello World my about </h1>
        <Image
          src="https://images.pexels.com/photos/257897/pexels-photo-257897.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
          width="500"
          height="300"
          alt="aboutImage"></Image>
      </div>
    </>
  );
};

export default about;
