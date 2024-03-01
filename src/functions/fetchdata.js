async function fetchdata(finalpath) {
    console.log(finalpath)    
    var res = await fetch(finalpath)
    var response = await res.json();
    console.log(response)
    return response['results']
}

export default fetchdata 