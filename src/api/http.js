import axios from "axios";
axios.defaults.timeout =5000;
axios.defaults.withCredentials = true;
axios.defaults.headers = "http://localhost:8080";
export function get(url,params={}){
    return new Promise((resolve,reject)=>{
        axios.get(url,{params:params}).then(rep=>{
            resolve(rep.data);
        }).catch(err=>{
            console.log("err")
            console.log(err)
            reject(err);
        })
    })
}



export function post(url,params={}){
    return new Promise((resolve,reject)=>{
        axios({
            method:"post",
            url:url,
            data:params,
            headers:{'Content-Type': 'application/json; charset=utf-8'}
    }).then(rep=>{
            resolve(rep.data);
        }).catch(err=>{
            console.log("err")
            reject(err);
        })
    })
}
