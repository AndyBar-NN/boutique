$(function () {                      // scroll
  let widthElem = $(window);
  paralax(widthElem.scrollTop());
  widthElem.on('scroll', function () {
    let topElem = $(this).scrollTop();
    paralax(topElem);
  });
});
function paralax(top) {
  if (top <= 40) {
    $('.main__list').css(
      'transform', 'translateY(' + (top / -10) + 'px)');
    } else {
      $('.main__list').css(
        'transform', 'translateY(0px)'
    );
  }
}
$(window).on('scroll', function () {  // bg white
  var scrollOp = 0.0025;
  $('.main__background').css({
    opacity: 1 - $(window).scrollTop() * scrollOp
  });
  if ($('.main__background').css('opacity') == 0) {
    $('.header__media').css('background', '#fff');
  } else {
    $('.header__media').css('background', 'transparent');
  }
});

const mainBtn = document.querySelectorAll('.main__btn'),
      headElem = document.querySelector('.header'),
      headMedia = document.querySelector('.header__media'),
      modal = document.querySelector('.modal'),
      modalExit = document.querySelector('.modal__exit'),
      modalForm = document.querySelector('.modal__form'),
      modalSubmit = document.querySelector('.modal__submit'),
      checkboxElem = document.querySelector('.modal__checkbox'),
      modalCheck = document.querySelectorAll('.modal__check'),
      modalError = document.querySelectorAll('.modal__error'),
      modalLabelName = document.querySelectorAll('.modal__label--name'),
      inputElem = document.querySelectorAll('input');
const menuBurger = document.querySelector('.menu__burger'),
      mediaBurger = document.querySelector('.media__burger'),
      mediaNav = document.querySelector('.media__nav'),
      mediaBtnExit = document.querySelector('.media__exit--btn'),
      btnExit = document.querySelector('.menu__exit--btn');

// media

menuBurger.addEventListener('click', () => {
  menuBurger.classList.add('open');
  mediaNav.classList.add('open');
  btnExit.classList.add('open');
  headElem.style.cssText = 'background: #fff';
});
btnExit.addEventListener('click', () => {
  btnExit.classList.remove('open');
  mediaNav.classList.remove('open');
  menuBurger.classList.remove('open');
  headElem.style.cssText = '';
});

mediaBurger.addEventListener('click', () => {
  mediaBurger.classList.add('open');
  mediaNav.classList.add('open');
  mediaBtnExit.classList.add('open');
  headMedia.style.cssText = 'background: #fff';
});
mediaBtnExit.addEventListener('click', () => {
  mediaBtnExit.classList.remove('open');
  mediaNav.classList.remove('open');
  mediaBurger.classList.remove('open');
  headMedia.style.cssText = '';
});

modalForm.addEventListener('focusout', (e) => {
  if (e.target && e.target.name == 'userName') {
    if (inputElem[0].value !== '' && validName(inputElem[0].value)) {
      modalLabelName[0].style.display = '';
      modalError[0].style.display = '';
      modalCheck[0].style.display = 'block';
    } else {
      modalCheck[0].style.display = '';
      modalError[0].style.display = 'block';
      modalLabelName[0].style.display = 'block';
    }
  }
  if (e.target && e.target.name == 'userPhone') {
    if (inputElem[1].value !== '' && validPhone(inputElem[1].value)) {
      modalLabelName[1].style.display = '';
      modalError[1].style.display = '';
      modalCheck[1].style.display = 'block';
    } else {
      modalCheck[1].style.display = '';
      modalError[1].style.display = 'block';
      modalLabelName[1].style.display = 'block';
    }
  }
  if (e.target && e.target.name == 'userEmail') {
    if (inputElem[2].value !== '' && validEmail(inputElem[2].value)) {
      modalLabelName[2].style.display = '';
      modalError[2].style.display = '';
      modalCheck[2].style.display = 'block';
    } else {
      modalCheck[2].style.display = '';
      modalError[2].style.display = 'block';
      modalLabelName[2].style.display = 'block';
    }
  }
  for (let i = 0; i < inputElem.length; i++) {
    modalSubmit.addEventListener('click', (e) => {
      e.preventDefault();
      modalError[i].style.display = '';
      modalCheck[i].style.display = '';
      modalForm.reset();
    });
  }
});
checkboxElem.addEventListener('click', function () {
  if (checkboxElem.checked &&
    inputElem[0].value &&
    inputElem[1].value &&
    inputElem[2].value) {
    modalSubmit.disabled = false;
    modalSubmit.style.cssText = 'opacity: 1';
  } else {
    modalSubmit.disabled = true;
    modalSubmit.style.cssText = '';
  }
});

function validName(str) {
  const inputName = /^[а-яА-ЯёЁa-zA-Z]{2,30}$/;
  return inputName.test(str);
}
function validPhone(phone) {
  const inputPhone = /^\+\d{1}\(\d{3}\)\s\d{3}[-]\d{2}[-]\d{2}$/;
  return inputPhone.test(phone);
}
function validEmail(mail) {
  const inputEmail = /^\w+@\w+\.\w{2,}$/;
  return inputEmail.test(mail);
}


function modalToggle() {                    // not scroll in modal
  modal.classList.toggle('open');
  if (modal.classList.contains("open")) {
    disableScroll();
  } else {
    enableScroll();
  }
}

modal.addEventListener('click', (e) => {
  if (e.target.classList.contains('open')) {
    modalToggle();
  }
});
mainBtn.forEach((btn) => {
  btn.addEventListener('click', modalToggle);
});
modalExit.addEventListener('click', modalToggle);

// mask phone
var inputsTel = document.querySelector('input[type="tel"]');
Inputmask({
  "mask": "+7(999) 999-99-99",
  showMaskOnHover: false
}).mask(inputsTel);