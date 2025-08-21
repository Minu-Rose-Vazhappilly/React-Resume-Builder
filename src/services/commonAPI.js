import axios from "axios"

const commonAPI = (httpMethod,url,reqBody)=>{
    
    axios({
        method:httpMethod,
        url,
        data:reqBody
    })
}