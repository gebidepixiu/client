const setimg = {
    vfdos : () => {
    //轮播图
    var b = null;
    return function () {
        if (b!=null){
            clearInterval(b);
        }
        var handsdw = [];
        var a = sets();
        $.ajax({
            url:'../src/assets/js/json/heand.json',
            success:function (geturl){
                handsdw = geturl;
                $(".heand-imgset").html(`
                    <img name="${handsdw[0].name}" src="${handsdw[0].src}">
                `);
                $("#rota").attr(
                    "href",handsdw[0].url
                );
                b = setInterval(function (){
                    a("true");
                },5000);
            }
        })

        $(".heand-imgset").mouseleave(
            function (){
                b = setInterval(function (){
                    a("true");
                },4000)
            }
        )
        $(".heand-imgset").mouseenter(
            function (){
                clearTimeout(b);
                a("false");
            }
        )


        // 轮播图循环
        function sets(){
            var jh = null;
            return function (jdd){
                if (jh){
                    clearTimeout(jh);
                }
                if (jdd==="false"){
                    return;
                }
                jh = setTimeout(function (){
                    f();
                },1000);
            }
        }

        function f() {
            var jks = "";
            var nam =  $(".heand-imgset>img").attr("name");
            for (let i = 0; i < handsdw.length; i++) {
                if (handsdw[i].name==nam){
                    f1(i,nam);
                    $(".heand-imgset>img:nth-child(2)").fadeOut(1000,function (){
                        $(".heand-imgset>img:nth-child(2)").remove();
                    });
                }
            }
        }
        function f1(sn,nm) {
            if (sn!=4){
                $(".heand-imgset").prepend(`
                    <img name="${handsdw[sn+1].name}" src="${handsdw[sn+1].src}">
                `);
                $("#rota").attr(
                    "href",handsdw[sn+1].url
                );
            }else {
                $(".heand-imgset").prepend(`
                    <img name="${handsdw[0].name}" src="${handsdw[0].src}">
                `)
                $("#rota").attr(
                    "href",handsdw[0].url
                );
            }
        }
    }
    }

};
export default setimg;
