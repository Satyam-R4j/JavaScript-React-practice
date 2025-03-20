import React, { useState, useEffect } from "react";
import { Container, PostCard } from "../components";
import appwriteService from "../appwrite/config";

function AllPosts() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    appwriteService.getPost([]).then((posts) => {
      if (posts) {
        setPosts(posts.documents);
      }
    });
  }, []);

  return (
    <div className="flex flex-wrap">
      {posts.map((post) => (
        <div key={post.$id} className="p-2 w-1/4">
          <PostCard posts={post} />
        </div>
      ))}
    </div>
  );
}

export default AllPosts;
