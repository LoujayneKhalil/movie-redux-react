import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { useSelector } from "react-redux";

export default function MovieDetails({ handleCloseModal }) {
  const selectedCard = useSelector(
    ({ popupReducer }) => popupReducer.selectedCard
  );

  return (
    <div>
      <div className="pop-up" id="PopUp">
        <div className="close-btn">
          <FontAwesomeIcon icon={faXmark} onClick={handleCloseModal} />
        </div>
        <div className="popup-content">
          <div className="wrapper">
            <img
              src={`https://www.themoviedb.org/t/p/w300_and_h450_bestv2${selectedCard.poster_path}`}
              alt={selectedCard.title}
            />
            <div className="popup-body">
              <h2 className="movie-title">{selectedCard.title}</h2>
              <h3>
                IMDB Rating: {parseFloat(selectedCard.vote_average.toFixed(1))}/10 (
                {selectedCard.vote_count} votes)
              </h3>
              <p className="description">{selectedCard.overview}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
