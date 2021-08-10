import galleryItems from "app.js";

const preview = {
    gallery: document.querySelector('.js-gallery'),
    Image: document.createElement('img'),
    lightbox: document.querySelector('.lightbox'),
    btn: document.querySelector('[data-action="close-lightbox"]'),
    modal: document.querySelector('.lightbox__content'),
    lightbox__image: document.querySelector('.lightbox__image'),
  };

  const newGallery = (preview, original, description) => 
  `<li class= 'gallery__brend'>
  <a class= 'gallery__link'
  href = ${original}
  >

  <img class = 'gallery__image'
  src = ${preview}
  data-source = ${original}
  alt = ${description}
  />
  </a>
  </li>`

  const galleryPreview = galleryItems.reduce(
    (el, item) => el + newGallery(item),
    ''
  );

  preview.gallery.insertAdjacentHTML('after', galleryPreview);
  preview.Image.classList.add('gallery__image');
  preview.gallery.addEventListener('click', onClick);
  preview.btn.addEventListener('click', clickClose);
  preview.modal.addEventListener('click', closeLightbox);

  function onClick(e) {
    e.preventDefault();
    if (e.target.nodeName !== 'IMG') {
      return;
    }
    if (e.target.nodeName === 'IMG') {
      preview.lightbox.add('is-open');
      preview.lightbox__image.src = '';
      preview.lightbox__image.alt = '';
      window.addEventListener('key', clickKey);
    }

    function clickClose(e) {
      e.preventDefault();
      preview.lightbox.classList.remove('is-open');
      preview.lightbox__image.src = '';
      preview.lightbox__image.alt = '';
      window.removeEventListener('key', clickKey);
    }

    function closeLightbox(e) {
      if (e.target === e.currentTarget) {
        clickClose();
      }
    }

    function clickKey(e) {
      if (e.code === 'Escape') {
        clickClose();
      }
    }
  }