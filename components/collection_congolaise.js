import styles from "@/styles/Home.module.css";
import Image from "next/image";
import { Link } from "next/link";

const Carte_pour_livre = (props) => {
  return (
    <div className="Card_livre">
      <div className="Card_livre_containt">
        {" "}
        <img
          className="image_c"
          src={props.livre_img_src}
          alt={props.livre_alt}
          width="100%"
        />{" "}
        {/* <Image
          src={props.livre_img_src}
          className="image_c"
          alt={props.livre_alt}
          layout="fill"
          objectFit="contain"
        /> */}
      </div>
      <h5 className="card_legende">
        <i>{props.titre_l}</i>
      </h5>
    </div>
  );

  // return (
  //   <div className="Carte_pour_livre">
  //     <div className="Carte_pour_livre_containt">
  //       <img src={props.livre_img_src} alt={props.livre_alt} />
  //     </div>
  //     {/*  <div className={styles.Carte_pour_livre_footer}>
  //      <Link href="s-abonner" className={styles.Carte_pour_livre_interst}>
  //         synthese →
  //       </Link>
  //     </div>*/}
  //   </div>
  // );
};

export default Carte_pour_livre;
