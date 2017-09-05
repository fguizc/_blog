window.onload = ()=> {
  
  var node = document.querySelector('.goTop .fa.fa-envira')

  var backToTop = function (rate) { 
    var doc = document.body.scrollTop ? document.body : document.documentElement; 
    var scrollTop = doc.scrollTop; 
    var top = function () { 
      scrollTop = scrollTop + (0 - scrollTop) / (rate || 2);
      if (scrollTop < 1) {
          doc.scrollTop = 0; return;
      }
      doc.scrollTop = scrollTop;
      requestAnimationFrame(top); 
    };
      top(); 
    };
  
  node.addEventListener("click", function(){
    backToTop(4)
  })
}