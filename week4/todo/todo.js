// This code runs when the page loads
$(function() {

  $(".btn").on("click", function(event) {
    event.preventDefault()
    var elementThatWasClicked = $(this)
    console.log(elementThatWasClicked)
    elementThatWasClicked.parent().remove()

    // remove the element
  })

})
