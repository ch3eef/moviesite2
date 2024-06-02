import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import styled from 'styled-components'

const Container = styled.div`
     min-height: calc(100vh - 70px) ;
    padding: 0 calc(3.5vw + 5px);
    position: relative;
`
const Background = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: -1;
    opacity: 0.8;

    img{
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
`
const ImageTitle = styled.div`
    height: 30vh;
    min-height: 170px;
    width: 35vw;
    min-width: 200px;
    margin-top: 60px;

    img{
        width: 100%;
        height: 100%;
        object-fit: contain;
    }
`
const Controls = styled.div`
    display: flex;
    align-items: center;
`
const PlayButton = styled.button`
    border-radius: 4px;
    font-size: 15px;
    padding: 0 24px;
    margin-right: 22px;
    display: flex;
    align-items: center;
    height: 56px;
    background: rgb(249, 249, 249);
    border: none;
    letter-spacing: 1.8px;
    cursor: pointer;

    &:hover {
        background: rgb(198, 198, 198);
    }
`
const TrailerButton = styled(PlayButton)`
    background: rgba(0, 0, 0, 0.3);
    border: 1px solid rgb(249, 249, 249);
    color: rgb(249, 249, 249);
`
const AddButton = styled.button`
    margin-right: 16px;
    width: 44px;
    height: 44px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    border: 2px solid white;
    background-color: rgba(0, 0, 0, 0.6);
    cursor: pointer;

    span {
        font-size: 30px;
        color: white;
    }
`
const GroupWatchButton = styled(AddButton)`
    background: rgb(0, 0, 0);
`
const Subtitle = styled.div`
    color: rgb(249, 249, 249);
    font-size: 15px;
    min-height: 20px;
    margin-top: 26px;
`
const Description = styled.div`
    line-height: 1.4;
    font-size: 20px;
    max-width: 500px;
    margin-top: 16px;
`
// const Container = styled.div`

// `

const Detail = () => {
    const { id } = useParams();
    const [ movie, setMovie ] = useState()
        //grab the movie from database
        useEffect(() => {
            // Fetch details for the specific movie using the id parameter
            fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=9330b6829c848d69aac73ca36d3a417c`)
              .then((res) => res.json())
              .then((data) => {
                setMovie(data);
              })
              .catch((error) => {
                console.error('Error fetching movie details:', error);
              });
          }, [id]);
        console.log("Movie is", movie)
  return (
    <Container>
    {movie ? (
        <>
      <Background>
        <img src={`https://image.tmdb.org/t/p/w1280${movie.backdrop_path}`}/>
      </Background>
      <ImageTitle>
      <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}/>
      </ImageTitle>
      <Controls>
        <PlayButton as={Link} to={`https://vidsrc.xyz/embed/movie/${movie.imdb_id}`}>
            <img src="/images/play-icon-black.png" alt="" />
            <span>PLAY</span>
        </PlayButton>
        <TrailerButton>
               <img src="/images/play-icon-white.png" alt="" />
               <span>TRAILER</span>
        </TrailerButton>
        <AddButton>
            <span>+</span>
        </AddButton>
        <GroupWatchButton>
            <img src="/images/group-icon.png" alt="" />
        </GroupWatchButton>
      </Controls>
      <Subtitle>
        {movie.release_date} . {movie.vote_average} . {Math.floor(movie.runtime / 60)}hrs {movie.runtime % 60}min . {movie.genres.map((genre) => genre.name).join(', ')}
      </Subtitle>
      <Description>
      {movie?.overview || movie?.name || movie?.original_name}
      </Description>
      </>
      ) : (
        <p>Loading...</p>
      )}
    </Container>
  )
}

export default Detail
