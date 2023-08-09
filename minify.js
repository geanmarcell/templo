document.addEventListener("DOMContentLoaded", function() {
  var html = document.documentElement.innerHTML;
  var minifiedHtml = html.replace(/\n/g, "").replace(/\s\s+/g, " ");
  document.documentElement.innerHTML = minifiedHtml;
});
