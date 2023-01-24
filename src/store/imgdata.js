const imgdata={
    state(){
        return{
            allimg:false    //漫画头部图
        }
    },
    getters:{
        allimg:state=>{
            let allimg = state.allimg;
            return allimg;
        }
    },
    mutations:{
        setallimg:(state,allimg)=>{

            state.allimg = allimg;

        }
    }
}
export default imgdata;
