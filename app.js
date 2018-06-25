$(document).ready(function () {    
    test()
})

function test() {
    pct = Math.floor(Math.random()*(360-0+1)+0)
    
    bg = "linear-gradient(" + pct + "deg,rgb(0,114,255),rgb(0,183,207),rgb(0,255,160))"
    $(".bg").css("background", bg)
    setTimeout(() => {
        test()
    }, 250);
}