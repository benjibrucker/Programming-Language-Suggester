$(document).ready(function() {
  $("form").submit(function(event) {
    event.preventDefault();
    var mostLiked = $("#mostLiked").val();

    if (mostLiked === "apple") {
      $("#swift").show();
      $("#python").hide();
      $("#cobol").hide();
    } else if (mostLiked === "ai") {
      $("#swift").hide();
      $("#python").show();
      $("#cobol").hide();
    } else {
      $("#swift").hide();
      $("#python").hide();
      $("#cobol").show();
    }
  })
})