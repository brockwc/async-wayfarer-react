import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Post from '../components/Posts/Post';

const PostContainer = ({ match }) => {
  const [ post, setPost ] = useState({});

  useEffect(() => {
    const getPost = async () => {
      console.log('GETTING POST...')
      const result = await axios.get(`${process.env.REACT_APP_API}/posts/${match.params.postId}`, { withCredentials: true });
      setPost(result.data.data);
    };
    
    getPost();
  }, [match]);

  const article = post.userId ? <Post post={post} showAll={true} /> : <h2>Loading...</h2>;

  return (
    <section className='single-post'>
      {article}
    </section>
  );
};

export default PostContainer;
