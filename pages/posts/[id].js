// /pages/posts/[slug].js

import Image from 'next/image';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import CardPost from '../../components/CardPost'

export default function PostDetail() {
  const router = useRouter();
  
  const { id } = router.query;
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPost = async () => {
      try {
        const res = await fetch(`https://fernandafamiliar.soy/wp-json/wp/v2/posts/${id}`);
        const data = await res.json();
        console.log("data: ", data);
        setPost(data);
      } catch (error) {
        console.error('Error fetching post:', error);
      } finally {
        setLoading(false);
      }
    };
  
    if (id) {
      fetchPost();
    }
  }, [id]);

  if (loading) {
    return <div>Loading...</div>;
  }
  
  return (
    <>
    <button className='m-4' onClick={() => router.back()}>
      <Image className='hover:text-red-300' src="/back.svg" height={30} width={30} alt='back'/>  
    </button>
    <div  className='p-2 rounded-xs shadow-slate-300 w-full sm:w-8/12  mx-auto'>
              <div className='flex flex-col-reverse sm:flex-row gap-6'>
              <Image 
                src={post.jetpack_featured_media_url}
                width={400}
                height={400}
                alt="noticia" 
                className='sm:w-6/12 w-full rounded-lg mb-10'
                />
                
                <h1 className='my-2 anton-regular text-3xl text-start break-words break-all'>{post.title.rendered.toUpperCase()}</h1>
                
              </div>
              <div className='text-gray-400 text-sm m-0 break-words break-all' dangerouslySetInnerHTML={{ __html: post.content.rendered}}></div>
            </div>
    </>
   
  );
}

