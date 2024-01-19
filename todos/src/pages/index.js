import { Inter } from 'next/font/google'
import Card_item from '@/components/card_item';
import { useState , useEffect , useRef } from 'react';



const inter = Inter({ subsets: ['latin'] })
const cards = [
  {
    title: 'Card 1',
    description: 'This is the first card.',
    imageUrl: 'https://placekitten.com/300/200', // Replace with your image URL
  },

  {
    title: 'Card 1',
    description: 'This is the first card.',
    imageUrl: 'https://placekitten.com/300/200', // Replace with your image URL
  },
  {
    title: 'Card 1',
    description: 'This is the first card.',
    imageUrl: 'https://placekitten.com/300/200', // Replace with your image URL
  },
  {
    title: 'Card 1',
    description: 'This is the first card.',
    imageUrl: 'https://placekitten.com/300/200', // Replace with your image URL
  },

  
];

const contentData = [
  {
    text: 'Welcome To',
    text2: 'BHG Immobilier',
    text3: '',


    imageSrc: 'analog-landscape-city-with-buildings.jpg',
    textStyle: {   top: '6%'   },
    textStyle2: { top: '17%'  },


  },
  {
    text2: 'Construction Antisismique',
    text3:'conforme aux normes européennes',
    imageSrc: 'cover2.jpg',
    textStyle: {   top: '6%'   },
    textStyle2: { top: '17%'  },

  },
  {
    text: '',
    text2: 'Construction Modulaire',
    text3: 'construction sur mesures',


    imageSrc: 'cover3.jpg',
    textStyle: {   top: '6%'   },
    textStyle2: { top: '17%'  },



  },
  // Add more content as needed
];

export default function Home() {
  const timerInterval = 5000; // 6000 milliseconds = 6 seconds

  const [currentIndex, setCurrentIndex] = useState(0);

  const [direction, setDirection] = useState(1); // 1 for increment, -1 for decrement
  const numberOfImages = 3; // Update this based on the number of images you have

  const changeContent = () => {
    setCurrentIndex((prevIndex) => (prevIndex + direction + contentData.length) % contentData.length);
  };



  const resetTimer = () => {
    clearInterval(timerRef.current);
    startTimer();
  };

  const startTimer = () => {
    timerRef.current = setInterval(() => {
      changeContent();
    }, timerInterval);
  };

  useEffect(() => {
    startTimer();

    // Clear the interval when the component is unmounted
    return () => clearInterval(timerRef.current);
  }, [direction]); // Re-run the effect when the direction changes

  const timerRef = useRef();
  return (
          <main>

<div className="imgslide">
      <div className="overlayimg"></div>
      <div className="overlayText" style={contentData[currentIndex].textStyle}>
        {contentData[currentIndex].text}
      </div>
      <div className="overlayText2" style={contentData[currentIndex].textStyle2}>
        {contentData[currentIndex].text2}
      </div>
        <div className="overlayText3" style={contentData[currentIndex].textStyle3}>
        {contentData[currentIndex].text3}
      </div>
      <img className="img" src={contentData[currentIndex].imageSrc} alt="Contact_Img_Slide" />
      <div className="arrow-icons">
  <img
    className="prev-icon"
    src="lleft.png"
    data-original="lleft.png"
    alt="Previous"
    onMouseOver={(e) => e.currentTarget.src = "left.png"}
    onMouseOut={(e) => e.currentTarget.src = e.currentTarget.getAttribute("data-original")}
    onClick={() =>    {changeContent();resetTimer();}       }
  />
  <img
    className="next-icon"
    src="lright.png"
    data-original="lright.png"
    alt="Next"
    onMouseOver={(e) => e.currentTarget.src = "right.png"}
    onMouseOut={(e) => e.currentTarget.src = e.currentTarget.getAttribute("data-original")}
    onClick={() =>       {changeContent();resetTimer();} }
  />
</div>
<button className='overlayButton py-2 px-8'>Contact</button>

    </div>


<div className='containerimg font-bold text-3xl h-64'>
  <h1> Also You Can Invest With Us ! </h1>
<div className='aa  h-10'></div>
  <button className='btn-invest py-2 px-7 text-base  '>Invest</button>

</div>


          <div className='h-9'></div>



    <div className='ml-12 mb-2 font-bold text-black text-3xl sm:text-lg md:text-xl lg:text-2xl xl:text-3xl max-w-xs'>
      Available houses
    </div>



    <div className=' line ml-12 h-0.5 bg-slate-600'></div>



      <div className='h-10 m '>  </div>
      <div className="scroll-container overflow-x-auto whitespace-nowrap ml-10">
      <div className="grid-container">
        {cards.map((card, index) => (
          <div key={index} className="inline-block max-w-xs">
            <Card_item {...card} />
          </div>
        ))}
      </div>
    </div>

      
    </main>

  )
}
