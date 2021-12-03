import React, { useEffect, useState } from "react";
import axios from "axios";
import { Movie } from "../../components/movie/Movie";
import { Navbar } from "../../components/navbar/Navbar";
import "./Home.sass";

export function Home() {
  const [movies, setMovies] = useState([]);
  const apiKey = "8cfb3f7b5d20b29a8bb4602b47a77292";
  const page = 1;

  useEffect(() => {
    axios
      .get(
        `https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}&language=pt-BR&page=${page}`
      )
      .then((results) => {
        const movies = results.data.results;
        setMovies(movies);
      });
  });

  return (
    <div id="containerHome">
      <div>
        <Navbar />
      </div>
      <div id="moviesDiv">
        <div id="listMovies">
          {movies.map((movie) => (
            <Movie
              key={movie.id}
              poster_path={
                "https://image.tmdb.org/t/p/w500" + movie.poster_path
              }
              release_date={movie.release_date}
              title={movie.title}
              vote_average={movie.vote_average}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
