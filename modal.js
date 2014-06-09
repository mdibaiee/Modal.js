(function(global, undefined) {
  var doc = global.document;
  var elements = doc.querySelectorAll('[data-modal]');
  
  doc.body.addEventListener('click', function(e) {
    var modal = false;
    var el = e.target;
    if(el.getAttribute('data-modal') !== null) modal = true;
    while(el.parentNode.getAttribute) {
      el = el.parentNode;
      if(el.getAttribute('data-modal') !== null) modal = true;
    }

    if(!modal) {
      for(var i = 0, len = elements.length; i < len; i++) {
        elements[i].className = elements[i].className.replace(global.modalClass || 'active', '');
      }
    }
  })
})(this);
