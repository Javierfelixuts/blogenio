// /pages/posts/index.js

import Link from 'next/link';
import CardPost from '../components/CardPost'
// Simulación de datos de posts (podrían venir de una API o base de datos)
/* const posts = [
  { id: 1, title: 'Primer post', slug: 'primer-post' },
  { id: 2, title: 'Segundo post', slug: 'segundo-post' },
  { id: 3, title: 'Tercer post', slug: 'tercer-post' },
]; */

export default function Posts({ posts }) {

  return (
    <>

    <main className='mx-auto p-2 md:p-8 w-11/12'>
      <h3 className='anton-regular my-4'>Lo más reciente:</h3>
      <div className='w-full '>
      <div className='w-full grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4'>
        {posts.map(post => (
          <Link key={post.id} href={'posts/' + post.id}>
            <CardPost post={post}/>
          </Link>
        ))}
      </div>
      </div>
    </main>
    </>

  );
}

export async function getStaticProps() {
  // Hacer la solicitud a la API de WordPress
  const res = await fetch('https://fernandafamiliar.soy/wp-json/wp/v2/posts');
  const posts = await res.json();

  // Retornar los posts como props
  return {
    props: {
      posts,
    },
  };
}
