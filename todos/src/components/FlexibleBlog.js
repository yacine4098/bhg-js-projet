// components/FlexibleBlog.js
import React from 'react';
import styles from '@/styles/flexible.module.css'

const FlexibleBlog = ({ title, content }) => {
  return (
    <div className={styles.main}>
      <h1 className={styles.title2}>{"title of demo"}</h1>
      {content.map((element, index) => {
        if (element.type === 'text') {
          return <p className={styles.paragraph} key={index}>{element.value}</p>;
        } else if (element.type === 'image') {
          return <img className={styles.img} key={index} src={element.value} alt={"element.alt"} />;
        }
        return null; // Handle other types if needed
      })}
    </div>
  );
};

export default FlexibleBlog;
