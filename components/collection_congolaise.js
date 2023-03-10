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
      </div>
      <h5 className="card_legende">
        <b>{props.titre_l}</b> | {props.nom_auteur}
      </h5>{" "}
    </div>
  );
};

export default Carte_pour_livre;
