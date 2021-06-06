$('.rev-slider').slick({
arrows:true,
dots: false,
});

$('.portfolio-slider').slick({
  arrows:true,
  dots: false,
  slidesToShow:1,
  infinite: true,
  speed: 500,
  fade: true,
  cssEase: 'linear'
  });

$('.insta-slider').slick({
    slidesToShow: 3,
    arrows:true,

  });

  lightGallery(document.getElementById('animated-thumbnials'), {
    thumbnail:true,
    animateThumb: true,
    showThumbByDefault: true
}); 

  const formCaller = document.querySelectorAll(".form-caller"),
  overlay = document.querySelector(".overlay"),
  modal = document.querySelector(".modal"),
  modalClose = document.querySelector(".modal__close"),
  formSubmit = document.querySelector("btn_modal"),
  body = document.querySelector("body");
  inputs = document.querySelectorAll('input');

function openModal(event) {
  event.preventDefault();
  window.scrollTo(0, 0);
  overlay.style.display = "block";
  body.style.overflowY = "hidden";
}

function closeModal(event) {
  if (
    event.target === modalClose ||
    event.target === formSubmit ||
    event.target === overlay
  ) {
    overlay.style.display = "none";
    body.style.overflowY = "auto";
    inputs.forEach(item => item.value = '');
  }
}

formCaller.forEach((item) => {
  item.addEventListener("click", openModal);
});

overlay.addEventListener('click', closeModal);

inputs.forEach(item => {
  item.addEventListener('invalid', (e) => {
    e.preventDefault();
    item.placeholder = 'Заполните поля';
  })
});


modalOk = document.querySelector('.modal-2'),
modalOkClose = document.querySelector('.modal__close-2'),
modalBtn = document.querySelector('#modal__btn'),
trialBtn = document.querySelector('.call_request');


function showModal () {
    modalOk.classList.add('active');
  }
  
  function hideModal () {
    modalOk.classList.remove('active');
  }
  
  trialBtn.addEventListener('click', (e) => {
    e.preventDefault();

    showModal();
  });


  
  modal.addEventListener ('click', (e) => {
    if(e.target === modalOkClose || e.target === modalBtn) {
      hideModal();
    }
  })
  
  document.addEventListener('click', e => {
    if(e.target != modalOk && e.target != trialBtn) {
      hideModal();
    }
  })





