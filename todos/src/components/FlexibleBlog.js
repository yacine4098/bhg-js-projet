import React from 'react';
import styles from '@/styles/flexible.module.css';

const FlexibleBlog = ({ title, content }) => {
  return (
    <div className={styles.main}>
      {content.map((element, index) => {
        
        if (element.type === 'text') {
          return (<div  className={styles.mainP}>  
            <h1 className='mainText ' key={index}>{element.title} </h1>
            <p className={styles.paragraph} key={index}>{element.value}</p> 
            </div>);
        }
         else if (element.type === 'image') {
          return (<div  className={styles.img}>  
<img className={styles.img2} key={index} src={element.value} alt="Blog element image" />
            </div>);
        }
        return null; // Handle other types if needed
      })}
    </div>
  );
};

export default FlexibleBlog;
