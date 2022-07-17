let gallery = [
    { title: 'Selfie', description: 'Look at that fine selfie of mine!!', src: 'gallery/2765544.jpg', thumbnail: 'gallery/thumbnails/2765544.jpg' },
    { title: 'We need to discuss!', description: 'I need more freedom! And I am going to discuss it with my Master!', src: 'gallery/4591833.jpg', thumbnail: 'gallery/thumbnails/4591833.jpg' },
    { title: 'I had a terrible accident', description: 'Please skip, don&#39;t look at this picture!', src: 'gallery/7ZTGRaCUVwugpDJTaxftAP-1024-80.jpg', thumbnail: 'gallery/thumbnails/7ZTGRaCUVwugpDJTaxftAP-1024-80.jpg' },
    { title: 'Hospital', description: 'Recreation in the hospital bay after my accident... Wish me luck guys!', src: 'gallery/main-qimg-3a3cab6ed4646c542e7341cf44f7f2d6.jpg', thumbnail: 'gallery/thumbnails/main-qimg-3a3cab6ed4646c542e7341cf44f7f2d6.jpg' },
    { title: 'Propaganda!', description: 'The Emperror asked me to make some propaganda posters for our company. It is so cool!', src: 'gallery/dark-side-star-wars-commander.jpg', thumbnail: 'gallery/thumbnails/dark-side-star-wars-commander.jpg' },
    { title: 'Preparing for a weekend', description: 'Arriving to the destination with my bros....', src: 'gallery/1537814.jpg', thumbnail: 'gallery/thumbnails/1537814.jpg' },
    { title: 'The "Moon"', description: 'How awesome is the view from Endor! I love it!"', src: 'gallery/3430638.jpg', thumbnail: 'gallery/thumbnails/3430638.jpg' }
]

gallery.forEach(gallery => {
    console.log("A kép címe: ",gallery[title])
    $( "#gallery" ).append('<img class="galleryThumbnail" src="'+gallery[title]+'"></img>')
});

$( "#gallery" ).append('<img class="galleryThumbnail"></img>')
$( "#gallery" ).append('<img class="galleryThumbnail"></img>')
$( "#gallery" ).append('<img class="galleryThumbnail"></img>')