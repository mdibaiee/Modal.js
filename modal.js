(function(global, undefined) {
  var doc = global.document;
  var elements = doc.querySelectorAll('[data-modal]');
  
  doc.body.addEventListener('click', function(e) {
    var modal = false;
    var el = e.target;
    if(el.getAttribute('data-modal') !== null) modal = true;
    while(!modal && el.parentNode.tagName) {
      el = el.parentNode;
      if(el.getAttribute('data-modal') !== null) modal = true;
    }

    for(var i = 0, len = elements.length; i < len; i++) {
      if(modal && elements[i] == el) return;
      var ev = new CustomEvent('close');
      elements[i].dispatchEvent(ev);
    }
  })
})(this);
