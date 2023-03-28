import { Post } from "./Post";

export const ListOfPosts = ({ posts, removePost, handleLike }) => {
  return (
    <ul>
      {posts.map((post) => {
        return (
          <li className="singlePost" key={post.id}>
            <Post post={post} removePost={removePost} />
            <button
              className={`likeButton ${post.userLike ? "liked" : ""}`}
              onClick={() => handleLike(post.id)}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="80px"
                height="80px"
                viewBox="0 0 1024 1024"
                className="icon"
                version="1.1"
              >
                <g id="SVGRepo_bgCarrier" strokeWidth="0" />

                <g
                  id="SVGRepo_tracerCarrier"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />

                <g id="SVGRepo_iconCarrier">
                  <path d="M725.333333 192c-89.6 0-168.533333 44.8-213.333333 115.2C467.2 236.8 388.266667 192 298.666667 192 157.866667 192 42.666667 307.2 42.666667 448c0 253.866667 469.333333 512 469.333333 512s469.333333-256 469.333333-512c0-140.8-115.2-256-256-256z" />
                </g>
              </svg>
            </button>
            {post.likes}
          </li>
        );
      })}
    </ul>
  );
};
