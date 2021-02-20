import React from 'react';

export default function MovieCard ({title, director,metascore, children}) {
  return (
    <div className="movie-card">
      <h2>{title}</h2>
      <div className="movie-director">
        Director: <em>{director}</em>
      </div>
      <div className="movie-metascore">
        Metascore: <strong>{metascore}</strong>
      </div>
      {children}
    </div>
  )
}

