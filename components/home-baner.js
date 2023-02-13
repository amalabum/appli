import styles from "@/styles/Home.module.css";
import Carousel from "react-bootstrap/Carousel";
import Link from "next/link";
const Homebaner = () => {
  return (
    //     import Image from 'next/image'
    // const Example = () => (
    //   <div className="grid-element">
    //     <Image
    //       src="/example.png"
    //       fill
    //       sizes="(max-width: 768px) 100vw,
    //               (max-width: 1200px) 50vw,
    //               33vw"
    //     />
    //   </div>
    // )
    <div className="home_baner">
      <div className="home_main_caroussel">
        <Carousel variant="dark" indicators={false}>
          <Carousel.Item>
            <img className="d-block w-100" src="/1.png" alt="First slide" />
          </Carousel.Item>
          <Carousel.Item>
            <img className="d-block w-100" src="/5.png" alt="Second slide" />
          </Carousel.Item>
          <Carousel.Item>
            <img className="d-block w-100" src="/3.png" alt="Third slide" />
          </Carousel.Item>
        </Carousel>
      </div>
      <p className="homebaner_p">
        <span className="label_home"> Accéder à toutes nos collections </span>{" "}
        <br />
        <span className="a_partir_de">à partir de 4,6$/mois</span>
        <br />
        <Link href="tarifs">
          <button type="submit" className="call_to_action_price">
            Profiter de l'offre →
          </button>
        </Link>
      </p>
    </div>
  );
};
export default Homebaner;
