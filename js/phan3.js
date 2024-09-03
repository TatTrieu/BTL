window.addEventListener("load",function(){
    var scroll=$(".img-top img").width()
    var i=1
    this.setInterval(function(){
        i++
        $(".img-top").animate({ scrollLeft: `+=${scroll}` }, 2000)
        if(i==$(".img-top img").length){
            i=1
            scroll=scroll*-1
        }
    },4001)
    $(".scrollleft,.scrollright").remove()
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

})