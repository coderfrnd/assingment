import axios from "axios";
import React, { useEffect, useState } from "react";
import { Grid } from "@mui/material";
import MovieCard from "../Component/Moviecard";

const url = "https://api.tvmaze.com/search/shows?q=all"

const getMovies = async () => {
    try {
        const response = await axios.get(url)
        console.log('response:-', response);
        return response.data
    } catch (error) {
        console.log('error while getting movies:-', error);
    }
}

const MoviesPage = () => {

    const [movies, setMovies] = useState([])

    useEffect(() => {
        getMovies().then((data) => {
            setMovies(data)
        })
    }, [])

    console.log("MoviesPage Component:-", movies);

    return (
        <Grid container spacing={4}>
            {movies.map((movie) => (
                <Grid item xs={12} sm={6} md={4} lg={3} key={movie.show.id}>
                    <MovieCard movie={movie} />
                </Grid>
            ))}
        </Grid>
    )
}

export default MoviesPage;
