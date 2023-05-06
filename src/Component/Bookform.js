import React, { useState } from "react";
import { Button, TextField } from "@mui/material";

// props -> name

const BookingForm = (props) => {
  const { name } = props;

  const [userDetail, setUserDetail] = useState({
    name: "",
    email: "",
  });

  const [showForm, setShowForm] = useState(false);

  function handleChange(e) {
    setUserDetail({
      ...userDetail,
      [e.target.name]: e.target.value,
    });
  }

  function handleBookNow() {
    // it will do the logic of opening the form on user click
    setShowForm(true);
  }

  function handleFormSubmit(e) {
    e.preventDefault();
    // it will stor the user movie booking details in session storage

    let movieBookingDetail = {
      MovieName: name,
      userDetail,
    };
    // if no stored data in session
    // get access to array from session storge and add new date to it and then store it again
    let sessionStorageMoviesData = sessionStorage.movieBookingDetail;
    // console.log("movieBookingDetail:-", movieBookingDetail);
    if (!sessionStorageMoviesData) {
      // add data into aaray and store
      sessionStorage.setItem(
        "movieBookingDetail",
        JSON.stringify([movieBookingDetail])
      );
    } else {
      let parseArray = JSON.parse(sessionStorageMoviesData);
      let newArrayStorage = [...parseArray, movieBookingDetail];
      sessionStorage.setItem(
        "movieBookingDetail",
        JSON.stringify(newArrayStorage)
      );
    }
    setUserDetail({
      name: "",
      email: "",
    });
    alert("You Booked your ticket succefully!");
  }

  return (
    <>
      {!showForm ? (
        <Button onClick={handleBookNow} variant="contained" color="primary">
          Book Now
        </Button>
      ) : (
        <form onSubmit={handleFormSubmit}>
          <TextField
            defaultValue={name}
            disabled
            label="Movie Name"
            fullWidth
            margin="normal"
            variant="outlined"
          />

          <TextField
            required
            name="name"
            value={userDetail.name}
            onChange={handleChange}
            label="Your Name"
            fullWidth
            margin="normal"
            variant="outlined"
          />

          <TextField
            required
            name="email"
            value={userDetail.email}
            onChange={handleChange}
            label="Email Address"
            fullWidth
            margin="normal"
            variant="outlined"
          />

          <Button variant="contained" color="primary" type="submit">
            Submit
          </Button>
        </form>
      )}
    </>
  );
};

export default BookingForm;
