import url from '../node_env.js'

async function dataprocess(path, extra) {
    var response = await (url.nodeapipath + path, extra)
    console.log(response)
    var result = await response.json()
    console.log(result)
    return result
}

export default dataprocess