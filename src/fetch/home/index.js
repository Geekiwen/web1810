import { httpGet } from "../../utils/http"

export function HomeHotData(city){
    var result = httpGet("/api/homehot?city="+city);
    return result;
}

export function HomeHotData2(city){
    var result = httpGet("/api/homehot2?city="+city);
    return result;
}