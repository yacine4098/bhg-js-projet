// components/Card.js

import CustomInput from '@/components/CustomInput';
import React, { useEffect, useState } from 'react';
import styles from '@/styles/card.module.css'
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
famail
} from '@fortawesome/free-solid-svg-icons';

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

  <div className={styles.divContact}>
  <a className={styles.phoneIcon} href='tel:+123456789'>
    <img className={styles.normalIcon} src='phone-fill.svg' alt='Normal Phone Icon' />
    <img className={styles.hoverIcon} src='phone-fill2.svg' alt='Hover Phone Icon' />
  </a>

  <a className={styles.messIcon} href='tel:+1234569'>
    <img className={styles.normalIcon2} src='messenger-fill.svg' alt='Normal Messenger Icon' />
    <img className={styles.hoverIcon2} src='messenger-fill2.svg' alt='Hover Messenger Icon' />
  </a>

  </div>


  </div>

  <div className='flex mt-20 justify-center gap-60'>
    <div className={styles.clm2}>
    <h1 className='text-center mt-5 text-white font-bold text-3xl'>Call Us</h1>
    <h1 className='text-start mt-10 ml-10 text-white font-medium text-xl'>+213 669 63 38 73</h1>
    <h1 className='text-start mt-10 ml-10 text-white font-medium text-xl'>+213 669 63 38 73</h1>


    </div>
    <div className={styles.clm}>    <h1 className='text-center mt-5 text-black font-bold text-3xl'>Contact Us</h1>
    <h1 className='text-start mt-10 ml-10 text-black font-semibold text-xl'>E-mail : Contact@bhg-immobilier.com</h1>
    <h1 className='text-start mt-10 ml-10 text-black font-medium text-xl'>+213 669 63 38 73</h1></div>

  </div>

  <div>
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
    </main>
  );
};

export default Card;
