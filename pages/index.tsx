import Head from 'next/head'
import {sanityClient , urlFor} from "../sanity";
import Header from '../components/Header'
import { Post } from '../typings';
import Link from 'next/link';

interface Props {
  posts: [Post];
}

export default function Home({posts} : Props) {
  console.log(posts);
  return (
    <div className="max-w-7xl mx-auto">
      <Head>
        <title>Medium Blog</title>
        <link rel="icon" href="/medium.png" />
      </Head>

      <Header />

      <div className="flex justify-between items-center bg-yellow-400 border-y border-black py-10 lg:py-0">
        <div className="px-10 space-y-5">
          <h1 className="text-8xl max-w-xl font-serif"> <span className="decoration-black decoration-4 underline">Medium</span> is a place to write and connect</h1>
          <h2>It's easy and free to post your tinking on any topic and connect with millions of readers.
          </h2>
        </div>

        <img
          className="hidden md:inline-flex h-32 lg:h-full"
          src="https://firebasestorage.googleapis.com/v0/b/songs-845230.appspot.com/o/Medium-logo.png?alt=media&token=2b8f7c82-ffe6-4dcc-8162-597761959464" alt="" />
      </div>

      {/* Posts */}

      <div className = "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-6 p-2 md:p-6">
        {posts.map(post => (
          <Link key={post._id} href = {`/post/${post.slug.current}`}>
            <div className = "border rounded-lg group cursor-pointer overflow-hidden">
              <img className = "h-60 w-full object-cover group-hover:scale-105 transition-transform duration-200 case-in-out" src= {urlFor(post.mainImage).url()!} />
              <div className= "flex justify-between p-5 bg-white">
                <div>
                  <p className = "text-lg font-bold">{post.title}</p>
                  <p className = "text-xs">{post.description} by {post.author.name}</p>
                </div>
                <img className = "h-12 w-12 rounded-full" src={urlFor(post.author.image).url()!} alt="" />
              </div>
            </div>
          </Link>
        ))}
      </div>

    </div>
  );
}

export const getServerSideProps = async () => {
  const query = `*[_type == "post"]{
   _id,
   title,
   author-> {
    name,
    image
  },
   decription,
   mainImage,
   slug
}`;

const posts = await sanityClient.fetch(query);

return {
  props: {
    posts,
  }
};
};