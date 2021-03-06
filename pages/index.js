import Head from "next/head";
import Image from "next/image";
import Footer from "../comps/Footer";
import Navbar from "../comps/Navbar";
import Link from "next/link";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <>
      <Head>
        <title>NEXTJS | Home</title>
        <meta name="keywords" content="ninjas" />
      </Head>
      <div>
        <h1 className={styles.title}>HomePage</h1>
        <p className={styles.text}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Id, dicta,
          porro vitae inventore officiis quisquam odit nobis non quaerat eveniet
          mollitia delectus suscipit culpa cumque, nemo iste voluptates.
          Corrupti, aliquid?
        </p>
        <p className={styles.text}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos, fugiat
          voluptatum ipsum minus necessitatibus eum facere accusantium et dicta
          tenetur fugit placeat harum, inventore soluta? Dolore perferendis eos
          tempore animi!
        </p>
        <Link href="/next">
          <a className={styles.btn}>See the Next List</a>
        </Link>
      </div>
    </>
  );
}
