import Head from "next/head";
import Image from "next/image";
import Homebaner from "@/components/home-baner";
import Carousel from "react-bootstrap/Carousel";
import Copyright from "../components/copyright";
import Footer from "../components/footer";
import Navbar from "../components/header";
import Other_banner from "@/components/other_banner";
import { Inter } from "@next/font/google";
import styles from "@/styles/Home.module.css";
import Carte_pour_livre from "@/components/collection_congolaise";

import { useRouter } from "next/router";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

const url_img =
  "http://localhost/admin_livraze/Views/uploads-images/nos_livres/";
const apiurl = "http://localhost/admin_livraze/api-v1?datas=livres_all";

export default function livres({ livres }) {
  return (
    <>
      <Head>
        <title>livraze </title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/logo-livraze.png" />
        <meta charSet="UTF-8" className="next-head" />
      </Head>
      <main className={styles.main}>
        <Navbar />
        <div className="container_mast">
          <div className="container_mast_sub">
            {" "}
            <h2> Collection</h2>
            <h3> internationnale. </h3>
          </div>
          <div className="custom-shape-divider-bottom-1675346632">
            <svg
              data-name="Layer 1"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 1200 120"
              preserveAspectRatio="none"
            >
              <path
                d="M892.25 114.72L0 0 0 120 1200 120 1200 0 892.25 114.72z"
                className="shape-fill"
              ></path>
            </svg>
          </div>
        </div>
        {/* <h2 className="titre_sectio">
          Collection <span className="text_coloric">congolaise</span>
          <span className="dot">.</span>
        </h2> */}
        <div className="collections_list">
          <div className="section_une">
            {livres?.livres?.map((item, index) => (
              <div className="livre">
                <div className="couverture">
                  {/* <Image
                    src="/00.png"
                    className="image_c"
                    alt=""
                    layout="fill"
                    objectFit="contain"
                  /> */}
                  <Link href={`livres/${item.id}`}>
                    <img
                      className="couverture_img"
                      // src={`http://localhost/fidbagraphics/2023/janvier/livraze/back-office/Views/uploads-images/nos_livres/${item.couverture}`}
                      src={`http://livraze-admin.ritach.net/Views/uploads-images/nos_livres/${item.couverture}`}
                      alt=""
                    />
                  </Link>
                </div>
                <div className="synthese">
                  <h3 className="litre_titre">
                    {item.titre.substr(0, 70)} ...
                  </h3>

                  <h5 className="categorie_name">
                    Categorie : {item.designation} | Maison d'édition:
                    {item.maison_d_edition}
                  </h5>

                  <div className="syhth_liv">
                    {item.synthese.substr(0, 60)}{" "}
                    <span className="addon_text">
                      {item.synthese.substr(61, 120)}{" "}
                    </span>{" "}
                    ...
                  </div>
                  <div className={styles.Carte_pour_livre_footer_n}>
                    <Link
                      href={`livres/${item.id}`}
                      className={styles.Carte_pour_livre_a}
                    >
                      {" "}
                      En savoir plus
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="section_deux">
            <div className="carousel_collections">
              <Link href="">
                <Image
                  src="/livraze_add.jpg"
                  className="caroussels_img"
                  alt="Picture of the author"
                  width={180}
                  height={200}
                  priority
                />
              </Link>
            </div>
            <div className="categories">
              <h3>Les plus consultés </h3>
              <div className="livres_annexed">
                {livres?.livres?.slice(10, 16)?.map((item, index) => (
                  <Link href={`../livres/${item.id}`} className="titre_text">
                    <img
                      className="height_70"
                      src={`http://livraze-admin.ritach.net/Views/uploads-images/nos_livres/${item.couverture}`}
                      alt=""
                    />

                    <div className="titre_d_oeuvre"> {item.titre} → </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
        <Footer />
        <Copyright />
      </main>
    </>
  );
}

export const getServerSideProps = async () => {
  const res = await fetch(
    "http://livraze-admin.ritach.net/api-v1?datas=livres_all"
  );

  const livres = await res.json();
  return {
    props: {
      livres,
    },
  };
};
