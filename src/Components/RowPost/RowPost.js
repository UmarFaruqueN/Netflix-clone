import React, { useEffect, useState } from 'react';
import {imageUrl} from '../../Constants/constants'
import './RowPost.css'

import axios from '../../axios'


function RowPost(props) {
  const [movie, setMovie] = useState([])


  useEffect(() => {

    axios.get(props.url).then((response) => {
      setMovie(response.data.results)
    }).catch((err) => {
      alert('network error')
    })

  }, [])


  return (<div className='row'>
    <h2 className='textt'>{props.title}</h2>
    <div className='posters'>
      {movie.map((obj) => 
        <img className='poster' src ={`${imageUrl+obj.backdrop_path}`} alt="" />
      )
      }
    </div>
  </div>
  )
}

export default RowPost;
