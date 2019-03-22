import { httpGet } from "../../utils/http"

export function getDetailsData(id){
    var result = httpGet(`/api/detail?id=${id}`)
    return result;
}