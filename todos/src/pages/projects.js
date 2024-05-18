// pages/projects.js
import React from 'react';
import { useState , useEffect } from 'react';
import { collection, getDocs , query , orderBy } from 'firebase/firestore';
import { db } from '@/lib/firebase'; // Adjust the path based on your project structure
import ActiveSlider from '@/components/ActiveSlider'
import Head from 'next/head';

const ProjectsPage = () => {

    const [products, setProducts] = useState([]);

  useEffect(() => {

    const fetchData = async () => {
      try {
        const querySnapshot = await getDocs(
          query(
            collection(db, 'your_collection_name'),
            orderBy('or', 'asc'), // Order by 'soa' field in descending order
          )
        );        const data = querySnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
        setProducts(data);
      } catch (error) {
        console.error('Error fetching data:', error.message);
      }
    };

    fetchData();


    // Clear the interval when the component is unmounted
  }, []); // Re-run the effect when the direction changes
  return (
    <div>
                    <Head>
        <title>Projects- BHG Immobilier</title>
      </Head>
    <ActiveSlider products={products}/>

    </div>
  );
};

export default ProjectsPage;
