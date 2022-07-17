$( window ).resize(function() {
    let headerWidth = ($( "header" ).css('width'))
$( "#navbarPlaceholder" ).css('width', headerWidth)
})
function navbarResizer() {
    let headerWidth = ($( "header" ).css('width'))
    $( "#navbarPlaceholder" ).css('width', headerWidth)
}
navbarResizer()