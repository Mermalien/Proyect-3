import { Post } from '../components/Post';
import usePost from "../hooks/usePost";
import {ErrorMessage} from '../components/ErrorMessage';
import { useParams } from 'react-router-dom';
import { Searcher } from '../components/Searcher';
import {filter} from "react";
import { Navigate } from 'react-router-dom';
import { createSearchParams } from 'react-router-dom';


export const PostPage = () => {
  const {id} = useParams();
  const { post, loading, error } = usePost(id);


  if (loading) return <p>Cargando publicación...</p>;
  if (error) return <ErrorMessage message={error}/>;

  return (
    <div>
    <section>
      <h1>Publicación</h1>
      <Post post={post}/>
  </section>
  <section>
     <div  className='searcher'><Searcher>Buscar</Searcher></div>
  </section>
  <Searcher initialValue={filter} onSearch={({ value }) => Navigate({ pathname: "/products", search: createSearchParams({ search: value }).toString() })}></Searcher> 
  </div>
  );
};
