import BASEURL from "./baseUrl"
import commonAPI from "./commonAPI"

//add resume
export const addResumeAPI = (resume)=>{
    return commonAPI("POST",`${BASEURL}/all-resumes`,resume)
}
//editResumeApi
//addHistoryAPI