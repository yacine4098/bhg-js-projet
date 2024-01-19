
import styles from '@/styles/Footer.module.css';

const Footer = () => {
    return (
      <footer className={styles.footer}>
        {/* First row with 3 columns */}
        <div className={styles.footerRow}>
          <div className={styles.footerColumn1}>
            {/* Content for the first column */}
            <img src="BHG-LOGO.png" alt="Logo" style={{ width: '300px' }} />


          </div>
          <div className={styles.footerColumn } >
            {/* Content for the second column */}
            <h1 className={styles.h1}>Suivez-nous</h1>
            <div className={styles.rowicons}> 
                          <img src="facebook.png" alt="Facebook" style={{ width: '60px',height:'60px' }} />
            <img src="instagram.png" alt="Instagram" style={{ width: '60px' , height:'60px' }} />
            </div>

            <h1 className={styles.h11}>Nos Localisation</h1>
            <div className={styles.rowicons2}> 
            <img src="location.png" alt="Location" style={{ width: '30px',height:'30px' }} />
            <a href='https://maps.app.goo.gl/5HxpVDrY939pvJMX9' target="_blank" className={styles.pLocation}> Boulevard Tella Ahcene Route de Cheraga Dely Brahim, Cheraga, Algeria  </a>


            </div>





          </div>
          <div className={styles.footerColumn} >
            {/* Content for the third column */}
          </div>
        </div>
  
        {/* Second row with horizontal list */}
        <div className={styles.horizontalList}>
          <span>Home</span>
          <span>About Us</span>
          <span>Contact</span>
          <span>Invest</span>
        </div>
      </footer>
    );
  };
  
  export default Footer;