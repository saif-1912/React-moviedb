import React, { useEffect, useState } from 'react'
import apicallfunction from '../apicallfunction'
import { Link } from 'react-router-dom'


export default function Show() {

    var [apidata, setapidata] = useState([])

    useEffect(() => {
        apicallfunction('http://localhost:4000/userinfo')
            .then(result => {
                console.log(result)
                setapidata(result)
            })
    }, [])

    function myfunc(id,event){
        // console.log(event)
        // console.log(id)
        if(window.confirm("Are you sure you want to delete")){
            apicallfunction('http://localhost:4000/userinfo/'+id,{
                method:'DELETE'
            })
            .then(result => {
                console.log(result) 
                event.target.parentNode.parentNode.remove()                
            })
        }
    }


    return (
        <div>
            <h2 className='text-center'>All Records</h2>
            <table class="table">
                <thead>
                    <tr>
                        <th scope="col">Name</th>
                        <th scope="col">Place</th>
                        <th scope="col">Email</th>
                        <th scope="col">Edit</th>
                        <th scope="col">Delete</th>
                    </tr>
                </thead>
                <tbody>

                    {
                        apidata && apidata.map((obj =>
                            <tr>
                                <th scope="row">{obj.name}</th>
                                <td>{obj.Place}</td>
                                <td>{obj.email}</td>
                                <td>
                                    <Link to={'/edit/'+obj.id}>Edit</Link>
                                </td>
                                <td>    
                                    <button onClick={(event)=>{myfunc(obj.id,event)}}>Delete</button>
                                </td>
                            </tr>
                        ))
                    }

                </tbody>
            </table>

        </div>
    )
}
