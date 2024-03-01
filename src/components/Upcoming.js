import React from 'react'
import apipath from '../env'
import Moviesbox from './Moviesbox'
import useFetchapi from '../customhook/useFetchapi'


export default function Upcomming() {
  var ansFetch = useFetchapi(`upcoming?api_key=${apipath.apikey}&language=en-US&page=1`)
  console.log(ansFetch)
  return (
    <div>
      <Moviesbox records = {ansFetch} title = "Upcoming"/>
    </div>
  )
}