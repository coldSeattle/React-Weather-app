import React, { useEffect } from 'react'
import MoviesUI from '../../components/Movies/MoviesUI'
import { connect } from 'react-redux'
import { fetchMovies } from '../../redux/actions/actions'
import { movieSelector} from '../../redux/selectors/movies'
const Movies = ({movies, fetchMovies}) => {

    useEffect(() => {   
        fetchMovies()
    }, [])

    return (

        <MoviesUI
        movies={movies}
        />
    )
}

const mapStateToProps = state => {
    console.log(state);

    return {
        movies: movieSelector(state)
    }
}

const mapDispatchToProps = dispatch => {
    
    return {
        fetchMovies: () => dispatch(fetchMovies())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Movies)

