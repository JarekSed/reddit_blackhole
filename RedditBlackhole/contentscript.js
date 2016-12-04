function commentSubmit(e) {
  e.preventDefault();
  $("form").find(".status").html("submitting").show();
  $("form").find("input[type=text], textarea").val("");
  return false;
}

// Find all 'save' buttons
var save_buttons = document.getElementsByClassName("save");
for (var i = 0; i < save_buttons.length; i++) {
  button = save_buttons[i];
  button.type = "button";
  button.onclick = commentSubmit;
}

$('body').on('click', '.save', commentSubmit);
