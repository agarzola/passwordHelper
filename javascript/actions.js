$("form input[type='password']").live('keyup', function(event) {
  var itemValue = $(this).val();
  var itemValueSub = itemValue.substr(itemValue.length - 1);
  var pos = $(this).position();
  var keyArray = new Array(8,48,49,50,51,52,53,54,55,56,57,58,59,60,61,62,63,64,65,66,67,68,69,70,71,72,73,74,75,76,77,78,79,80,81,82,83,84,85,86,87,88,89,90,96,97,98,99,100,101,102,103,104,105,106,107,108,109,110,111,186,187,188,189,190,191,192,219,220,221,222);
  if (itemValue.length != 0 && jQuery.inArray(event.keyCode,keyArray) != -1) {
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
  } else if(itemValue.length == 0) {
    $("#pwdCount").html("&nbsp;");
  }
  itemValue = "";
  itemValueSub = "";
  return true;
});