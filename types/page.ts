type Post = {
    by: string,
    score: number,
    time: number,
    id:number,
    title: string,
    url: string,  
};

export type Story = {
  by: string,
  score: number,
  time: number,
  id:number,
  title: string,
  url: string,  
};

type Karma = {
    id: string,
    karma: number
};

interface PageData {
  posts: Post[],
  karmaScore: Karma[],
  stories: Story[]
}

export default PageData;