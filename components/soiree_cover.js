import styles from "@/styles/Home.module.css";
import Link from "next/link";
const Other_banner = (props) => {
  return (
    <div className={styles.cover_bloc_soiré}>
      <p>
        <span className={styles.cover_bloc_title}> {props.title}</span>
        <br />
        {props.subtitle} <br />
        <br />
        <Link href="s-abonner">
          <button type="submit" className={styles.vers_Nos_prix}>
            {props.action}
          </button>
        </Link>
      </p>
    </div>
  );
};
export default Other_banner;
