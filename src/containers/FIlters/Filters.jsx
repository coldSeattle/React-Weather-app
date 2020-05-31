import React, { useEffect } from 'react'
import FiltersUI from '../../components/Filters/FiltersUI'
import { connect } from 'react-redux'
import { genreSelector, withGenreSelector } from '../../redux/selectors/genres'
import { fetchGenres, filterMovies, genreIsFalse, filterMoviesWithGenres } from '../../redux/actions/actions'

const Filters = ({fetchGenres, genres, filterMoviesByGenres, with_genres, genreIsFalse, filterMoviesWithGenres}) => {

    const getGenreHandler = (id, e) => {
        if(e.target.checked) {
            filterMoviesByGenres(Number(id))
            console.log("acitve ",with_genres);

        }
        else {
            genreIsFalse(id)
            console.log("false ", with_genres);
            
        }
        // console.log(id);
        // console.log("target value ", e.target.value);
        // console.log("target check ", e.target.checked);
        // console.log("target id ", e.target.id);
        
        return filterMoviesWithGenres(with_genres)

    }

    useEffect(() => {
        fetchGenres()
    }, [])

    return (

        <FiltersUI 
        getGenreHandler={getGenreHandler}
        genres={genres}
        with_genres={with_genres}
        />
    )
}

const mapStateToProps = state => {
    console.log(state);
    
    return {
        genres: genreSelector(state),
        with_genres: withGenreSelector(state)
    }
}

const mapDispatchToProps = dispatch => {
    return {
        fetchGenres: () => dispatch(fetchGenres()),
        filterMoviesByGenres: id => dispatch(filterMovies(id)),
        genreIsFalse: id => dispatch(genreIsFalse(id)),
        filterMoviesWithGenres: arrOfActiveGenres => dispatch(filterMoviesWithGenres(arrOfActiveGenres))
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Filters)