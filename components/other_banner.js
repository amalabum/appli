import styles from "@/styles/Home.module.css";

import Link from "next/link";
const Other_banner = (props) => {
  return (
    <div className={styles.cover_bloc}>
      <p>
        <span className={styles.cover_bloc_title}>{props.title}</span><br />
        <span className={styles.cover_bloc_title}>{props.un}</span> <br />
        <span className={styles.cover_bloc_title_n}>{props.title_n}</span>
        <span className={styles.cover_bloc_title}>{props.deux_n}</span>
        {props.subtitle}
        {props.trois} <br />
        {/* <Link href="s-abonner">
          <button type="submit" className={styles.vers_Nos_prix}>
            {props.action}
          </button>
        </Link> */}
      </p>
    </div>
  );
};
export default Other_banner;
