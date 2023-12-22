// components/Card.js

import CustomInput from '@/components/CustomInput';
import React, { useEffect, useState } from 'react';

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
    <div className='cardborder'>
      <div className='text-white font-semibold px-3 my-2'> Contact </div>

      <div className="cardo bg-white p-4 justify-center items-center ">

        {isMobileScreen ? (
          <div className={`column2`}>
            <CustomInput className={'w-full my-3'} hint='Full Name*' type='text' id='fullName' value={inputs.fullName} onChange={handleInputChange} />
            <CustomInput className={'w-full my-3'} hint='Phone Number*' type='text' id='phoneNumber' value={inputs.phoneNumber} onChange={handleInputChange} />
            <CustomInput className={'w-full my-3'} hint='E-mail*' type='text' id='email' value={inputs.email} onChange={handleInputChange} />
            <CustomInput className={'w-full my-3  h-56'} multi='true'  hint='Message*' type='text' id='message' value={inputs.message} onChange={handleInputChange} />
          </div>
        ) : (
          <>
            <div className={`column flex`}>
              <CustomInput className={'w-8/12 my-2'} hint='Full Name*' type='text' id='fullName' value={inputs.fullName} onChange={handleInputChange} />
              <CustomInput className={'w-8/12 my-2'} hint='Phone Number*' type='text' id='phoneNumber' value={inputs.phoneNumber} onChange={handleInputChange} />
              <CustomInput className={'w-8/12 my-2'} hint='E-mail*' type='text' id='email' value={inputs.email} onChange={handleInputChange} />

            </div>

            <div className={`column flex`}>
            <CustomInput className={'w-8/12 my-2 h-56'} hint='Message*' multi='true' type='text' id='message' value={inputs.message} onChange={handleInputChange} />
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Card;
