import BASEURL from "./baseUrl"
import commonAPI from "./commonAPI"

//add resume
export const addResumeAPI = async (resume)=>{
    return await commonAPI("POST",`${BASEURL}/all-resumes`,resume)
}
//editResumeApi

//addHistoryAPI - POST - Called by Preview component when finish button clicked
export const addDownloadHistoryAPI = async (resume)=>{
    return await commonAPI("POST",`${BASEURL}/history`,resume)
    //add download cv to json using api call
    
}
//getHistoryAPI - GET : Called by history component when it open in browser (useEffect)
export const getHistoryAPI = async ()=>{
    return await commonAPI("GET",`${BASEURL}/history`,{})
}
//DELETEHistoryAPi - DELETE called by history when delete btn is clicked
export const deleteHistoryAPI = async ()=>{
    return await commonAPI("DELETE",`${BASEURL}/history/${id}`,{})
}