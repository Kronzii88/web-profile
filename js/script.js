const introAnimation = () => {
    $(".text span").velocity("transition.slideLeftIn", {
                        stagger: 150, 
                        complete: () => {buttonAnimation();
                        }
                    });
}

const buttonAnimation = () => {
    $(".start").velocity("transition.bounceUpIn")
                .mouseenter(function() {
                    $(this).velocity({width:100})
                })
                .mouseleave(function() {
                    $(this).velocity({width:125})
                })
}

const introOut = () => {
    // proteksi tombol start
    $(".start").attr("disabled", true).css({"color":"black"});

    $(".start").velocity("transition.whirlOut", {
                stagger: 150, 
                complete: () => {
                   $(".text").velocity({"font-size":"20px"},{
                                            duration: 1000
                                        });
                    $(".intro").velocity({"top":"95%"},{
                                        duration: 1000,
                                        complete: () => {
                                            callMenu();
                                            $(".menu a[href='about_me']").trigger("click");
                                            $(".start").attr("disabled", false).css({"color":"black"});
                                        } 
                                        });
                }
            });
}

const callMenu = () => {
    $(".menu li").velocity("transition.slideLeftIn", {
        stagger: 250, 
       });
    
    $(".menu a").off().click(function(e) {
        e.preventDefault(); 
        $(this).parent("li").addClass("active").siblings().removeClass("active");

        
        const hrefString = $(this).attr("href");
        // console.log(hrefString);

        if(hrefString == "contact") {
            contact()
        }else {
            if(!$(`#${hrefString}`).is(":visible")){
                //menghilangkan konten sebelum konten berikutnya muncul
                 $(".container-content").fadeOut(1000);
     
                 //asyncrhonus timeout digunakan agar animasi fading dan showin tidak bertabrakan
                 setTimeout(() => {
                     //memanggil fungsi sesuai dengan nilai href
                     $(`#${hrefString}`).show();
                     window[hrefString]();
                 }, 1000)
     
             } 
        }
        
  

    })
}

function about_me(){
    $("#about_me img").velocity("transition.flipYIn", {duration: 1500});
    $("#about_me .title").velocity("transition.slideUpIn", {duration: 1500});
    $("#about_me div").velocity("transition.slideDownIn", {duration: 1500});
}

function timeline() {
    $(".top240").velocity("transition.slideUpIn", {stagger: 1000});
    $(".top170").velocity("transition.slideDownIn", {stagger: 1000});
}

function contact() {
    $(".menu li").hide();
    $(".container-content").hide();

        $(".text").velocity({"font-size":"90px"},{
                                duration: 1000
                                });
        $(".intro").velocity({"top":"50%"},{
                            duration: 1000,
                            complete: () => {
                                
                                $(".start").velocity("transition.whirlIn");
                            } 
                            });

}

$(document).ready(() =>  {
    introAnimation();
})