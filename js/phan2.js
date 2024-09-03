window.addEventListener("load",function(){
    var Audio = document.getElementById("audio");
    function loadmusic(){
        $(".play-left .imgsong img").attr("src",$(".song[playing='true'] .img-song>img").attr("src"))
        $(".play-left .infosong h4").text($(".song[playing='true'] h4").text())
        $(".play-left .infosong p").text($(".song[playing='true'] p").text())
    }
    function next (obj){
        $(".song").attr("playing","false")
        $(obj).attr("playing","true")
        var x=`audio/${$(obj).find("h4").text()}_${$(obj).find("p").text()}.mp3`
        $("#audio").attr("src",x)
        Audio.play()
        loadmusic()
    }
    function loadplaylist(){
        let playlist=document.querySelectorAll(".playlist")
        let playlistsong=document.querySelectorAll(".playlistsong")
        for(let pl of playlist)
            for(let pls of playlistsong)
                if($(pl).find("h1").text()=== $(pls).find("h1").text()){
                    $(pl).find(".img-playlist img").attr("src",$(pls).find(".song .img-song img").attr("src"))
                }
            
    }
    loadplaylist()

    // fix 
    $(".songs").on("click",".song",function(event){
        if ($(event.target).closest('.menu-song,.addpls').length === 0) {
            $(".playlists").css("margin-bottom", "80px")
            $(".playlistsong .song:last-child").css("margin-bottom", "90px")
            $(".singer .song:last-child").css("margin-bottom", "90px")
        }
    })
    $(".scrollleft,.scrollright").remove()



    // tạo danh sách phát
    $(".songs").on("click",".addpls",function(){
        $(".addplaylist").slideDown()
        $(".song").removeClass("choiced")
        $(this).closest(".song").addClass("choiced")
    })

    $(".addplaylist").on("click",".playlist-name h2",function(){
        $(".music .playlistsong").eq($(this).index()).append(`
            <div class="song">
                <div class="img-song"><img src="${ $(".choiced img").attr("src")}" alt="gg"></div>
                <div class="infosong">
                    <h4>${ $(".choiced h4").text()}</h4>
                    <p>${ $(".choiced p").text()}</p>
                </div>
            </div>
            `)
            $(".addplaylist").slideUp()
            loadplaylist()
    })


    // chọn danh sách phát
    // let playlist=document.querySelectorAll(".playlist")
    // for(let pl of playlist)
        $(".right").on("click",".playlist",function(event){
            if ($(event.target).closest(".playall,playshuffle").length === 0){
                $(".playlistsong").slideUp(500)
                let playlistsong=document.querySelectorAll(".playlistsong")
                for(let pls of playlistsong)
                    if($(this).find("h1").text()=== $(pls).find("h1").text())
                        $("html").animate({scrollTop:0},500,function(){
                            $(pls).slideDown(500)
                        }) 
            }
           
        })
    // phát tất cả
    $(".right").on("click",".playall",function(){
        $(".playlistsong").slideUp(500)
        let playlistsong=document.querySelectorAll(".playlistsong")
            for(let pls of playlistsong)
                if($(this).closest(".playlist").find("h1").text()=== $(pls).find("h1").text()){
                    $("html").animate({scrollTop:0},500,function(){
                        $("#shuffle").attr("src","https://img.icons8.com/?size=100&id=GsnQu489OK16&format=png&color=FFFFFF") 
                        next($(pls).find(".song").eq(0))
                        $(pls).slideDown(500)
                    })
                }
                    
    })
    // phát ngẫu nhiên
    $(".right").on("click",".playshuffle",function(){
        $(".playlistsong").slideUp(500)
        let playlistsong=document.querySelectorAll(".playlistsong")
            for(let pls of playlistsong)
                if($(this).closest(".playlist").find("h1").text()=== $(pls).find("h1").text()){
                    $("html").animate({scrollTop:0},500,function(){
                        $("#shuffle").attr("src","https://img.icons8.com/?size=100&id=GsnQu489OK16&format=png&color=7950F2")
                        var x=$(pls).find(".song").length
                        next($(pls).find(".song").eq(Math.floor(Math.random() * (x))))
                        $(pls).slideDown(500)
                    })
                }
                    
    })

    $(".choice-playlist h1").click(function(){
        $(".choice-playlist h1").removeClass("on")
        $(this).addClass("on")
    })
    $("h1.propose-playlist").click(function(){
        $("div.propose-playlist").slideDown()
        $("div.my-playlist").slideUp()
    })
    $("h1.my-playlist").click(function(){
        $("div.propose-playlist").slideUp()
        $("div.my-playlist").slideDown()
    })


    $("#namepl").change(function(){
        if($(this).val()!=""){
            $("div.my-playlist").append(`
                <div class="playlist">
                    <div class="img-playlist">
                        <img src="img/playlist.png" alt="">
                    </div>
                    <div class="info-playlist">
                        <h1>${$(this).val()}</h1>

                    </div>
                    <div class="playlist-bt flex">
                        <div></div>
                        <button class="playall"><img src="https://img.icons8.com/ios-filled/50/FFFFFF/play--v1.png" alt="">Phát tất cả</button>
                        <button class="playshuffle"><img src="https://img.icons8.com/?size=100&id=GsnQu489OK16&format=png&color=FFFFFF" alt="">Trộn bài</button>
                        <div></div>
                    </div>
                </div>
                `)
            $(".music").prepend(`
                <div class="songs playlistsong">
                    <h1>${$(this).val()}</h1>
                </div>    
                `)
            $(".playlist-name").append(`
                <h2>${$(this).val()}</h2>
                `)
        }
    })
})
