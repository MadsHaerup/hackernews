import type { GetServerSideProps} from 'next';
import { Footer } from '../components/footer/Footer';
import { Header } from '../components/header/Header';
import { PostItem } from '../components/posts/PostItem';
import { SEO } from '../components/seo/SEO';
import styles from '../styles/Home.module.scss';
import PageData from '../types/posts';


const Home = ({posts, karmaScore}:PageData) => {

  return (
    <div className={styles.container}>
      <SEO />
      <Header />
      <main className={styles.main}>
      {
        posts.map((post, i)=>(
          post.by === karmaScore[i].id ?  <PostItem key={post.id} post={post} authorKarma={karmaScore[i].karma} /> : null
        ))
      }
      </main>

      <Footer />
    </div>
  )
}

// This gets called on every request
export const getServerSideProps: GetServerSideProps = async ({ req, res }:any) => {
  res.setHeader(
    'Cache-Control',
    'public, s-maxage=10, stale-while-revalidate=59'
  );
  // Fetch data from external API
  const response = await fetch(`https://hacker-news.firebaseio.com/v0/topstories.json`);
  const data = await response.json();

  // create a shallow copy of the original array  - because the Array.sort method mutates the original array.
  let randomPostID = [...data].sort(() => .5 - Math.random()).slice(0,10)

  const jsonPosts = randomPostID.map(async(post) =>{
    const response = await fetch(`https://hacker-news.firebaseio.com/v0/item/${post}.json`);
    return await response.json();
  });

  const returnedData = await Promise.all(jsonPosts);
  const ascSortedData = returnedData.sort((a, b) => a.score - b.score);

  const authors = ascSortedData.map(async(authorName) =>{
    const response = await fetch(`https://hacker-news.firebaseio.com/v0/user/${authorName.by}.json`);
    return await response.json();
  });

  const returnedAuthors = await Promise.all(authors);

  // Pass data to the page via props
    return { props: { 
      posts: JSON.parse(JSON.stringify(ascSortedData)),
      karmaScore: JSON.parse(JSON.stringify(returnedAuthors))
    } 
  }
}

export default Home;
