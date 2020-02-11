
$(document).ready(function () {
    $(".our-hover").hide();
    $(".map-hover").hide();
    $(".closebutn").hide();
    $(".get").hide();
    $(".box").hide();
    $(".embark").hide();
    $(".main-nav1-item").hide();
    $(".header-top-item").hide();
    $(".open").click(function () {
        $(".closebutn").show();
        $(".open").hide();
        $(".carousel-people").hide();
        $(".carousel-indicators").hide();
        $(".main-nav1-item").show();
        $(".svglogo").css("fill", "white");
        $(".header-top-item").show();
        $("#carouselslider").hide();
        // full website hide
        $("#aboutjetsavedetails").hide();
        $("#our-expertcarousesl").hide();
        $("#travellerblogcarousel").hide();
        $("#peoplechoicetours").hide();
        $("#verifiedtravellercarousel").hide();
        $(".trade").hide();
        $(".footer").hide();
        $(".bgfooter").hide();
        $(".advanture").show();
        $(".wrapper").hide();
        $(".follow").hide();
        $(".blog").hide();
        $(".leftmenufix").hide();


        // fullwebsite hide end
    });
});

$(document).ready(function () {
    $(".closebutn").hide();
    $(".our-hover").hide();
    $(".activity-hover").hide();
    $(".embark").hide();
    $(".get").hide();
    $(".box").hide();
    $(".closebutn").click(function () {
        $(".open").show();
        $(".closebutn").hide();
        $(".carousel-people").show();
        //$(".carousel-indicators").show();
        $(".main-nav1-item").hide();
        $(".header-top-item").hide();
        // full website show
        $("#carouselslider").show();
        $("#aboutjetsavedetails").show();
        $("#our-expertcarousesl").show();
        $("#travellerblogcarousel").show();
        $("#peoplechoicetours").show();
        $("#verifiedtravellercarousel").show();
        $(".trade").show();
        $(".footer").show();
        $(".bgfooter").show();
        $(".advanture").show();
        $(".wrapper").show();
        $(".follow").show();
        $(".blog").show();
        $(".our-hover").hide();
        $(".activity-hover").hide();
        $(".map-hover").hide();
        $(".box").hide();
        $(".embark").hide();
        $(".get").hide();
        $(".leftmenufix").show();

        // fullwebsite show end
    });
});


// our hover part
$(document).ready(function () {
    $(".our-hover").hide();
    $(".activity-hover").hide();
    $(".map-hover").hide();
    $(".get").hide();
    $(".box").hide();
    $(".embark").hide();
    $(".our").hover(function () {

        $(".our-hover").show();
        $(".activity-hover").hide();
        $(".map-hover").hide();
        $(".get").hide();
        $(".box").hide();
        $(".embark").hide();

    });
});

// our hover part end

// activity hover part
$(document).ready(function () {
    $(".activity-hover").hide();
    $(".our-hover").hide();
    $(".map-hover").hide();
    $(".get").hide();
    $(".box").hide();
    $(".embark").hide();
    $(".activity").hover(function () {

        $(".activity-hover").show();
        $(".our-hover").hide();
        $(".map-hover").hide();
        $(".get").hide();
        $(".box").hide();
        $(".embark").hide();

    });
});

// activity	 hover part end
// hover part start
$(document).ready(function () {
    $(".activity-hover").hide();
    $(".our-hover").hide();
    $(".map-hover").hide();
    $(".box").hide();
    $(".get").hide();
    $(".embark").hide();
    $(".india-hover").hover(function () {

        $(".map-hover").show();
        $(".activity-hover").hide();
        $(".our-hover").hide();
        $(".get").hide();
        $(".box").hide();
        $(".embark").hide();

    });
});
// hover part end

// now part start
$(document).ready(function () {
    $(".activity-hover").hide();
    $(".our-hover").hide();
    $(".map-hover").hide();
    $(".get").hide();
    $(".box").hide();
    $(".embark").hide();
    $(".inspire").hover(function () {
        $(".get").show();
        $(".activity-hover").hide();
        $(".our-hover").hide();
        $(".map-hover").hide();
        $(".box").hide();
        $(".embark").hide();
    });
});
// now part end

// box part start
$(document).ready(function () {
    $(".activity-hover").hide();
    $(".our-hover").hide();
    $(".map-hover").hide();
    $(".get").hide();
    $(".box").hide();
    $(".embark").hide();
    $(".meeting").hover(function () {
        $(".box").show();
        $(".activity-hover").hide();
        $(".our-hover").hide();
        $(".map-hover").hide();
        $(".get").hide();
        $(".embark").hide();

    });
});
// box part end


// about part start
$(document).ready(function () {
    $(".activity-hover").hide();
    $(".our-hover").hide();
    $(".map-hover").hide();
    $(".get").hide();
    $(".box").hide();
    $(".embark").hide();
    $(".redplane").hover(function () {
        $(".embark").show();
        $(".activity-hover").hide();
        $(".our-hover").hide();
        $(".map-hover").hide();
        $(".get").hide();
        $(".box").hide();
    });
});
                // about part end

function openNav1() {
    document.getElementById("myNav1").style.height = "100%";
}

function closeNav1() {
    document.getElementById("myNav1").style.height = "0%";
}


$(document).ready(function () {
    $(window).scroll(function () {
        var scroll = $(window).scrollTop();
        if (scroll > 100) {
            $(".open").css("fill", "black");
        } else {
            $(".open").css("fill", "white");
        }
    })
});

$(document).ready(function () {
    $(window).scroll(function () {
        var scroll = $(window).scrollTop();
        if (scroll > 500) {
            $(".svglogo").css("fill", "black");
        } else {
            $(".svglogo").css("fill", "white");
        }
    })
});


function openNav() {
    document.getElementById("myNav").style.width = "100%";
    document.getElementById(".open").style.width = "0%";
}

function closeNav() {
    document.getElementById("myNav").style.width = "0%";
}

