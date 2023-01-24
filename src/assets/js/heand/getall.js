import axios from "axios";
import {getheaderimg,getall} from "/src/api/index.js";
//获取主页全部的
export const getallf = ()=>{
    // const getalli = getall();
    // const str = [];
    // var starr = [];
    // var sta = {};
    // for (let i = 0; i < getalli.length; i++) {
    //     starr = [];
    //     for (let j = 0; j < getalli[i].data.length; j++) {
    //         (async ()=>{sta.data = (await getheaderimg("http://localhost:8080/gettypebyid",{id:getalli[i].id,workid:getalli[i].data[j].type}))
    //         })();
    //         sta.id = getalli[i].id;
    //         sta.typedata = getalli[i].data[j].typedata;
    //         starr[j] = sta;
    //         sta = {};
    //     }
    //     str[i] = starr;
    // }
    // return str;
}
