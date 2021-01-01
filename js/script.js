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
                                        } 
                                        });
                }
            });
}

const callMenu = () => {
    $(".menu li").velocity("transition.slideLeftIn", {
        stagger: 250, 
       });
}
$(document).ready(() =>  {
    introAnimation();
})