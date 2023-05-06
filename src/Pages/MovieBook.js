import React from "react";
import { Container, Grid } from "@mui/material";
import { useLocation } from "react-router-dom";
import BookingForm from "../Component/Bookform";
import MovieSummary from "../Component/Movie";



function MovieBookingPage() {
    const { state } = useLocation();
    console.log("Movie data fom useLocation", state);
    const { movie } = state;

    return (
        <Container>
            <Grid container spacing={3}>
                <Grid item xs={12} md={6}>
                    <MovieSummary
                        name={movie.show.name}
                        summary={movie.show.summary}
                        img={movie.show.image.original} />
                </Grid>
                <Grid item xs={13} md={6} className="bookingForm">
                    <BookingForm name={movie.show.name} />
                </Grid>
            </Grid>
        </Container>
    );
}

export default MovieBookingPage;
