import Vuex from "vuex";
import user from "./user.js";
import imgdata from "./imgdata.js";
import header from "./header.js";
const store = new Vuex.Store({
modules:{
    user,imgdata,header
}
})
export default store;
