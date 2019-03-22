import { httpPost } from "../../utils/http"

export function getBuyData(id){
    var result = httpPost("/api/buygoods",{
        id:id
    });
    return result;
}