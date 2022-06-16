import styles from "../../styles/Next.module.css";
import Link from "next/link";

export const getStaticProps = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await res.json();

  return {
    props: { ninjas: data },
  };
};

const Next = ({ ninjas }) => {
  return (
    <div>
      <h1>All Creators </h1>
      {ninjas.map((ninja) => (
        <Link href={"/next/" + ninja.id} key={ninja.id}>
          <a className={styles.single}>
            <h3>{ninja.name}</h3>
          </a>
        </Link>
      ))}
    </div>
  );
};

export default Next;
