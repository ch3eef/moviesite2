import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const Container = styled.div`
    
`
const Content = styled.div`
margin: 5px;
width: 100%;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    /* grid-gap: 250px; */
    /* padding: 10px  ; */
    /* grid-template-columns: repeat(4, minmax(0, 1fr)); */
    /* background-color: red; */
    /* overflow-x: hidden; */
    
`
const Wrap = styled.div`
width: 360px;
/* display: flex; */
height: 540px;
margin: 10px;
     border-radius: 10px;
     overflow: hidden;
    border: 3px solid rgba(249, 249, 249, 0.1);
    box-shadow: rgb(0 0 0 / 69% ) 0px 26px 30px -10px,
    rgb(0 0 0  / 73%) 0px 16px 10px -10px;
    transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
    /* background-color: red; */

    img{
        width: 100%;
        height: 100%;
        /* height: 1280px;
        width: 1280px; */
        object-fit: contain;
        /* max-width: 100%; /* Set a maximum width to avoid stretching */
    max-height: 100%; 
    }
    &:hover {
        box-shadow: rgb(0 0 0 / 80% ) 0px 40px 58px -16px,
        rgb(0 0 0  / 72%) 0px 30px 22px -10px;
        transform: scale(1.05);
        border-color: rgba(249, 249, 249, 0.8)
    }
`
// const Container = styled.div`
    
// `

const Movies = () => {
    const [movieList1, setMovieList1] = useState([]);
    const [movieList2, setMovieList2] = useState([]);

    useEffect(() => {
      // Fetch data and update movieList state
      fetch("https://api.themoviedb.org/3/discover/movie?api_key=9330b6829c848d69aac73ca36d3a417c&page=1")
        .then(res => res.json())
        .then(json => {
          if (json.results) {
            setMovieList1(json.results.slice(0, 6));
            console.table(json.results)
          } else {
            console.error("Error fetching movies:", json.status_message);
          }
        })
        .catch(error => {
          console.error("Error fetching movies:", error);
        });



        fetch("https://api.themoviedb.org/3/discover/movie?api_key=9330b6829c848d69aac73ca36d3a417c&page=2")
        .then(res => res.json())
        .then(json => {
          if (json.results) {
            setMovieList2(json.results.slice(4, 7));
            console.log(json.results)
          } else {
            console.error("Error fetching movies:", json.status_message);
          }
        })
        .catch(error => {
          console.error("Error fetching movies:", error);
        });



    }, []);

  
  return (
    <Container>
      <h3>Recommended For You</h3>
      <Content>
        {movieList1.map((movie) => (
          <Wrap key={movie.id}>
            <Link to={`/detail/${movie.id}`}>

            <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} />
            </Link>
          </Wrap>
        ))}
      </Content>
      <h3>Editors Pick🍸</h3>
      <Content>
        {movieList2.map((movie) => (
          <Wrap key={movie.id}>
            <Link to={`/detail/${movie.id}`}>

              <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} />
            </Link>
          </Wrap>
        ))}
      </Content>
       
    </Container>
  )
}

export default Movies
