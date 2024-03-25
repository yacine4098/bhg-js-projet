import { Swiper, SwiperSlide } from "swiper/react";
import { useState, useEffect } from 'react';
import "swiper/css";
import { useRouter } from 'next/router'; // Import useRouter hook for navigation

import "swiper/css/pagination";
import "swiper/css/free-mode";
import { FreeMode, Pagination } from "swiper/modules";
import { RxArrowTopRight } from "react-icons/rx";
import Card_item from '@/components/card_item'; // Assuming Card_item is in the same directory

const ActiveSlider = ({ products }) => {
  // State to track loading state
  const router = useRouter(); // Initialize useRouter hook

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate loading delay
    setTimeout(() => {
      setLoading(false);
    }, 1500);
  }, []); // Dependency array ensures this effect runs only once, when the component mounts

  if (loading) {
    return (
      <div className="flex items-center justify-center h-screen">
        {/* Use your preferred loading indicator, for example, a spinner or circle */}
        <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-purple-500"></div>
      </div>
    );  }
  const slidesPerView = products.length > 2 ? 3 : 2;

  // Function to handle slide click
  const handleSlideClick = (productId) => {
    console.log(`Slide clicked: ${productId}`);
    // Add your navigation logic here
    router.push(`/gal?id=${productId}`);

  };

  return (

    <div className="flex items-center  flex-col   bg-[#6c34af]">

<div className="ml-0 mt-0 mb-20  w-full max-w-full">
    <div className='boxlint ml-10 mt-10 font-bold text-white text-3xl sm:text-lg md:text-xl lg:text-2xl xl:text-3xl '>
      Available houses
      <div className=" h-0.5 bg-slate-300 w-full"></div>

    </div>
  </div>






      <Swiper
        slidesPerView={1}
        spaceBetween={15}
        breakpoints={{
          660: { slidesPerView: 2, spaceBetween: 10 },
          1440: { slidesPerView: slidesPerView, spaceBetween: 10 }
        }}
        freeMode={true}
        pagination={{
          clickable: true,
        }}
        modules={[FreeMode, Pagination]}
        className="max-w-[80%] sm:max-w-[90%]"
      >
        {products.map((product) => (
          <SwiperSlide key={product.houseId}>
            <div className="flex flex-col gap-6 mb-20 group relative shadow-lg text-white rounded-xl px-6 py-8  h-[360px] w-[270px] overflow-hidden cursor-pointer" onClick={() => handleSlideClick(product.houseId)}>
              <div
                className="absolute inset-0 bg-cover bg-bottom"
                style={{ backgroundImage: `url(${product.mainUrl})` }}
              />
              <div className="absolute inset-0 bg-black opacity-10 group-hover:opacity-50" />
              <div className="relative flex flex-col gap-3">
                <p className={`lg:text-[18px] rounded-md w-fit py-1 px-2 ${
    product.status === 'En Cours de Réalisation' ? 'bg-green-500' :
    product.status === 'Projets Finis' ? 'bg-blue-500' : 'bg-red-500'
  }`}>  {product.status} </p>

                  <p className={`lg:text-[18px] font-semibold	 rounded-md w-fit py-1 px-2 ${
    product.soa === 'Vendu' ? 'bg-slate-900' : 'bg-amber-300 text-black '
  }`}>  {product.soa} </p>
              </div>
              <RxArrowTopRight className="absolute bottom-5 left-5 w-[35px] h-[35px] text-white group-hover:text-blue-500 group-hover:rotate-45 duration-100" />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};
export default ActiveSlider;
