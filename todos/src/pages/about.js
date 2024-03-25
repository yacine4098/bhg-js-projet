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
    <div className={styles.textContainer }>

<p style={style}>      EURL BELAID – Société créée en 2001, spécialisée dans la construction immobilière sise a Alger, Algerie .<br/><br/></p>
<p style={style}>  La société a jusqu’à présent réalisé plusieurs projets immobiliers comme celui de Ben Merabet – Bordj El Kiffan, Alger Un magnifique projet dans un site calme à proximité de l’aéroport international d’Alger, entouré d’installations d’importance régionale.<br/><br/></p>
<p style={style}>        De plus, nous réalisons tous types d’aménagement d’espaces tels que terrasses, jardins et piscines.
Nous avons également introduit plusieurs nouvelles techniques de construction telles que la E3D, la construction antisismique et la construction modulaire.</p>

      </div>
      <div className={styles.imageContainer}>
        <img src="pointing-sketch.jpg" alt="Image"  />
      </div>
    </div>



      </main>
    );

  };
  
  export default Projects;
  