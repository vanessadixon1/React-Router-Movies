import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom'
import MovieCard from './MovieCard';

export default function Movie(props) {
  const [movie, setMovie] = useState();

  let { id } = useParams();

  console.log(id)
 

  useEffect(() => {
    axios
      .get(`http://localhost:5000/api/movies/${id}`) 
      .then(response => {
        setMovie(response.data)
      })
      .catch(error => {
        console.error(error);
      });
  }, [id]);


  // Uncomment this only when you have moved on to the stretch goals
  // const saveMovie = evt => { }

  if (!movie) {
    return <div>Loading movie information...</div>;
  }

  const { title, director, metascore, stars } = movie;

  return (
    <div className="save-wrapper">
      <MovieCard title={title} director={director} metascore={metascore}>
      <h3>Actors</h3>
            {stars.map(star => (
              <div key={star} className="movie-star">
                {star}
              </div>
            ))}
      </MovieCard>
     
      <div className="save-button">Save</div>
    </div>
  );
}
