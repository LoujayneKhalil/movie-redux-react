import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import fetchMovies, { nextPage, previousPage } from "../Movies/movies.actions";
import { closeModal, openModal } from "../MoviesPopUp/popup.actions";
import MovieDetails from "./MovieDestails";

export default function MoviesHomePage() {
  const dispatch = useDispatch();
  const { data, currentPage } = useSelector(
    ({ moviesReducer }) => moviesReducer
  );
  const { selectedCard } = useSelector(({ popupReducer }) => popupReducer);

  useEffect(() => {
    dispatch(fetchMovies(currentPage));
  }, [currentPage]);

  const findHighestNumber = (array, property) => {
    return array.reduce((highest, current) => {
      return current[property] > highest
        ? parseFloat(current[property].toFixed(1))
        : highest;
    }, 0);
  };
  const highestRateNumber = findHighestNumber(data, "vote_average");

  const findHighestNumberTitle = (array, property) => {
    let highestNumber = -Infinity;
    let highestTitle = "";

    array.forEach((obj) => {
      if (obj[property] > highestNumber) {
        highestNumber = obj[property];
        highestTitle = obj.title;
      }
    });
    return highestTitle;
  };

  const topMovieName = findHighestNumberTitle(data, "vote_average");

  const handleOpenModal = (card) => {
    dispatch(openModal(card));
    document.body.style.overflowY = "hidden";
  };
  const handleCloseModal = (e) => {
    e.stopPropagation();
    dispatch(closeModal());
    document.body.style.overflowY = "scroll";
  };
  const handleNextPage = () => {
    dispatch(nextPage(currentPage));
  };
  const handlePreviousPage = () => {
    if (currentPage > 1) {
      dispatch(previousPage(currentPage));
    }
  };

  return (
    <div>
      <div className="container">
        <h2 className="my-4">Movies</h2>
        <div className="stats">
          <h3 style={{ marginBottom: "10px" }}>Stats</h3>
          <h6>Current page: {currentPage}</h6>
          <h6>Number of Movies: {data.length}</h6>
          <h6>Top rated movie: {topMovieName}</h6>
          <h6>Rating: {highestRateNumber}</h6>
        </div>
        <div className="movie-cards">
          <div className="row text-center g-0" id="movieCards">
            {Boolean(selectedCard) && (
              <MovieDetails handleCloseModal={handleCloseModal} />
            )}
            {data.map((data) => (
              <div
                key={data.id}
                className="col-md-3 p-0 d-flex justify-content-center"
              >
                <div
                  className="card single-card mb-3"
                  style={{ width: "220px" }}
                  onClick={() => handleOpenModal(data)}
                >
                  <figure>
                    <img
                      src={`https://www.themoviedb.org/t/p/w300_and_h450_bestv2${data.poster_path}`}
                      className="card-img-top"
                      alt={data.title}
                    />
                  </figure>
                  <div className="card-body d-flex flex-column justify-content-between">
                    <h6 className="card-text">{data.title}</h6>
                    <span className="card-text">
                      {parseFloat(data.vote_average.toFixed(1))}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="turn-page mb-5">
        <button className="previous-page" onClick={handlePreviousPage}>
          previous
        </button>
        <button className="next-page" onClick={handleNextPage}>
          next
        </button>
      </div>
    </div>
  );
}
