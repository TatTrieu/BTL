window.addEventListener("load",function(){
    var scroll=$(".img-top img").width()
    var i=1
    // lướt img-top
    this.setInterval(function(){
        i++
        $(".img-top").animate({ scrollLeft: `+=${scroll}` }, 2000)
        if(i==$(".img-top img").length){
            i=1
            scroll=scroll*-1
        }
    },4000)



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
    for(var d=0;d< $(".topsong .song").length;d++){
        $(".topsong .song").eq(d).prepend(`<p>${d+1}</p>`)
    }


    $(".topsinger").click(function(){
        $(".show-topsinger").slideUp()
        obj=this
        $("html").animate({scrollTop:350},500,function(){
            $(".show-topsinger .songs .song").remove()
            $(".show-topsinger h1").text($(obj).find("h4").text())
            let singer=document.querySelectorAll(".song p")
                for( let searchsong of singer)
                    if(searchsong.innerText.toLowerCase().includes($(obj).find("h4").text().toLowerCase())===true){
                        let p=document.querySelector(".show-topsinger .songs")
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
            $(".show-topsinger").slideDown()
        })
        
    })
})