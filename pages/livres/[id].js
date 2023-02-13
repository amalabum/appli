import Head from "next/head";
import Image from "next/image";
import Copyright from "@/components/copyright";
import Footer from "@/components/footer";
import Carousel from "react-bootstrap/Carousel";
import Other_banner from "@/components/other_banner";
import { Inter } from "@next/font/google";
import styles from "@/styles/Home.module.css";
import Carte_pour_livre from "@/components/collection_congolaise";
import Navbar from "@/components/header";
import Link from "next/link";
import { useRouter } from "next/router";

const inter = Inter({ subsets: ["latin"] });
const unique_books = "http://livraze-admin.ritach.net/api-v1?livre=";
const apiurls = "http://livraze-admin.ritach.net/api-v1?datas=livres_all";

export default function detai_livre({ livre, livres }) {
  return (
    <>
      <Head>
        <title>livraze </title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/logo-livraze.png" />
      </Head>
      <main className={styles.main}>
        <Navbar />
        <Other_banner un={livre.titre} />
        <div className="collections_list">
          <div className="section_une">
            <div className="livre_details">
              <div className="livre_header">
                <div className="img_cover_details">
                  <img
                    className=""
                    src={`http://livraze-admin.ritach.net/Views/uploads-images/nos_livres/${livre.couverture}`}
                    alt=""
                  />
                </div>
                <div className="img_cover_legende">
                  <a href={`../auteurs/${livre.authors}`}>
                    <h6>Auteur : {livre.nom} </h6>
                  </a>
                  <h6> Maison d'édition : {livre.maison_d_edition}</h6>
                  <h6> Catégorie : {livre.designation}</h6>
                  <div className={styles.Carte_pour_livre_footer_n}>
                    <Link
                      href="../tarifs"
                      className={styles.Carte_pour_livre_a}
                    >
                      S'abonner
                    </Link>
                    <Link
                      href={`https://wa.me/+243974242040?text=Bonjour livraze, je suis  interressé(s) par le livre :${livre.titre}, Est-il disponible pour une lecture? `}
                      className={styles.whatsapp}
                    >
                      <img src="/icons/ic_lov.png" alt="" />
                      <span className="whatsapp_color"> intéressant </span>
                    </Link>
                  </div>
                  <div className="card_auth">
                    <div className="img_card_auth">
                      {/* <img
                        className=""
                        src={`${url_img}${livre.couverture}`}
                        alt=""
                      /> */}
                    </div>
                    <div className="bio_card_auth">{livre.bio}</div>
{livre.synthese}
                  </div>
                </div>
              </div>
              <div className="synthese_livre_n">{livre.synthese}</div>
              <div className="synth_livre">
                <div className={styles.Carte_pour_livre_footer_n}>
                  <Link href="../tarifs" className="btn btn-success">
                    Profiter de l'offre
                  </Link>
                  <Link
                    href={`https://wa.me/+243974242040?text=Bonjour livraze, je suis  interressé(s) par le livre :${livre.titre}, Est-il disponible pour une lecture? `}
                    className={styles.whatsapp}
                  >
                    <img src="/icons/ic_lov.png" alt="" />
                    <span className="whatsapp_color">
                      {" "}
                      je veux lire ce livre{" "}
                    </span>
                  </Link>
                </div>
              </div>
              <div className="voir_aussi"> Vous pouvez aimer ceci aussi </div>
              <div className="cards_container ">
                {livres?.livres?.slice(0, 5)?.map((item, index) => (
                  <Link href={`${item.id}`}>
                    <Carte_pour_livre
                      key={index}
                      nom_auteur={item.auteur}
                      auteur_img_src="/icons/ecrivain.png"
                      titre_l={item.titre}
                      livre_img_src={`http://livraze-admin.ritach.net/Views/uploads-images/nos_livres/${item.couverture}`}
                    />
                  </Link>
                ))}
              </div>
            </div>
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
              <h3> Plus consultés </h3>
              <ul>
                {livres?.livres?.slice(0, 5)?.map((item, index) => (
                  <Link href={`../livres/${item.id}`}>
                    <li>{item.titre} → </li>
                  </Link>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <Footer />
        <Copyright />
      </main>
    </>
  );
}

export const getServerSideProps = async ({ params }) => {
  const router = params;
  const { id } = router;

  const request_for_unique_book = await fetch(`${unique_books}${id}`);
  const resquest_for_all_books = await fetch(apiurls);

  const livre = await request_for_unique_book.json();
  const livres = await resquest_for_all_books.json();
  return {
    props: {
      livre,
      livres,
    },
  };
};
