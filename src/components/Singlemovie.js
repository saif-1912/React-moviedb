import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import apipath from '../env'


export default function Singlemovie() {

    let params = useParams()
    // console.log(params)
    console.log(params.movieid)

    var [moviedetails, setmoviedetails] = useState({})
    var [cast, setcast] = useState([])


    useEffect(() => {
        fetch(`https://api.themoviedb.org/3/movie/${params.movieid}?api_key=${apipath.apikey}&language=en-US`)
            .then(res => res.json())
            .then(value => {
                console.log(value)
                setmoviedetails(value)
            })

        fetch(`https://api.themoviedb.org/3/movie/${params.movieid}/credits?api_key=${apipath.apikey}&language=en-US`)
            .then(res => res.json())
            .then(value => {
                console.log(value)
                setcast(value['cast'])

            })


    }, [params.movieid])

    return (
        <div className='container'>
            <h1 className='text-center p-5'>Single Movie Page</h1>
            {
                moviedetails && Object.keys(moviedetails).length > 0 && (
                    <div className='row'>
                        <div className='col-xl-6'>
                            <h3 className='text-uppercase' style={{ 'textDecoration': 'underline' }}>
                                {moviedetails.original_title}</h3>
                            <p>{moviedetails.overview}</p>
                            <p>{moviedetails.vote_average}</p>
                            <p>{moviedetails.status}</p>
                        </div>
                        <div className='col-xl-6'>
                            <img src={apipath.imagepath + '/' + moviedetails.backdrop_path} className='img-fluid' />
                        </div>
                    </div>
                )
            }

            <h1>Movie Cast Details</h1>
            <div className='row'>
                {
                    cast && cast.length > 0 && cast.map(({ original_name, profile_path }) =>
                        <div className='col-xl-2 col-4'>
                            {
                                (profile_path!==null)?(
                                    <img src={apipath.imagepath + '/' +profile_path} className='img-fluid'/>
                                ):(
                                    <img src='https://www.iconfinder.com/icons/2932638/404_icon'/>
                                )
                            }
                            <h4>{original_name}</h4>
                        </div>
                    )
                }
            </div>
        </div>
    )
}

