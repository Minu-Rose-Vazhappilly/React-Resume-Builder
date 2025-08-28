import BASEURL from "./baseUrl"
import commonAPI from "./commonAPI"

//add resume
export const addResumeAPI = async (resume)=>{
    return await commonAPI("POST",`${BASEURL}/all-resumes`,resume)
}
//editResumeApi -PUT - Called by edit component when update button clicked
export const editResumeAPI = async (id,resume)=>{
    return await commonAPI("PUT",`${BASEURL}/all-resumes/${id}`,resume)
}
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
export const deleteHistoryAPI = async (id)=>{
    return await commonAPI("DELETE",`${BASEURL}/history/${id}`,{})
}
//getResumeAPI - GET called by edit component when its open in browser (useEffect)
export const getAResumeAPI = async (id)=>{
    return await commonAPI("GET",`${BASEURL}/all-resumes/${id}`,{})
}
