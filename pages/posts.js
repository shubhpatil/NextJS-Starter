import Link from "next/link";

export async function getStaticProps() {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts`);
  const posts = await res.json();
  return {
    props: { posts },
  };
}

function posts({ posts }) {
  return (
    <div>
      <h2>
        <Link href="/">
          <a>Back to home</a>
        </Link>
      </h2>
      <img src="/vercel.svg" alt="logo" />

      {posts.map((post) => (
        <Link key={post.id} href={`/posts/${post.id}`}>
          <div className="card">
            <h3>{post.id}</h3>
            <p>
              <b>Title: </b>
              {post.title}
            </p>
            <p>
              <b>Body: </b>
              {post.body}
            </p>
          </div>
        </Link>
      ))}

      <style jsx>{`
        .card {
          box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
          transition: 0.3s;
          width: 50%;
          padding: 5px;
          margin: 10px;
          cursor: pointer;
        }

        .card:hover {
          box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
        }
      `}</style>
    </div>
  );
}

export default posts;
