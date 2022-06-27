import styled from 'styled-components';
import { useEffect, useState } from "react";
import Head from "next/head";
import { useDispatch, useSelector } from "react-redux";
import { addPostAction, removePostAction, fetchPostsAction } from "../redux/actions/postAction";

const InputBox = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  margin-bottom: 35px;

  & button {
    background: white;
    color: palevioletred;

    font-size: 1em;
    padding: 0.25em 1em;
    border: 2px solid palevioletred;
    border-radius: 5px;
    flex-grow: 0;
    cursor: pointer;

    &:hover {
      color: white;
      background: palevioletred;
    }
  }

  & input {
    flex-grow: 1;
    margin-right: 10px;
    border-radius: 5px;
    border: 2px solid #ccc;
    padding: 0.25em 1em;

    &:focus {
      border-color: palevioletred;
      outline: none;
    }
  }
`;

const Wrapper = styled.main`
  padding: 1em;
  min-height: 100vh;
`;

const PostCard = styled.div`
  border: 1px solid #ccc;
  border-radius: 8px;
  padding: 10px 15px;
  margin-bottom: 10px;
  display: flex;

  &:last-child {
    margin-bottom: 0;
  }

  &:hover {
    border-color: palevioletred;
  }

  & span {
    flex-grow: 0;
    margin-right: 30px;
    font-size: xx-large;
    font-weight: bold;
  }

  & div.action {
    display: flex;
    flex-direction: row;
    place-items: center;

    & button {
      background: #ccc;
      border-radius: 5px;
      padding: 5px;
      cursor: pointer;
      
      &:first-child {
        margin-right: 3px;
      }
      
      & svg {
        width: 2em;
        height: 1.5em;
      }
    }
  }

  & div.content {
    flex-grow: 1;
    margin-right: 30px;

    & h4 {
      font-weight: bold;
      font-size: larger;
      margin: 0 0 10px 0;
    }
  
    & p {
      margin: 0;
      color: #888;
    }
  }
`;

export default function Home() {
  const dispatch = useDispatch(); 

  const posts = useSelector((state) => state.app.posts);
  const [post, setPost] = useState("");

  useEffect(() => {
    dispatch(fetchPostsAction());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <Head>
        <title>Learn Redux Saga - NextJs</title>
        <meta name="title" content="Learn Redux Saga - NextJs" />
        <meta name="description" content="Learn how to configure redux-saga with serverside NextJS" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Wrapper>
        <h1>All Posts</h1>
        
        <InputBox>
          <input type={"text"} placeholder="Title of the post" value={post} onChange={e => setPost(e.target.value)} />
          <button type="button" onClick={() => {
            dispatch(addPostAction({
              title: post,
              body: '-'
            }))
            setPost('');
          }}>Add Post</button>
        </InputBox>

        {posts?.map((post, index) => (
          <PostCard key={`post_${index}`}>
            <span>#{index+1}</span>
            <div className='content'>
              <h4>{post.title}</h4>
              <p>{post.body}</p>
            </div>
            <div className='action'>
              <button onClick={() => {
                dispatch(removePostAction(index));
              }}>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                </svg>
              </button>
              <button>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
                </svg>
              </button>
            </div>
          </PostCard>
        ))}
      </Wrapper>
    </>
  );
}
