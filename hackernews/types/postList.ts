type Post = {
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

interface ListData {
  posts: Post[],
  karmaScore: Karma[],
}

export default ListData;