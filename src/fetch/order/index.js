import { httpGet,httpPost } from "../../utils/http"

export function getOrderData(user){
    var result = httpGet("/api/shopcar?user="+user);
    return result;
}

export function getCommentData(comment){
    var result = httpPost("/api/comment",{
        comment:comment
    })
    return result;
}