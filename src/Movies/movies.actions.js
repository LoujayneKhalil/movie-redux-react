const fetchMovies =(page)=> async(dispatch)=>{
  fetch(`https://api.themoviedb.org/3/trending/movie/week?api_key=b6fd81e534a2088db7e361082bf94045&page=${page}`)
  .then((response) => response.json() , console.log(`https://api.themoviedb.org/3/trending/movie/week?api_key=b6fd81e534a2088db7e361082bf94045&page=${page}`))
  .then((json) => dispatch({ type: "SUCCESS", payload: json.results }))
  .catch((error) => dispatch({ type: "FAILURE", payload: error }));

}

export const nextPage = () => {
  return {
    type: 'SET_NEXT_PAGE'
  };
};

export const previousPage = () => {
  return {
    type: 'SET_PREVIOUS_PAGE'
  };
};

export default fetchMovies;