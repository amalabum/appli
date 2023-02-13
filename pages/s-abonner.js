import Head from "next/head";
import Image from "next/image";
import Nav_bar from "../components/navbar";
import Copyright from "../components/copyright";
import Footer from "../components/footer";
import Navbar from "../components/header";
import Other_banner from "@/components/other_banner";
import { Inter } from "@next/font/google";
import styles from "@/styles/Home.module.css";
import Item_top_5 from "@/components/compsants_standards";
import List_items from "@/components/List_items";
import { useState, useEffect } from "react";
import Carte_pour_livre from "@/components/collection_congolaise";

export default function abonnement({}) {
  return (
    <>
      <Head>
        <title>livraze </title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/logo-livraze.png" />
      </Head>
      <Navbar />

      <main className={styles.main}>
        <Other_banner
          title="C'est partie !"
          subtitle="AFIN D'ACCÉDER À NOS COLLECTIONS"
          action=""
        ></Other_banner>
        <div className={styles.default_div}>
          <iframe
            src="https://docs.google.com/forms/d/e/1FAIpQLSfOG3Zzke_DKp1UOyaG0cQX5d4buecvtrBd9b9vmw08qPdJMQ/viewform?fbclid=IwAR2cof20cCpPHfLZ1vp9YislX421-J2B24P0bnh71C8TtPel4r_40bitMEQ"
            target="_self"
            height="2490px"
            name="demo"
            className={styles.containerIframe}
          ></iframe>
        </div>
        <Footer> </Footer>
        <Copyright> </Copyright>
      </main>
    </>
  );
}