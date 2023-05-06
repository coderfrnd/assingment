import React from "react";
import { Button, Card, CardActionArea, CardActions, CardContent, CardMedia, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";



const MovieCard = (props) => {
    const { movie } = props;
    console.log("MovieCard Component:-", movie);

    const navigate = useNavigate();

    function handleClick() {
        
        let movieId = movie.show.id;
        navigate(`/bookmovie/${movieId}`, { state: { movie } });
    }

    return (
        <>
            <Card>
                <CardActionArea>
                    {movie.show.image && movie.show.image.original && (
                        <CardMedia
                            component="img"
                            alt={movie.show.name}
                            height="490"
                            image={movie.show.image.original}
                            title={movie.show.name}
                        />
                    )}
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="h2">
                            {movie.show.name}
                        </Typography>
                        <Typography variant="body2" color="textSecondary" component="p">
                            Language: {movie.show.language}
                            <br />
                            Status: {movie.show.status}
                        </Typography>
                    </CardContent>
                </CardActionArea>
                <CardActions>
                    <Button size="small" color="primary" onClick={handleClick}>
                        Show More
                    </Button>
                </CardActions>
            </Card>
        </>
    );
};

export default MovieCard;
