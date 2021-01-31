$(document).ready(function() {
  $("form").submit(function(event) {
    event.preventDefault();
    var mostLiked = $("mostLiked").val();

    if (mostLiked === "apple") {
      $(#apple).show();
      $(#python).hide();
      $(#banking).hide;
    }
  })
})