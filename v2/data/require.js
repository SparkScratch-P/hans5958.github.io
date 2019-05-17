$(function(){
  $("head").append("<style>html{position:relative;min-height:100%}.footer{position:absolute;bottom:0;width:100%;height:3rem;background-color:#f5f5f5;margin-top:3rem}.footer div.text-muted{margin:1rem 0}@media (max-width:575.98px){.footer{height:4rem;margin-top:4rem}.footer div.text-muted{margin:1rem 0}}</style>")
  $("body").prepend("<span id=\"nav\">")
  $("body").append("<span id=\"footer\">")
  $("#nav").load("data/nav.html")
  $("#footer").load("data/footer.html")
  $("body").append("<div id=\"require\">")
  $("#require").load("data/require.html",function(){$("head")[0].innerHTML+=$("#require2").html(),$("#require")[0].outerHTML=""})
  Pace.on("done", function() {
    $('#overlay').delay(300).fadeOut(600)
	setTimeout(function(){Pace.options.ajax = false}, 300)
 });
})
