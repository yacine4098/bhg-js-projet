// components/Card.js

import CustomInput from '@/components/CustomInput';
import React, { useEffect, useState } from 'react';
import styles from '@/styles/card.module.css'


const Card = ({ title, description, imageUrl }) => {
  const [isMobileScreen, setIsMobileScreen] = useState(true);

  // State for the input values
  const [inputs, setInputs] = useState({
    fullName: '',
    phoneNumber: '',
    email: '',
    message: '',
  });

  useEffect(() => {
    const handleResize = () => {
      setIsMobileScreen(window.innerWidth < 768); // Adjust the breakpoint as needed
    };

    handleResize(); // Set initial screen size

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  // Function to handle input changes
  const handleInputChange = (id, value) => {
    setInputs((prevInputs) => ({
      ...prevInputs,
      [id]: value,
    }));
  };

  return (

    <main>


<div className={styles.imgslide}>
  <div className={styles.overlayText}>Contactez Nous</div>
  <img className={styles.img} src='cnmp.jpg' alt='Contact_Img_Slide' />




  </div>

<div className={styles.contdv}>
  <div className={styles.child}>
  <img src="glocation.png" alt="Location" className={styles.ic} />
  <div className={styles.h999}>VISITEZ NOUS</div>
  <a href='https://maps.app.goo.gl/5HxpVDrY939pvJMX9' target="_blank" className={styles.pLocation}> Boulevard Tella Ahcene Route de Cheraga Dely Brahim, Cheraga, Algeria  </a>
<div className={styles.rowicons3}> 
            <img src="time.png" alt="Time" style={{ width: '30px',height:'30px' }} />
            <p className={styles.p999}> Samedi – Jeudi 09h00 – 16h00 </p>


            </div>
  </div>
  <div className={styles.vLine}>
  </div>
  <div className={styles.child}>
  <img src="gphone.png" alt="Phone" className={styles.ic}  />
  <div className={styles.h999}>APPELEZ NOUS</div>
<div className={styles.rowicons3}> 
            <img src="phone-fill.png" alt="Phone" style={{ width: '30px',height:'30px' }} />
            <a  href='tel:+213 770 65 6368' className={styles.pLocation}> +213 770 65 6368  </a>
            


            </div>
            <div className={styles.rowicons4}> 
            <img src="fax-phone.png" alt="Phone" style={{ width: '30px',height:'30px' }} />
            <a  href='tel:023 14 12 57' className={styles.pLocation2}> 023 14 12 57  </a>
            


            </div>

  </div>

</div>




    <div className={styles.cardborder}>
      <div className='text-white font-semibold px-3 my-2'> Contact </div>

    <div className={styles.cardo}>
      <div className={styles.row}>
        {/* First Row with Two Columns */}
        {isMobileScreen ? (
          <div className={styles.column2}>
            <CustomInput className={'w-full my-4'} hint='Full Name*' type='text' id='fullName' value={inputs.fullName} onChange={handleInputChange} />
            <CustomInput className={'w-full my-4'} hint='Phone Number*' type='text' id='phoneNumber' value={inputs.phoneNumber} onChange={handleInputChange} />
            <CustomInput className={'w-full my-4 '} hint='E-mail*' type='text' id='email' value={inputs.email} onChange={handleInputChange} />
            <CustomInput className={'w-full my-4  h-56'} multi='true'  hint='Message*' type='text' id='message' value={inputs.message} onChange={handleInputChange} />
          </div>
        ) : (
          <>
            <div className={`${styles.column} flex`}>
              <CustomInput className={'w-8/12 my-6 '} hint='Full Name*' type='text' id='fullName' value={inputs.fullName} onChange={handleInputChange} />
              <CustomInput className={'w-8/12 my-6'} hint='Phone Number*' type='text' id='phoneNumber' value={inputs.phoneNumber} onChange={handleInputChange} />
              <CustomInput className={'w-8/12 my-6'} hint='E-mail*' type='text' id='email' value={inputs.email} onChange={handleInputChange} />

            </div>

            <div className={`${styles.column} flex`}>
            <CustomInput className={'w-12/12 my-6 h-56'} hint='Message*' multi='true' type='text' id='message' value={inputs.message} onChange={handleInputChange} />
            </div>
          </>
          
        )}
      </div>

      {/* Second Row with the Button */}
      <div className={styles.row2}>
        <button className={`${styles.btnb} text-white`}>Submit</button>
      </div>
    </div>

    </div>

    <iframe className='smmap m-auto '
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3196.5939650795085!2d2.964151474950445!3d36.75631607017364!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x128fb1f7c3ed07c1%3A0x6add910bf286563f!2sSARL%20BHG%20PROMOTION%20IMMOBILIERE!5e0!3m2!1sen!2sdz!4v1707219760312!5m2!1sen!2sdz"
        width="380"
        height="280"
        style={{ border: '0' }}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>

      {/* Map for screens from 620px to 1024px */}
      <iframe className='mdmap m-auto  rounded-lg'
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3196.5939650795085!2d2.964151474950445!3d36.75631607017364!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x128fb1f7c3ed07c1%3A0x6add910bf286563f!2sSARL%20BHG%20PROMOTION%20IMMOBILIERE!5e0!3m2!1sen!2sdz!4v1707219760312!5m2!1sen!2sdz"
        width="600"
        height="380"
        style={{ border: '0' }}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>

      {/* Map for screens larger than 1024px */}
      <iframe className='lgmap m-auto rounded-lg'
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3196.5939650795085!2d2.964151474950445!3d36.75631607017364!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x128fb1f7c3ed07c1%3A0x6add910bf286563f!2sSARL%20BHG%20PROMOTION%20IMMOBILIERE!5e0!3m2!1sen!2sdz!4v1707219760312!5m2!1sen!2sdz"
        width="1000"
        height="600"
        style={{ border: '0' }}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </main>
  );
};

export default Card;
