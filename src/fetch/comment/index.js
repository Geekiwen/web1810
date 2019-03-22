import { httpGet } from "../../utils/http"

export function getCommentData(id){
    var result = httpGet(`/api/comment?id=${id}`);
    return result;
}

