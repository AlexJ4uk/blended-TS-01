import axios from "axios";

interface Post {
    userId: number,
    id: number,
    title: string,
    body: string
}

const fetchPosts = async (): Promise<Post[]> => {
  const response = await axios.get("https://jsonplaceholder.typicode.com/posts");
  return response.data;
};

function logPostTitles(posts: Post[]): void {
    posts.slice(0, 3).forEach(post => {
        console.log(`Title: ${post.title}`);
        console.log(`Body: ${post.body}`);
    });
}

const displayPostTitles = async (): Promise<void> => {
  const posts = await fetchPosts();
  logPostTitles(posts);
};

displayPostTitles();