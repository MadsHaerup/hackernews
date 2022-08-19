import type { GetServerSideProps} from 'next';
import { Suspense } from 'react'
import  Header  from '../components/header/Header';
import  SEO  from '../components/seo/SEO';
import styles from '../styles/Home.module.scss';
import PageData from '../types/page';
import {Story} from '../types/page';
import dynamic from 'next/dynamic';
import Title from '../components/title/Title';
import PostList from '../components/posts/PostList';
import errorHandler from '../utils/errorHandler';

const Footer =  dynamic(() => import('../components/footer/Footer').then((mod) => mod.default, (e) => e as never));
const Carousel =  dynamic(() => import('../components/Carousel/Carousel').then((mod) => mod.default, (e) => e as never));


const Home = ({posts, karmaScore, stories}:PageData) => {

  return (
    <div className={styles.container}>
      <SEO />
      <Header />
      <Title text="Top Stories" />
      <main className={styles.main}>
        <PostList posts={posts} karmaScore={karmaScore}  />
      </main>
      
      <Title text="New Stories" />

      <Suspense fallback={`Loading...`}>
        <Carousel stories={stories}  />
      </Suspense>

      <Suspense fallback={`Loading...`}>
        <Footer />
      </Suspense>
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
  const response = await fetch(`https://hacker-news.firebaseio.com/v0/topstories.json?orderBy="$key"&limitToFirst=50`);
  const data = await response.json();

  // create a shallow copy of the original array  - because the Array.sort method mutates the original array.
  let randomPostID = [...data].sort(() => .5 - Math.random()).slice(0,10)

  const jsonPosts = randomPostID.map(async(post) =>{
    try {
      const response = await fetch(`https://hacker-news.firebaseio.com/v0/item/${post}.json`);
      errorHandler(response);
      return await response.json();
    } catch (error) {
      console.log(`An error has occured: ${error}`)
    }
  });

  const returnedData = await Promise.all(jsonPosts);
  const ascSortedData = returnedData.sort((a, b) => a.score - b.score);

  const authors = ascSortedData.map(async(authorName) =>{
    try {
      const response = await fetch(`https://hacker-news.firebaseio.com/v0/user/${authorName.by}.json`);
      errorHandler(response);
      return await response.json();
    } catch (error) {
      console.log(`An error has occured: ${error}`)
    }
  });

  const returnedAuthors = await Promise.all(authors);

  const newStoriesResponse = await fetch(`https://hacker-news.firebaseio.com/v0/newstories.json?orderBy="$key"&limitToFirst=10`);
  const newStoriesData = await newStoriesResponse.json();

  const newStories = newStoriesData.map(async(story:Story) =>{
    try {
      const response = await fetch(`https://hacker-news.firebaseio.com/v0/item/${story}.json`);
      errorHandler(response);
      return await response.json();
    } catch (error) {
      console.log(`An error has occured: ${error}`)
    }
  });

  const returnedNewStories = await Promise.all(newStories);
 

  // Pass data to the page via props
    return { props: { 
      posts: JSON.parse(JSON.stringify(ascSortedData)),
      karmaScore: JSON.parse(JSON.stringify(returnedAuthors)),
      stories: JSON.parse(JSON.stringify(returnedNewStories)),
    } 
  }
}

export default Home;
