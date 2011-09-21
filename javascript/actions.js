$("form input[type='password']").live('keyup', function(event) {
  var itemValue = $(this).val();
  var itemValueSub = itemValue.substr(itemValue.length - 1);
  var pos = $(this).position();
  if (itemValue.length != 0) {
    $("#pwdCount").html(itemValue.length)
      .parent()
      .append("<p id=\"pwdChar\">" + itemValueSub + "</p>")
      .find("#pwdChar")
      .css({
        "left": pos.left + ((itemValue.length - 1) * 7),
        "top" : pos.top - 35
      })
      .delay(100)
      .fadeOut(600, function() {
        $(this).remove();
      });
  } else {
    $("#pwdCount").html("");
  }
  itemValue = "";
  itemValueSub = "";
  return true;
});