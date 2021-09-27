$(document).ready(function () {

    let screenHigh = $(window).height();
    console.log(screenHigh);

    $(window).scroll(function(){
        let currentPosition = $(this).scrollTop();
        console.log(currentPosition);
        if(currentPosition >= screenHigh-600){

        }else{

            $(".nav-link").removeClass("current-section");
            setActive("home");

        }
    });
});

function setActive(current) {

    $(".nav-link").removeClass("current-section");

    $(`.nav-link[href='#${current}']`).addClass('current-section');

}

function navScroll() {

    let currentSection = $("section[id]");
    currentSection.waypoint(function (direction) {

        if(direction == "down"){

            let currentSectionId = $(this.element).attr('id');
            console.log(currentSectionId);
            setActive(currentSectionId);
        }

    },{ offset:'150px' });

    currentSection.waypoint(function (direction) {

        if(direction == "up"){
            let currentSectionId = $(this.element).attr('id');
            console.log(currentSectionId);
            setActive(currentSectionId);
        }

    },{ offset:'150px' });

}

navScroll();