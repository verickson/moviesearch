// components/CounterApp.jsx
import { connect } from 'react-redux';
import { loadMovies } from '../actions';
import MovieList from './MovieList';

const mapStateToProps = (state) => {
  return{
    movies:state.movies,
    //requestPending: state.isLoading,
    isError: state.isError,
    errorMessage: state.errorMessage
  }
};

const mapDispatchToProps = (dispatch) => {
  return{
    onDidMount: () => {
      loadMovies
    },
    onSearchChange: (mov) =>{
      dispatch(loadMovies(mov, dispatch));
    }
  }
};

const MovieListApp = connect(
  mapStateToProps,
  mapDispatchToProps
)(MovieList);

export default MovieListApp;
