import React, { useState } from "react";
import Movie from "./Movie";

const Karakter = ({ char, films }) => {
  const [isHidden, setIsHidden] = useState(true);

  let dir = isHidden ? "down" : "up";

  return (
    <div className="Karakter">
      <div
        className="char-header flex-container"
        onClick={() => {
          setIsHidden(!isHidden);
        }}
      >
        <h2>{char.name}</h2>
        <i className={`fa-solid fa-chevron-${dir}`}></i>
      </div>
      {isHidden || (
        <ul className="char-info">
          <li className="char-gender">gender: {char.gender}</li>
          <li className="char-height">height: {char.height}</li>
          <li className="char-mass">mass: {char.mass}</li>
          <li className="char-birth-year">birth year: {char["birth_year"]}</li>
          <li className="char-eye-color">eye color: {char["eye_color"]}</li>
          <li className="char-hair-color">hair color: {char["hair_color"]}</li>
          <li className="char-skin-color">skin color: {char["skin_color"]}</li>
          <li className="char-appears-in">
            appears in {char.films.length} movies
            {char.films.map((film, index) => {
              console.log(film);
              return <Movie key={index} movie={film} movies={films} />;
            })}
          </li>
        </ul>
      )}
    </div>
  );
};

export default Karakter;
