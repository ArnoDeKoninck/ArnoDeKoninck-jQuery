//Variable declerations
let characterCounter = 0;
$("#field").keyup(function () {
  characterCounter = $(this).val().length;
  console.log("character count: " + characterCounter);
  if (characterCounter < 140) {
    $("#characterCount").html(140 - characterCounter + " characters remaining");
  } else $(this).val() = $(this).val().substring(0, 140);
});
