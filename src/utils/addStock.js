const BASE_URL='/api/stocks/'
async function createStock(options){
    try{
        const sendPost = await fetch(BASE_URL + 'create', options)
        const postResults = await sendPost.json()
        return await postResults
    } catch (error){
        console.log(error)
    }
}

export default createStock;