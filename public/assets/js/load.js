var animated = $(".introAnim");

function beginAnim() {
    $("#animLogo").fadeOut();
    introAnimation();
}

function introAnimation() {
    $(".introAnim:eq(0)").animate({ width: 0 }, 800);
    $(".introAnim:eq(1)").animate({ width: 0 }, 1400);
    $(".introAnim:eq(2)").animate({ width: 0 }, 1000);
    $(".introAnim:eq(3)").animate({ width: 0 }, 1200);
    setTimeout(endAnim, 1500);
}

function endAnim() {
    $(".screenloader").remove();
}

setTimeout(beginAnim, 10000);


