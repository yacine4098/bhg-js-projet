import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import Gallery from '@/components/Gallery';
import FlexibleBlog from '@/components/FlexibleBlog';
import { collection, getDocs, where, query } from 'firebase/firestore';
import { db } from '@/lib/firebase'; // Adjust the path based on your project structure
import Head from 'next/head';


const Gal = () => {
  const router = useRouter();
  const { id } = router.query;

  // Now you have access to the id parameter
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);


  useEffect(() => {
    const fetchData = async () => {
      try {
        const blogsCollection = collection(db, 'your_collection_name');
        const q = query(blogsCollection, where('houseId', '==', id));
        const blogsSnapshot = await getDocs(q);
        const fetchedBlogs = [];
        blogsSnapshot.forEach((doc) => {
          fetchedBlogs.push({ id: doc.id, ...doc.data() });
        });
        setBlogs(fetchedBlogs);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching blogs:', error);

      }
    };

    if (id) {
      fetchData();
    }
  }, [id]);

  if (!blogs[0]) {
    return (
      <div className="flex items-center justify-center h-screen">
        {/* Use your preferred loading indicator, for example, a spinner or circle */}
        <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-purple-500"></div>
      </div>
    );  }

  if (loading) {
    return (
      <div className="flex items-center justify-center h-screen">
        {/* Use your preferred loading indicator, for example, a spinner or circle */}
        <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-purple-500"></div>
      </div>
    );  }



  return (

    <main>
                    <Head>
        <title>{blogs[0].houseName}</title>
      </Head>
      <div className="h-10"></div>
      {/* Render your gallery component here */}

    <div></div>
      <Gallery name={blogs[0].houseName} desc={blogs[0].houseDesc} mainUrl={blogs[0].mainUrl} images={blogs[0].imageUrls} />
      <div className="h-10"></div>
      {/* Render your blog component here */}
      
      {blogs[0].blogs && blogs[0].blogs.length > 0 ? (
      <FlexibleBlog title="Title 1" content={blogs[0].blogs} />
    ) : (
      <div></div>


    )}

    <div className='h-10 '></div>

    <iframe className='MapPro rounded-lg'
        src={blogs[0].src}

        style={{ border: '0' }}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    <div className='h-10'></div>

    </main>
  );
};

export default Gal;
