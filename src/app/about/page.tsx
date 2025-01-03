"use client";

// Next & React elements
import Image from "next/image";
import { useEffect } from "react";

// Component
import Layout from "../components/Layout/Layout";

// Style
import "./about.scss";

// Images
import Photo1 from "../../../assets/images/photo1.webp";
import Photo2 from "../../../assets/images/photo2.webp";

function About() {
  useEffect(() => {
    document.body.classList.add("gradient-body");
    return () => {
      document.body.classList.remove("gradient-body");
    };
  }, []);

  return (
    <Layout>
      <div className="about-content">
        <section className="about-content__first-section">
          <div className="about-content__first-section__photo-container">
            <Image
              src={Photo1}
              alt="Première présentation de Julie Chaillou"
              className="about-content__first-section__photo-container__photo"
              width={328}
              height={420}
            />
            <div className="about-content__first-section__photo-container__square"></div>
          </div>

          <div className="about-content__first-section__text">
            <h2 className="about-content__first-section__text__title">
              HELLO ! <br></br> MOI, C’EST <span>JULIE</span>. <br></br>
              PASSIONNÉE PAR LA
              <span> CAMÉRA</span> ET LE <span>CINÉMA</span>.
            </h2>

            <p>
              Après trois ans de licence Anglais et Cinéma à la Sorbonne
              Nouvelle, j’ai choisi de me tourner pleinement vers l’audiovisuel
              avec un Bachelor en Création Audiovisuelle que je poursuis
              actuellement. Ce parcours pluridisciplinaire me permet d’enrichir
              ma vision artistique et mon savoir-faire technique.
            </p>

            <br></br>

            <p>
              En parallèle de ma formation, je perfectionne constamment mes
              compétences techniques et artistiques pour explorer de nouvelles
              façons d’exprimer ma créativité.
            </p>

            <br></br>

            <p>
              Mon ambition ? Utiliser mon expertise et ma sensibilité artistique
              pour créer des vidéos uniques qui capturent des moments
              inoubliables.
            </p>
          </div>
        </section>

        <section className="about-content__second-section">
          <div>
            <h2 className="about-content__second-section__text__title">
              UNE AVENTURE <span>CRÉATIVE</span>
            </h2>
            <p>
              Pour moi, penser un film ce n’est pas seulement délivrer une
              œuvre, mais vivre un processus, des rencontres, et des émotions
              qui façonnent le projet. J’aime écrire des scénarios, cadrer,
              monter et réaliser, que ce soit pour des films ou des vidéos
              destinées à la promotion. Chaque projet est une nouvelle aventure
              où je me plonge à fond, toujours avec cette envie de repousser mes
              limites créatives.
            </p>

            <br></br>

            <p>
              Mon objectif est simple : capturer l’émotion, l’authenticité et la
              beauté à travers l’objectif pour raconter des histoires qui
              résonnent profondément, tout en donnant à chaque projet une touche
              personnelle. J’accorde une attention particulière à chaque détail,
              car pour moi, c’est dans ces petites choses que naît la magie. Du
              premier échange à la post-production, je m'investis pleinement
              pour livrer des vidéos uniques.
            </p>
          </div>

          <div className="about-content__second-section__photo-container">
            <Image
              src={Photo2}
              alt="Deuxième présentation de Julie Chaillou"
              className="about-content__second-section__photo-container__photo"
              width={328}
              height={420}
            />
            <div className="about-content__second-section__photo-container__square"></div>
          </div>
        </section>

        <p>
          Aujourd’hui, je suis prête à partager mon travail avec d’autres
          créateurs et artistes, tout en continuant à élargir mes horizons pour
          donner vie à des projets toujours plus audacieux et innovants.
        </p>
      </div>
    </Layout>
  );
}

export default About;
