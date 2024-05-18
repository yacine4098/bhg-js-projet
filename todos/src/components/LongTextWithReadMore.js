import React from 'react';
import Link from 'next/link';
import styles from '@/styles/about.module.css';

const LongTextWithReadMore = () => {
  return (
    <main>
      <div className="h-10"></div>
      <div className={`${styles.whoare} flex justify-center items-center font-bold text-3xl`}>
        Who Are We ?
      </div>
      <div className={styles.twoColumnContainer}>
        <div className={styles.textContainer}>
          <p style={{ width: '100%', color: 'black', fontSize: 20, fontFamily: 'Inika', fontWeight: '500', wordWrap: 'break-word', textIndent: '2em' }}>
            BHG promotion immobilière, spécialisée dans la conception, la réalisation et la vente d’appartement dans le cadre promotionnel, nos résidences proposent des appartement du F2, F3, F4 et des duplex au niveau de chéraga, les dunes et dely brahim en cours de réalisation qui répondent à tous les modes de vie contemporains, les plans ont été conçus avec le plus grand soin et les intérieurs raffinés offre un bien être et un confort qui invitent à de beaux moment de convivialités et de sérénité, les espaces aux beaux volumes ont été pensées au prisme de la lumière et des matériaux pour offrir une performance énergétique acoustique et thermique sans pareille tout en respectant l’intimité totale des appartement...
          </p>
          <Link href="/about">
            <button className={styles.readMoreButton}>Read More</button>
          </Link>
        </div>
        <div className={styles.imageContainer}>
          <img src="pointing-sketch.jpg" alt="Image" />
        </div>
      </div>
    </main>
  );
};

export default LongTextWithReadMore;
