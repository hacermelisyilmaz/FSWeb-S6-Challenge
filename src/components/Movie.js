import React, { useEffect, useState } from "react";
import axios from "axios";

const Movie = ({ movie, movies }) => {
  const [isHidden, setIsHidden] = useState(true);

  const movieData = movies.filter((film) => film.title === movie)["0"];

  return (
    <div className="Movie">
      <div className="movie-header" onClick={() => setIsHidden(!isHidden)}>
        <h3>{`Episode ${movieData["episode_id"]}: ${movieData.title}`}</h3>
      </div>
      {isHidden || (
        <div className="movie-info">
          <div className="opening-crawl">{movieData["opening_crawl"]}</div>
          <div className="director">directed by {movieData.director}</div>
          <div className="producer">produced by {movieData.producer}</div>
          <div className="release-date">
            Release Date: {movieData["release_date"]}
          </div>
        </div>
      )}
    </div>
  );
};
{
  /*   
  <i class="fa-solid fa-chevron-down"></i>
</div>
{isHidden || (</div>;
}; */
}

export default Movie;
