// pages/projects.js
import styles from '@/styles/about.module.css'
import Gallery from '@/components/Gallery';


const Projects = () => {

  const images = [
    'cover1.jpg',
    'cover2.jpg',
    'cover3.jpg',
    // Add more images as needed
  ];
   const style={width: '100%', color: 'black', fontSize: 20, fontFamily: 'Inika', fontWeight: '500', wordWrap: 'break-word' , textIndent: '2em' };
    return (
      <main>
         <div className="h-10"></div>;
         <div className={`${styles.whoare} flex justify-center items-center font-bold text-3xl`}>
Who Are We ?</div>;

         <div className={styles.twoColumnContainer}>
         <div className={styles.textContainer}>
  <p style={style}>
    BHG promotion immobilière, spécialisée dans la conception, la réalisation et la vente d’appartement dans le cadre promotionnel, nos résidences proposent des appartement du F2, F3, F4 et des duplex au niveau de chéraga, les dunes et dely brahim en cours de réalisation qui répondent à tous les modes de vie contemporains, les plans ont été conçus avec le plus grand soin et les intérieurs raffinés offre un bien être et un confort qui invitent à de beaux moment de convivialités et de sérénité, les espaces aux beaux volumes ont été pensées au prisme de la lumière et des matériaux pour offrir une performance énergétique acoustique et thermique sans pareille tout en respectant l’intimité totale des appartement.
  </p>
  <p style={style}>
    Doté d’une Architecture épurée, finition de luxe portes d’entrées blindés, pré climatisation, chauffage central, ascenseur vidéophone double vitrage isolation thermique et phonique BHG fournit un service personnalisé et attentionné qui travaille en étroite avec ses client pour comprendre leurs besoins et leurs exigences afin de leur offrir les solutions les plus adaptées. Enfin nous sommes fiers de notre engagement envers la qualité et l’intégrité, nous sommes une entreprise éthique et respectueuse de l’environnement et nous travaillons dur pour être un leader dans notre industrie en matière de pratiques commerciales durable.
  </p>
  <p style={style}>
    Nous espérons que cette présentation vous donne un aperçu de notre entreprise et de notre engagement envers nos clients. Si vous chercher un partenaire de confiance pour vous accompagner dans votre projet immobilier N’hésitez pas à nous contacter pour en savoir plus sur nos services.
  </p>
</div>


      <div className={styles.imageContainer}>
        <img src="pointing-sketch.jpg" alt="Image"  />
      </div>
    </div>



      </main>
    );

  };
  
  export default Projects;