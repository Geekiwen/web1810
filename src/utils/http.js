import qs from "querystring"

export function httpGet(url){
    const result = fetch(url)
    return result;
}

export function httpPost(url,data){
    const result = fetch(url,{
        method:"POST",
        headers:{
            'content-type': 'application/x-www-form-urlencoded'
        },
        body:qs.stringify(data)
    })

    return result;
}