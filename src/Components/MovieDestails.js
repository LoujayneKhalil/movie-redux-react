import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { useSelector, useDispatch } from 'react-redux';



export default function MovieDestails({handleCloseModal,movieData}) {

  const {selectedCard} = useSelector(({selectedCardReducer}) => selectedCardReducer);
  const dispatch = useDispatch();

  return (
    <div>
      <div className="pop-up" id="PopUp">
        <div className="close-btn">
          <FontAwesomeIcon icon={faXmark} onClick={handleCloseModal}/>
        </div>
        <div className="popup-content">
          <div className="wrapper">
            <img src={`https://www.themoviedb.org/t/p/w300_and_h450_bestv2${movieData.poster_path}`} alt={movieData.title} />
            <div className="popup-body">
              <h2 className="movie-title">{movieData.title}</h2>
              <h3>IMDB Rating: {movieData.vote_average}/10 ({movieData.vote_count} votes)</h3>
              <p className="description">{movieData.overview}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
