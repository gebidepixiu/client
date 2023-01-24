import getalls from "../assets/js/json/header.json"
import ranking from "../assets/js/json/ranking.json"
import {get,post} from "./http.js";
//获取主页
export const getall = ()=>getalls;



//获取主页漫画封面
export const getheaderimg= (gets)=>get("http://localhost:8080/gettypebyid",gets);
//获取更新漫画页面
export const getupimglist= (gets)=>get("http://localhost:8080/updata/getupdata",gets);

//获取分类
export const gettypeall= ()=>get("http://localhost:8080/category/getalltype");

export const gettyplis= (gets)=>post("http://localhost:8080/category/gettypelis",gets);


//获取榜单
export const getranking = ()=>ranking;

export const getranklis= (gets)=>post("http://localhost:8080/ranking/getranklis",gets);


//搜索
export const getsearch = (gets)=>get("http://localhost:8080/search",gets);


//登录
export const getusers = (gets)=>get("http://localhost:8080/getuser",gets);
//注册
export const setadduser = (gets)=>post("http://localhost:8080/setadduser",gets);


//收藏
export const setCollection=(gets)=>post("http://localhost:8080/setCollection",gets);
//收藏
export const remCollection=(gets)=>post("http://localhost:8080/remCollection",gets);


export const getCollection=(gets)=>post("http://localhost:8080/getCollection",gets);



//用户获取全部收藏
export const getallcoll=(gets)=>post("http://localhost:8080/users/getallcoll",gets);

//获取用户信息
export const getalluserins=(gets)=>post("http://localhost:8080/users/getalluserins",gets);

//获取用户信息
export const setalluserins=(gets)=>post("http://localhost:8080/users/setalluserins",gets);

//获取用户头像
export const getuserpos=(gets)=>post("http://localhost:8080/users/getaheadportrait",gets);



//漫画详情
export const getdetaiall=(gets)=>post("http://localhost:8080/detals/getdetaiall",gets);
//获取章节
export const getdetais=(gets)=>post("http://localhost:8080/detals/getdetais",gets);
export const getdetailis=(gets)=>post("http://localhost:8080/detals/getdetailis",gets);


//判断是否免费
export const getchus=(gets)=>post("http://localhost:8080/detals/getchus",gets);

//获取章节
export const getchuslist=(gets)=>post("http://localhost:8080/detals/getcomiclist",gets);
