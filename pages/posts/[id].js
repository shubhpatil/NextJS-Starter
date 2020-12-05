import Link from "next/link";

export async function getStaticPaths() {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts`);
  const posts = await res.json();
  const paths = posts.map((post) => `/posts/${post.id}`);
  return {
    paths,
    fallback: false,
  };
  // return {
  //   paths: [],
  //   fallback: true,
  // };
}

export async function getStaticProps({ params }) {
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${params.id}`
  );
  const post = await res.json();
  return {
    props: { post },
  };
}

function post({ post }) {
  return (
    <div>
      <div>
        <Link href="/posts">
          <a>Go Back</a>
        </Link>
      </div>

      <div>
        <h1>{post.id}</h1>
        <h3>Name: {post.title}</h3>
        <h3>Email: {post.body}</h3>
      </div>
    </div>
  );
}

export default post;
