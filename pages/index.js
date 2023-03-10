import Head from "next/head";
import Image from "next/image";
// import Nav_bar from "../components/navbar";
import Copyright from "../components/copyright";
import Footer from "../components/footer";
import Nav_bar from "../components/header";
import Homebaner from "@/components/home-baner";
import { Inter } from "@next/font/google";
import styles from "@/styles/Home.module.css";
import Item_top_5 from "@/components/compsants_standards";
import List_items from "@/components/List_items";
import { useState, useEffect } from "react";
import Carte_pour_livre from "@/components/collection_congolaise";

import Link from "next/link";

import Popup_collections from "@/components/popup_collections";

export default function Home({ livres_a, livres }) {
  const [buttonPopup, setButtonPopup] = useState(false);
  return (
    <>
      <Head>
        <title>livraze </title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/logo-livraze.png" />
      </Head>
      <Nav_bar />

      <main className={styles.main}>
        <Popup_collections trigger={buttonPopup} setTrigger={setButtonPopup}>
          <Link
            href="../collection-congolaise"
            className="collection_congolaise"
          >
            COLLECTION CONGOLAISE →
          </Link>
          <Link
            href="../collection-internationale"
            className="collection_etrangère"
          >
            COLLECTION ETRANGERE →
          </Link>
        </Popup_collections>

        <div className="call_to_action_don_livre">
          <div className={styles.proposal}>
            <h1>
              {" "}
              « Vous pouvez nous enprumter <br />
              ou vendre vos livres ici »{" "}
            </h1>{" "}
            <br />
            <br />
            <Link
              href="../collection-congolaise"
              className={styles.proposal_action}
            >
              lancer le processus →
            </Link>
          </div>
        </div>
        <div className={styles.app_container}>
          <Homebaner />
          <div className="top_cinq_titre">
            <h3>Nos collections les plus récentes</h3>
            Tous nos livres sont en dur ... 
          </div>
          <div className={styles.relative_bloc}>
            <div className="cards_container">
              {livres?.livres?.slice(0, 16)?.map((item, index) => (
                <Link href={`../livres/${item.id}`}>
                  <Carte_pour_livre
                    key={index}
                    nom_auteur={item.nom}
                    auteur_img_src="/icons/ecrivain.png"
                    titre_l={item.titre}
                    maison_edit={item.maison_d_edition}
                    livre_img_src={`http://livraze-admin.ritach.net/Views/uploads-images/nos_livres/${item.couverture}`}
                  />
                </Link>
              ))}
            </div>
          </div>
          <div className={styles.call_to_action}>
            <button
              onClick={() => setButtonPopup(true)}
              className="button_for_popup"
            >
              Voir toutes Nos collections →
            </button>
          </div>

          <div className="intro_soiree_container">
            <div className="section_imgs"></div>
            <div className="section_text">
              <div className="DATE">
                <div className="jour">
                  30
                  <div className="mois">mars</div>{" "}
                </div>{" "}
              </div>
              <h2>
                Soirée <span className="text_coloric">Littéraire</span>
                <span className="dot">.</span>
              </h2>
              <h3>
                La première soirée Littéraire de Livraze autour du livre :{" "}
                <b>Créer son entreprise sans argent.</b>
              </h3>{" "}
              <br />
              Aujourd’hui, comme dans plusieurs villes de la RDC, les jeunes
              s’intéressent à l’entrepreneuriat mais peu sont ceux qui se
              lancent malgré les contraintes financières. Ce guide de poche pour
              l’entrepreneur va nous permettre de prendre ce choix au sérieux et
              de se focaliser sur son projet. Pendant la présentation de ce
              livre par l’auteur, vous aurez mille et une raisons d’embrasser le
              domaine entrepreneurial...
              <br />
              <div className="call_to_action">
                <Link href="../soireeLitteraire">En savoir plus →</Link>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.our_collection}>
          <div className="top_cinq_titre">
            <h3>Nos collections les plus aimées</h3>
            Tous nos livres sont en dur...
          </div>

          <div className="cards_container">
            {livres?.livres?.slice(18, 34)?.map((item, index) => (
              <Link href={`../livres/${item.id}`}>
                <Carte_pour_livre
                  key={index}
                  nom_auteur={item.nom}
                  auteur_img_src="/icons/ecrivain.png"
                  titre_l={item.titre}
                  //livre_img_src={`http://localhost/fidbagraphics/2023/janvier/livraze/back-office/Views/uploads-images/nos_livres/${item.couverture}`}

                  livre_img_src={`http://livraze-admin.ritach.net/Views/uploads-images/nos_livres/${item.couverture}`}
                />
              </Link>
            ))}
          </div>
          <div className={styles.call_to_action}>
            <button
              onClick={() => setButtonPopup(true)}
              className="button_for_popup"
            >
              Voir toutes Nos collections →
            </button>
          </div>

          <br />
        </div>
        <Footer> </Footer>
        <Copyright> </Copyright>
      </main>
    </>
  );
}

export const getServerSideProps = async () => {
  const res = await fetch(
    "http://livraze-admin.ritach.net/api-v1?datas=livres_all"
  );

  const congo = await fetch(
    "http://livraze-admin.ritach.net/api-v1?datas=livres_congolais"
  );

  const livres = await res.json();
  const livres_a = await congo.json();

  return {
    props: {
      livres,
    },
  };
};
