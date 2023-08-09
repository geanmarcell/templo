document.addEventListener("DOMContentLoaded", function() {
  disableRightClick();
  disableTextSelection();
});

function disableRightClick() {
  document.addEventListener("contextmenu", function(event) {
    event.preventDefault();
  });
}

function disableTextSelection() {
  document.addEventListener("selectstart", function(event) {
    event.preventDefault();
  });
}
