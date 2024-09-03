window.onload=function(){
    var Audio = document.getElementById("audio");
    add()

    // thêm menu_song
    function add(){
        let addpls=$(".song")
        let addplaysit=`
            <div class="addpls">
                <div class="flex">
                    <img src="https://img.icons8.com/ios-glyphs/50/FFFFFF/playlist--v1.png" alt="playlist--v1"/>
                    <h6>Thêm vào danh sách phát</h6>
                </div>
            </div>
        `
        addpls.append(addplaysit)
        $(".infosong").append('<button class="menu-song"><img src="https://img.icons8.com/ios-glyphs/50/FFFFFF/menu-2.png" alt="menu-2"/></button>')
    
    }    
    
    // thêm vào danh sách phát
    $(".songs").on("click",".menu-song",function(){
        $(this).closest(".infosong").siblings(".addpls").toggle(300)
    })
    $(".songs").on("mouseleave",".song",function(){
        $(".addpls").hide(300)
    })
    $(".play-left").on("click",".menu-song",function(){
        $(this).closest(".cd_infosong").siblings(".addpls").toggle(300)
    })
    $(".left").on("mouseleave",".play-left",function(){
        $(".addpls").hide(300)
    })
    
    
    // tìm kiếm 
        // click nút delete
        $(".delete").click(function(){
            $(this).closest(".close").slideUp()
        })
    let searchtext=document.getElementById("searchtext")
    // let searchbt=document.getElementById("searchbt")
    searchtext.onchange=function(){
        $("html").animate({scrollTop:0},500,function(){
            if(searchtext.value!==""){
                // xóa bài hát tìm ở lần trước
                $(".wrap_no_search").slideUp()
                let remove_search_name=document.querySelectorAll(".search-namesong .song")
                if (remove_search_name.length > 0) {
                    for (let i = 0; i < remove_search_name.length; i++) {
                        remove_search_name[i].remove();
                    }
                    let search_song=document.querySelector(".search-namesong")
                    search_song.style.display="none"
                }
                let remove_search_singer=document.querySelectorAll(".search-singer .song")
                if (remove_search_singer.length > 0) {
                    for (let i = 0; i < remove_search_singer.length; i++) {
                        remove_search_singer[i].remove();
                    }
                    let search_song=document.querySelector(".search-singer")
                    search_song.style.display="none"
                }
    
                // tìm theo tên bài hát
                let namesong=document.querySelectorAll(".song h4")
                for( let searchsong of namesong)
                    if(searchsong.innerText.toLowerCase().includes(searchtext.value.toLowerCase())===true){
                        let p=document.querySelector(".search-show .search-namesong .songs")
                        let img=searchsong.closest(".infosong").previousElementSibling.children[0].src
                        let singer=searchsong.nextElementSibling.innerText
                        let addsearch=`
                        <div class="song">
                            <div class="img-song"><img src="${img}" alt="gg"></div>
                            <div class="infosong">
                                <h4>${searchsong.innerText}</h4>
                                <p>${singer}</p>
                            </div>
                        </div>
                        `
                        p.innerHTML=addsearch+p.innerHTML
                    }
    
                // tìm theo tên ca sĩ
                let singer=document.querySelectorAll(".song p")
                for( let searchsong of singer)
                    if(searchsong.innerText.toLowerCase().includes(searchtext.value.toLowerCase())===true){
                        let p=document.querySelector(".search-show .search-singer .songs")
                        let img=searchsong.closest(".infosong").previousElementSibling.children[0].src
                        let namesong=searchsong.previousElementSibling.innerText
                        let addsearch=`
                        <div class="song">
                            <div class="img-song"><img src="${img}" alt="gg"></div>
                            <div class="infosong">
                                <h4>${namesong}</h4>
                                <p>${searchsong.innerText}</p>
                            </div>
                        </div>
                        `
                        p.innerHTML=addsearch+p.innerHTML
                            
                    }
                // nếu tìm thấy bài hát
                search_name=document.querySelectorAll(".search-namesong .song")
                if (search_name.length > 0){
                    let search_song=document.querySelector(".search-namesong")
                    $(search_song).slideDown()
    
                }
                search_singer=document.querySelectorAll(".search-singer .song")
                if (search_singer.length > 0) {
                    let search_singer=document.querySelector(".search-singer")
                    $(search_singer).slideDown()
                }
                // nếu ko tìm thấy 
                if (search_name.length == 0&&search_singer.length == 0){
                    $(".wrap_no_search").slideDown()
                }
                // nếu ko tràn thì ẩn nút scroll
                if (search_name.length < 7 ){
                    let bts=document.querySelectorAll(".search-namesong .scrollright,.search-namesong .scrollleft")
                    for(let bt of bts)
                        bt.style.display="none"
                }
                else{
                    let bts=document.querySelectorAll(".search-namesong .scrollright,.search-namesong .scrollleft")
                    for(let bt of bts)
                        bt.style.display="block"
                }
                if (search_singer.length < 7 ){
                    let bts=document.querySelectorAll(".search-singer .scrollright,.search-singer .scrollleft")
                    for(let bt of bts)
                        bt.style.display="none"
                }
                else{
                    let bts=document.querySelectorAll(".search-singer .scrollright,.search-singer .scrollleft")
                    for(let bt of bts)
                        bt.style.display="block"
                }

                add()
                                          
            }
        })
        
    }


    // nút âm lượng
    $(".volumebt").click(function(){

        // thay đổi hình vol(bật/tắt âm thanh)
        var volumebt=$(".volumebt>img").attr("src")
        if(volumebt=="https://img.icons8.com/ios-filled/50/FFFFFF/mute--v1.png"){
            $(".volumebt>img").attr("src","https://img.icons8.com/ios-filled/50/FFFFFF/medium-volume--v1.png")
            var x=$(".vol").width()
            Audio.volume=x/$(".volmaxs").width()

        }
        else{
            $(".volumebt>img").attr("src","https://img.icons8.com/ios-filled/50/FFFFFF/mute--v1.png")
            Audio.volume=0
        }
            
    })


    // tăng giảm âm lượng
    $(".volmaxs").click(function(event){
        let x=event.offsetX/$(".volmaxs").width()*100
        $(".vol").css("width",`${x}%`)
        $(".volumebt>img").attr("src","https://img.icons8.com/ios-filled/50/FFFFFF/medium-volume--v1.png")
        Audio.volume=x*0.01
    })
    $(".volmaxs").hover(function(){
        $(".vol>div").show(200)
    })
    $(".volmaxs").mouseleave(function(){
        $(".vol>div").hide(200)
    })
    

    //chọn thời gian trên thanh nhạc
    $(".listens").click(function(event){
        let x=event.offsetX/$(".listens").width()*100
        $(".listened").css("width",`${x}%`)
        Audio.currentTime=x/100*Audio.duration
        
    })
    $(".listens").hover(function(){
        $(".listened>div").show(200)
    })
    $(".listens").mouseleave(function(){
        $(".listened>div").hide(200)
    })
    let like=document.getElementById("like")

    //xử lí nút like
    like.onclick=function() {
        if(like.src=="https://img.icons8.com/ios-filled/50/FA5252/like--v1.png"){
            like.src="https://img.icons8.com/ios/50/FFFFFF/like--v1.png"
        }
        else{
            like.src="https://img.icons8.com/ios-filled/50/FA5252/like--v1.png"
        }
    }

    
    let playPausebt=document.getElementById("play-pausebt")
    let playPause=document.getElementById("play-pause")
    // nút play pause
    playPausebt.onclick=function() {
        if(playPause.src=="https://img.icons8.com/ios-filled/50/FFFFFF/pause--v1.png"){
           
            Audio.pause()
        }
        else{
            
            Audio.play()
        }
    }
    // khi bật nhạc
    var dem = 1
    Audio.addEventListener("playing",function(){
        $(".song[playing='true']").css("background-color","#4c4848")
        $(".song[playing='false']").css("background-color","#6c6767")
        $(".play-left,.playing").slideDown(500)
        $(".playing").css("display","flex")
        $(".menu").animate({
            "height": "60%"
        },500)
        $(".music-types").css("margin-bottom", "80px")
        $(".right .hotmusic:last-child").css("margin-bottom", "90px")
        $(".playlists").css("margin-bottom", "80px")
        $(".playlistsong .song:last-child").css("margin-bottom", "90px")
        playPause.src="https://img.icons8.com/ios-filled/50/FFFFFF/pause--v1.png"
        
        //quay cdlogo
        if(typeof spin!=='undefined'){
            clearInterval(spin)
        }
        spin = setInterval(function(){
            $("#cd").css({
                "transform": `rotate(${dem}deg)`
            })
        dem+=1
        },20)

        //thời gian đã nghe bài hát
        timerr = setInterval(function loadtime(timed=Audio.currentTime-1){
            timed++
            var timesec2=Math.trunc(timed%60)
            var timemin=Math.trunc(timed/60)
            if(timesec2<10){
                document.getElementById("timelistened").innerText=`0${timemin}:0${timesec2}`
            }
            else{
                document.getElementById("timelistened").innerText=`0${timemin}:${timesec2}`
            }
            let listened=document.getElementById("listened")
            var timemin=Math.trunc(Audio.duration/60)
            listened.style.width=`${Audio.currentTime/Audio.duration*100}%`
        },1000)
         
    })


    //khi tắt nhạc
    Audio.addEventListener("pause",function(){
        playPause.src="https://img.icons8.com/ios-filled/50/FFFFFF/play--v1.png"
        clearInterval(spin) //dừng quay cdlogo
        clearInterval(timerr)//dừng thời gian đã nghe bài hát

        // phát bài hát tiếp theo khi hết bài
        if(Audio.currentTime==Audio.duration){
            if($("#repeat").attr("src")=="https://img.icons8.com/?size=100&id=rDEqDzE48Y9U&format=png&color=7950F2"){
                next($(".song[playing='true']"))
            }
            else if($("#shuffle").attr("src")=="https://img.icons8.com/?size=100&id=GsnQu489OK16&format=png&color=7950F2"){
                    var x=$(".song[playing='true']").closest(".songs").find(".song").length
                    next($(".song").eq(Math.floor(Math.random() * (x))))
                }
            else{
                next($(".song[playing='true']").next())
            }
        }
    })

    // thời gian bài hát
    Audio.addEventListener('loadedmetadata', function() {
        var timemin=Math.trunc(Audio.duration/60)
        var timesec=Math.trunc(Audio.duration%60)
        if(timesec<10){
            document.getElementById("time").innerText=`0${timemin}:0${timesec}`
        }
        else{
            document.getElementById("time").innerText=`0${timemin}:${timesec}`
        }
    });
   
    // ẩn hiện menu
    $("#menubutton").hide()
    let menubutton=document.getElementById("menubutton")
    menubutton.onclick=function () {
            let b = document.getElementById("right")
            let a = document.getElementById("left")
            if(a.style.display=="none"){
                a.style.display="block"
                b.style.position= "absolute"
                b.style.width= "79.5%"
                b.style.right= "0"
            }
            else{
                a.style.display="none"
                b.style.width= "100%"
            }    
    }

    // nút phát ngẫu nhiên
    $("#shufflebt").click(function(){
        var shuffle=$("#shuffle").attr("src")
        if(shuffle=="https://img.icons8.com/?size=100&id=GsnQu489OK16&format=png&color=FFFFFF"){
            $("#shuffle").attr("src","https://img.icons8.com/?size=100&id=GsnQu489OK16&format=png&color=7950F2")
            $("#repeat").attr("src","https://img.icons8.com/?size=100&id=91481&format=png&color=FFFFFF")
        }
        else{
            $("#shuffle").attr("src","https://img.icons8.com/?size=100&id=GsnQu489OK16&format=png&color=FFFFFF")
        }
    })

    //nút phát lại
    $("#repeatbt").click(function(){
        var repeat=$("#repeat").attr("src")
        if(repeat=="https://img.icons8.com/?size=100&id=91481&format=png&color=FFFFFF"){
            $("#repeat").attr("src","https://img.icons8.com/?size=100&id=rDEqDzE48Y9U&format=png&color=7950F2")
            $("#shuffle").attr("src","https://img.icons8.com/?size=100&id=GsnQu489OK16&format=png&color=FFFFFF")
        }
        else{
            $("#repeat").attr("src","https://img.icons8.com/?size=100&id=91481&format=png&color=FFFFFF")
        }   
    })


    // nút scroll
    $(".scrollleft,.scrollright").hover(function(){
        $(this).css({
            "opacity": ".7",
            "height":"45px",
            "width":"45px"
            
        },300)
    })
    $(".scrollleft,.scrollright").mouseleave(function(){
        $(this).css({
            "opacity": ".5",
            "height":"40px",
            "width":"40px"
            
        },300)
    })
    $(".scrollleft").click(function() {
        $(this).next().animate({ scrollLeft: "-=500px" }, 1000);
      });
      $(".scrollright").click(function() {
        $(this).prev().animate({ scrollLeft: "+=500px" }, 1000);
      });


    // chọn bài hát
    $(".right").on("click",".song",function(event){
        if ($(event.target).closest('.menu-song,.addpls').length === 0) {
            next(this)
        }
    })

    // phát bài tiếp theo
    
    $("#nextbt").click(function(){
        if($("#shuffle").attr("src")=="https://img.icons8.com/?size=100&id=GsnQu489OK16&format=png&color=7950F2"){
            var x=$(".song[playing='true']").closest(".songs").find(".song").length
            next($(".song").eq(Math.floor(Math.random() * (x))))
        }
        else{
            next($(".song[playing='true']").next())
    }

    })
    
    // phát bài liền trước
    
    $("#prebt").click(function(){
        if($("#shuffle").attr("src")=="https://img.icons8.com/?size=100&id=GsnQu489OK16&format=png&color=7950F2"){
            var x=$(".song[playing='true']").closest(".songs").find(".song").length
            next($(".song").eq(Math.floor(Math.random() * (x))))
        }
        else{
            next($(".song[playing='true']").prev())
    }

    })
   
    function next (obj){
        $(".song").attr("playing","false")
        $(obj).attr("playing","true")
        var x=`audio/${$(obj).find("h4").text()}_${$(obj).find("p").text()}.mp3`
        $("#audio").attr("src",x)
        Audio.play()
        loadmusic()
    }

    $(".songs").on(".song").attr("playing","false")

    // load nhạc
    function loadmusic(){
        $(".play-left .imgsong img").attr("src",$(".song[playing='true'] .img-song>img").attr("src"))
        $(".play-left .infosong h4").text($(".song[playing='true'] h4").text())
        $(".play-left .infosong p").text($(".song[playing='true'] p").text())
    }
    


    // hover song
    // $(".song").hover(function(){
    //     $(this).animate({
    //         "transform": "scale(1.2)"
    //     },200)
    // })
}



