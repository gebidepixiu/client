const header = {
    state(){
        return {
            topsttypid: "",//头部类型
            topsid: "",//头部分页
        }},
    getters:{
        topsttypid:(state)=>{
            let topsttypid = state.topsttypid;
            if (!topsttypid){
                topsttypid =  window.sessionStorage.getItem("topsttypid");
            }
            return topsttypid;
        },
        topsid:(state)=>{
            let topsid = state.topsid;
            if (!topsid){
                topsid =  window.sessionStorage.getItem("topsid");
            }
            return topsid;
        }
    },
    mutations:{
        settopsid:(state,topsid)=>{
            state.topsid = topsid;
            window.sessionStorage.setItem("topsid",JSON.stringify(topsid))
        },
        settopsttypid:(state,topsttypid)=>{
            state.topsttypid = topsttypid;
            window.sessionStorage.setItem("topsttypid",JSON.stringify(topsttypid))
        }

    }
}
export default header;
