import React, { useEffect, useState, useCallback } from "react";
import Card from "../../components/card";
import { getPostsApi } from "../../api/posts-api";
import { postsDataNormalize } from "../../utils/normalizer";

const getPosts = getPostsApi();

export default function PostsPage() {
  const [loading, setLoading] = useState(false);
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    async function initialGet() {
      try {
        setLoading(true);
        const data = await getPosts.call("https://my-json-server.typicode.com/savayer/demo/posts");
        const normalizedData = postsDataNormalize(data);

        if(normalizedData.length) {
          setPosts(normalizedData);
        }
        setLoading(false);
      } catch (err) {
        console.log(err);
        setLoading(false);
      }
    }

    initialGet();

    return () => getPosts.cancel();
  }, []);

  const analyticsTrackClick = useCallback((url) => {
    // sending clicked link url to analytics
    console.log(url);
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!loading && posts.length === 0) {
    return <div>You have not Posts yet</div>;
  }

  return (
    <div>
      {posts.map(function (post) {
        return (
          <Card
            key={post.id}
            title={post.title.en}
            linkTitle={post.link_title}
            href={post.link}
            text={post.text}
            linkClassName={post.className}
            target={post.target}
            onClick={analyticsTrackClick}
          />
        );
      })}
    </div>
  );
}
