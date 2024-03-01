async function apicallfunction(path,extra={}) {
    var res = await fetch(path,extra)
    var result = res.json()
    return result

}

export default apicallfunction