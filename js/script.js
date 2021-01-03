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
                                        } 
                                        });
                }
            });
}

const callMenu = () => {
    $(".menu li").velocity("transition.slideLeftIn", {
        stagger: 250, 
       });
    
    $(".menu a").click(function(e) {
        e.preventDefault(); 
        $(this).parent("li").addClass("active").siblings().removeClass("active");

        //memanggil fungsi sesuai dengan nilai href
        const hrefString = $(this).attr("href");
        // console.log(hrefString);
        $("#" + hrefString).show();

        window[hrefString]();
    })
}

function about_me(){
    $("#about_me img").velocity("transition.flipYIn", {duration: 1500});
    $("#about_me .title").velocity("transition.slideUpIn", {duration: 1500});
    $("#about_me div").velocity("transition.slideDownIn", {duration: 1500});
}

$(document).ready(() =>  {
    introAnimation();
})