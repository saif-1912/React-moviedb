import { useEffect, useState } from "react";
import apipath from "../env";
import fetchdata from "../functions/fetchdata";


function useFetchapi(extrapath) {
    var [api, setapi] = useState([])

    useEffect(() => {
        console.log(extrapath)
        var finalpath = apipath.moviedbpath + extrapath
        console.log(finalpath)
        fetchdata(finalpath)
            .then(values => {
                console.log(values)
                setapi(values)
            })
    }, [])
    return api
}

export default useFetchapi