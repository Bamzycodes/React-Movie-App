
import React from 'react';
import './App.css';
import Nav from "./Components/Nav/Nav";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import {  useState, useRef } from 'react';
import moviesData from './data';



function App() {

        const refer = useRef(null);
              const [movie, setMovie] = useState([]);
              const [loading, setLoading] = useState(false);
              
              const getMovie = (e) => {
                e.preventDefault();
                let currentValue = refer.current.value.trim(); 

                if(currentValue.length !== 0){
                  setLoading(true)


                // Simulate fetching data from the local JSON file
                const filteredMovies = moviesData.filter(movie => movie.Title.toLowerCase().includes(currentValue.toLowerCase()));
    console.log(filteredMovies)
    setMovie(filteredMovies);

    setLoading(false);
}

}

            function loadMovie(index){
              // console.log(movie[index])

              let single_movie = []
              single_movie.push(movie[index])

              setMovie(single_movie)
              
}

    
  return (
      <>
         <Nav />

        <div className="container">
    <div className='col-8 '>
       <form className="d-flex">
          <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" ref={refer}/>
          <button className="btn btn-outline-success" type="button" onClick={getMovie}>Search</button>
        </form>
    </div>

  </div>
        
        <div className='container my-3' >
        {loading ? <div className="d-flex justify-content-center">
  <div className="spinner-border" role="status">
    <span className="sr-only">Loading...</span>
  </div>
</div>: <div></div>}
        {movie ? <div className='row'>
          {
            movie.map((value, index) => {
              return (
              <div className='card'key={index}>
                <div className="image-container" style={{width: "18rem"}}>
                  <img src={value.Poster} className="card-img-top" alt="..." />
                  <div className="card-body">
                    <h3 className="card-title">{value.Year}</h3>
                    <h4 className="card-text"> {value.Title} </h4>
                    
                  </div>
                </div>
              </div>
              )
            })
          }
        </div>: <div style={{color: 'red' }}>No Search result</div>}
      </div>
      
      </>
  );
}

export default App;