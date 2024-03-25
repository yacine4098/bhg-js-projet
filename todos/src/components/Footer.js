
import styles from '@/styles/Footer.module.css';

const Footer = () => {
    return (
      <footer className={styles.footer}>
        {/* First row with 3 columns */}
        <div className={styles.footerRow}>
          <div className={styles.footerColumn1}>
            {/* Content for the first column */}
            <a href='/'>            <img src="BHG-LOGO.png" alt="Logo" style={{ width: '300px' }} />
</a>


          </div>
          <div className={styles.footerColumn } >
            {/* Content for the second column */}
            <h1 className={styles.h1}>Suivez-nous</h1>
            <div className={styles.rowicons}> 
            <a href="https://www.facebook.com/bhg.promotion.immobiliere" target='_blank'>
  <img src="facebook.png" alt="Facebook" style={{ width: '60px', height: '60px' }} />
</a>            <img src="instagram.png" alt="Instagram" style={{ width: '60px' , height:'60px' }} />
            </div>

            <h1 className={styles.h11}>Nos Localisation</h1>
            <div className={styles.rowicons2}> 
            <img src="location.png" alt="Location" style={{ width: '30px',height:'30px' }} />
            <a href='https://maps.app.goo.gl/5HxpVDrY939pvJMX9' target="_blank" className={styles.pLocation}> Boulevard Tella Ahcene Route de Cheraga Dely Brahim, Cheraga, Algeria  </a>


            </div>





          </div>
          <div className={styles.footerColumn} >
            {/* Content for the third column */}

            
            <h1 className={styles.h11}>Contactez-nous</h1>
            <div className={styles.rowicons2}> 
            <img src="mail.png" alt="mail" style={{ width: '30px',height:'30px' }} />
            <a href='mailto: contact@bhg-immobilier.com' className={styles.pMail}>contact@bhg-immobilier.com  </a>
            </div>
            <div className={styles.rowicons2 }> 
            <img src="phone.png" alt="phone" style={{ width: '30px',height:'30px' }} />
            <a href='tel:+213 770 65 6368' className={styles.pMail}> +213 770 65 6368  </a>
            </div>
            <div className={styles.rowicons2 }> 
            <img src="fax-phone-w.png" alt="phone" style={{ width: '30px',height:'30px' }} />
            <a href='tel:023 14 12 57' className={styles.pMail}> 023 14 12 57  </a>
            </div>
          </div>
        </div>
  
        {/* Second row with horizontal list */}

        <div className={styles.hLine}>
        <div className={styles.hLine2} />

        </div>

        <div className={styles.horizontalList}>
          <a href='/'>Accueil</a>
          <a href='/about'>À Propos</a>
          <a href='/projects'>Nos Produits</a>
          <a href='/contact'>Contact</a>
        </div>
        <div className='h-7'></div>
      </footer>
    );
  };
  
  export default Footer;