let gallery = [
    { title: 'Selfie', description: 'Look at my fine selfie!!', src: 'gallery/2765544.jpg', thumbnail: 'gallery/thumbnails/2765544.jpg' },
    { title: 'We need to discuss!', description: 'I need more freedom! And I am going to discuss it with my Master!', src: 'gallery/4591833.jpg', thumbnail: 'gallery/thumbnails/4591833.jpg' },
    { title: 'I just had a terrible accident', description: 'Please skip, do NOT look at this picture!', src: 'gallery/7ZTGRaCUVwugpDJTaxftAP-1024-80.jpg', thumbnail: 'gallery/thumbnails/7ZTGRaCUVwugpDJTaxftAP-1024-80.jpg' },
    { title: 'Hospital', description: 'Recreation in the hospital bay after my accident... Wish me luck guys!', src: 'gallery/main-qimg-3a3cab6ed4646c542e7341cf44f7f2d6.jpg', thumbnail: 'gallery/thumbnails/main-qimg-3a3cab6ed4646c542e7341cf44f7f2d6.jpg' },
    { title: 'Propaganda!', description: 'The Emperror asked me to make some propaganda posters for our fleet. It is so cool!', src: 'gallery/dark-side-star-wars-commander.jpg', thumbnail: 'gallery/thumbnails/dark-side-star-wars-commander.jpg' },
    { title: 'Preparing for a vacation', description: 'Arriving to the destination with my bros....', src: 'gallery/1537814.jpg', thumbnail: 'gallery/thumbnails/1537814.jpg' },
    { title: 'The "Moon"', description: 'How awesome is the view from Endor! I love it!"', src: 'gallery/3430638.jpg', thumbnail: 'gallery/thumbnails/3430638.jpg' }
]

gallery.forEach((data, index) => {
    //    console.log("A kép címe: "+data.title+", az elérési helye:"+data.src+" és indexe: "+index)
    $("#gallery").append('<img class="galleryThumbnail" src="' + data.thumbnail + '" galleryId="' + index + '"></img>')
})

//$( "#gallery img:first-child" )
//    .attr('id', 'galleryThumbnailActive')

//INITIAL SETUP OF ELEMENTS FOR THE ACTIVE GALLERY PICTURE
let selectedPictureId = 0;
changePicture(selectedPictureId)

$(".galleryThumbnail").click(function () {
    //console.log( "kattintottál a képre: "+$(this).attr('galleryId'));
    changePicture($(this).attr('galleryId'));
});

function changePicture(index) {
    let pictureLoad = { sauce: gallery[index].src, title: gallery[index].title, description: gallery[index].description };
    $("#picture").attr('src', pictureLoad.sauce);
    $("#pictureTitle").text(pictureLoad.title);
    $("#pictureDescription").text(pictureLoad.description);

    selectedPictureId = index;
    $("[id|='galleryThumbnailActive']").attr('id', '');
    $("img[galleryId|='" + index + "']").attr('id', 'galleryThumbnailActive');
    arrowInactiveSwitch(selectedPictureId);
    //console.log('A kiválasztott kép ID-ja: ',selectedPictureId,'. a tömb értékei: ',pictureLoad);
}

/* NOT WORKING :(( BUT FOUND ANOTHER SOLUTION!
function arrowInactiveSwitch() {
    if (selectedPictureId == 0) {
        $( "#arrowLeft" ).attr('id', 'arrowLeftInactive')
        } else $( "#arrowLeftInactive" ).attr('id', 'arrowLeft')

    if (selectedPictureId == gallery.length-1) {
        $( "#arrowRight" ).attr('id', 'arrowRightInactive')
        } else $( "#arrowRightInactive" ).attr('id', 'arrowRight')
}
*/

function arrowInactiveSwitch(selectedId) {
    if (selectedId == 0) {
        $("#arrowLeft").css('color', 'aliceblue');
    } else {
        $("#arrowLeft").css('color', 'black');
    }

    if (selectedId == gallery.length - 1) {
        $("#arrowRight").css('color', 'aliceblue');
    } else {
        $("#arrowRight").css('color', 'black');
    }
}

/*
OLD VERSION: INACTIVATE ARROW AT FIRST AND LAST PIC
$( "#arrowLeft" ).parent().click(function() {
    if (selectedPictureId > 0) {
        changePicture(selectedPictureId-1)
        }
    });

$( "#arrowRight" ).parent().click(function() {
    if (selectedPictureId < gallery.length-1) {
        changePicture(selectedPictureId+1)
        }
    });
*/

$("#arrowLeft").parent().click(function () {
    if (selectedPictureId > 0) {
        changePicture(parseInt(selectedPictureId) - 1);
    } else {
        changePicture(gallery.length - 1);
    }
});

$("#arrowRight").parent().click(function () {
    if (selectedPictureId < (gallery.length - 1)) {
        changePicture(parseInt(selectedPictureId) + 1);
    } else {
        changePicture(0);
    }
});

$(window).resize(function () {  
    window.scrollTo(0, 1);

    $([document.documentElement, document.body]).animate({
        scrollTop: $("#gallery").offset().top
    }, 2);

    window.scrollTo(0, 1);
    $([document.documentElement, document.body]).animate({
        scrollTop: $("#picture").offset().top
    }, 10);
});


//hide mobile address bar
window.addEventListener("load", function () {
    setTimeout(function () {
        window.scrollTo(0, 1);
    }, 0);
});