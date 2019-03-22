import { httpGet } from "../../utils/http"

export function getSeachListData(city,keyword,page){
    var result = httpGet(`/api/search?city=${city}&keyword=${keyword}&page=${page}`);
    return result;
}