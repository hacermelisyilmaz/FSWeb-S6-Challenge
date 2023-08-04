import React, { useEffect, useState } from "react";
import axios from "axios";
import Karakter from "./components/Karakter.js";

const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  // Fetch characters from the API in an effect hook. Remember, anytime you have a
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.

  const [input, setInput] = useState("");
  const [chars, setChars] = useState();
  const [films, setFilms] = useState();
  const [page, setPage] = useState(1);

  console.log("Current page: ", page);

  useEffect(() => {
    axios
      .get("https://swapi.dev/api/films/")
      .then((response) => {
        setFilms(response.data[0].results);
      })
      .catch((error) => {
        console.error(error.message);
      })
      .finally(() => {
        console.log("Film data request has been made.");
      });
  }, []);

  useEffect(() => {
    axios
      .get(`https://swapi.dev/api/people/?page=${page}`)
      .then((response) => {
        //console.log(response);
        setChars(response.data);
      })
      .catch((error) => {
        console.error("Catched:", error.message);
      })
      .finally(() => {
        console.log("People data request has been made.");
      });
  }, [page]);

  useEffect(() => {
    axios
      .get(`https://swapi.dev/api/people/?search=${input}`)
      .then((response) => {
        setChars(response.data);
      })
      .catch((error) => {
        console.error("Catched:", error.message);
      })
      .finally(() => {
        console.log("People data request has been made.");
      });
  }, [input]);

  const handleInputChange = (event) => {
    setInput(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  console.log("chars: ", chars);
  console.log("films: ", films);
  console.log("input: ", input);

  return (
    <div className="App">
      <h1 className="Header">Karakterler</h1>
      <form className="search flex-container" onSubmit={handleSubmit}>
        <input
          placeholder="Type e.g. a movie"
          value={input}
          onChange={handleInputChange}
        ></input>
        <button type="submit">Search</button>
      </form>
      <div className="karakterler flex-container">
        {chars &&
          chars.map((char, index) => {
            return <Karakter key={index} char={char} films={films} />;
          })}
      </div>
      <div className="page-buttons">
        <i
          className="fa-solid fa-arrow-left-long"
          onClick={() => {
            page > 1 ? setPage(page - 1) : setPage(1);
          }}
        ></i>
        <button
          type="button"
          className="button-1"
          onClick={() => {
            setPage(1);
          }}
        >
          1
        </button>
        <button
          type="button"
          className="button2"
          onClick={() => {
            setPage(2);
          }}
        >
          2
        </button>
        <button
          type="button"
          className="button3"
          onClick={() => {
            setPage(3);
          }}
        >
          3
        </button>
        <button
          type="button"
          className="button4"
          onClick={() => {
            setPage(4);
          }}
        >
          4
        </button>
        <button
          type="button"
          className="button5"
          onClick={() => {
            setPage(5);
          }}
        >
          5
        </button>
        <button
          type="button"
          className="button6"
          onClick={() => {
            setPage(6);
          }}
        >
          6
        </button>
        <button
          type="button"
          className="button7"
          onClick={() => {
            setPage(7);
          }}
        >
          7
        </button>
        <button
          type="button"
          className="button8"
          onClick={() => {
            setPage(8);
          }}
        >
          8
        </button>
        <button
          type="button"
          className="button9"
          onClick={() => {
            setPage(9);
          }}
        >
          9
        </button>
        <i
          className="fa-solid fa-arrow-right-long"
          onClick={() => {
            page < 9 ? setPage(page + 1) : setPage(9);
          }}
        ></i>
      </div>
    </div>
  );
};

export default App;
