$("input").on("keypress", function (e) {
  if (e.which == 13) {
    var inputVal = $(this).val();
    console.log("komt hier");
    $("ul").append("<li class='item'>" + inputVal + "</li>");
  }
});
$("body").on("click", ".item", function () {
  $(this).toggleClass("crossed");
});
$(this).on("dblclick", function () {
  $(this).detach();
});
