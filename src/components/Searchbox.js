import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import apipath from '../env'
import Moviesbox from './Moviesbox'

export default function Searchbox() {

    var values = useParams()
    console.log(values)
    console.log(values.moviename)

    var [api, setapi] = useState([])


    useEffect(() => {
        fetch(`https://api.themoviedb.org/3/search/movie?api_key=${apipath.apikey}&language=en-US&query=${values.moviename}& page=1`)

            .then(res => res.json())
            .then(value => {
                console.log(value['results'])                
                setapi(value['results'])
            })

    }, [values.moviename])

    return (
        <Moviesbox records={api} title="Search movie page" />        
    )
}
