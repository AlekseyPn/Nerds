var link = document.querySelector ('.btn-contact');
var popup = document.querySelector ('.modal-content-contact');
var overlay = document.querySelector ('.modal-overlay');
var modalClose = popup.querySelector ('.modal-content-close');
var inputName = popup.querySelector ('[name="name"]');
var input = popup.querySelectorAll ('input');
var i;
var valueStorage;

link.addEventListener('click', function(event) {
  event.preventDefault();
  popup.classList.add ('modal-content-show');
  overlay.classList.add ('modal-overlay-show');
  inputName.focus();

});

overlay.addEventListener ('click', function(event) {
  event.preventDefault();
  popup.classList.remove ('modal-content-show');
  overlay.classList.remove ('modal-overlay-show');
});

modalClose.addEventListener ('click', function(event) {
  event.preventDefault();
  popup.classList.remove ('modal-content-show');
  overlay.classList.remove ('modal-overlay-show');
});

for (i=0; i < input.length; i++) {
  input[i].addEventListener('focus', function() {
    valueStorage = this.getAttribute ('value');
    if (this.getAttribute('value')) {
      this.removeAttribute ('value');
    }
  });
  input[i].addEventListener('blur', function() {
    if (!this.getAttribute('value')) {
      this.setAttribute('value', valueStorage);
    }
  });
 };

