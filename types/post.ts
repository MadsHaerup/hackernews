type Post = {
    by: string,
    score: number,
    time: number,
    id:number,
    title: string,
    url: string,  
};


interface PostData {
  post: Post,
  authorKarma: number
}

export default PostData;