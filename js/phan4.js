window.addEventListener("load",function(){
    $(".music-type").click(function(){
        obj=this
        $("html").animate({scrollTop:0},500,function(){
            let show_music_type=$(".show-music-type")
            $(".show-music-type").slideUp()
            for(let p of show_music_type)
                if($(p).find("h1").text()==$(obj).find("h1").text()){
                    $(p).slideDown()
                    $(p).find("h1").css({
                        "background-image": `url("${$(obj).find("img").attr("src")}")`
                    })
                }
        })
    })
})