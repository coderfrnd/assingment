import { Card, Typography } from '@mui/material';
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import './App.css';
import MovieBookingPage from './Pages/MovieBook';
import MoviesPage from './Pages/Pag';

function App() {

  return (
    <BrowserRouter>
      <Link to="/">
        <Card>
          <Typography variant='h1' align='center' className='m-2' sx={{ position: 'sticky', top: 0, zIndex: 1, backgroundColor: 'red', color: 'Black' }}>
            Movie Zone
          </Typography>
        </Card>
      </Link>
      <Routes>
        <Route exact path='/' element={<MoviesPage />} />
        <Route exact path='/bookmovie/:id' element={<MovieBookingPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
