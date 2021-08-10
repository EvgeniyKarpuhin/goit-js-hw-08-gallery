const galleryItems = [
    {
      preview:
        'https://cdn.pixabay.com/photo/2019/05/14/16/43/himilayan-blue-poppy-4202825__340.jpg',
      original:
        'https://cdn.pixabay.com/photo/2019/05/14/16/43/himilayan-blue-poppy-4202825_1280.jpg',
      description: 'Hokkaido Flower',
    },
    {
      preview:
        'https://cdn.pixabay.com/photo/2019/05/14/22/05/container-4203677__340.jpg',
      original:
        'https://cdn.pixabay.com/photo/2019/05/14/22/05/container-4203677_1280.jpg',
      description: 'Container Haulage Freight',
    },
    {
      preview:
        'https://cdn.pixabay.com/photo/2019/05/16/09/47/beach-4206785__340.jpg',
      original:
        'https://cdn.pixabay.com/photo/2019/05/16/09/47/beach-4206785_1280.jpg',
      description: 'Aerial Beach View',
    },
    {
      preview:
        'https://cdn.pixabay.com/photo/2016/11/18/16/19/flowers-1835619__340.jpg',
      original:
        'https://cdn.pixabay.com/photo/2016/11/18/16/19/flowers-1835619_1280.jpg',
      description: 'Flower Blooms',
    },
    {
      preview:
        'https://cdn.pixabay.com/photo/2018/09/13/10/36/mountains-3674334__340.jpg',
      original:
        'https://cdn.pixabay.com/photo/2018/09/13/10/36/mountains-3674334_1280.jpg',
      description: 'Alpine Mountains',
    },
    {
      preview:
        'https://cdn.pixabay.com/photo/2019/05/16/23/04/landscape-4208571__340.jpg',
      original:
        'https://cdn.pixabay.com/photo/2019/05/16/23/04/landscape-4208571_1280.jpg',
      description: 'Mountain Lake Sailing',
    },
    {
      preview:
        'https://cdn.pixabay.com/photo/2019/05/17/09/27/the-alps-4209272__340.jpg',
      original:
        'https://cdn.pixabay.com/photo/2019/05/17/09/27/the-alps-4209272_1280.jpg',
      description: 'Alpine Spring Meadows',
    },
    {
      preview:
        'https://cdn.pixabay.com/photo/2019/05/16/21/10/landscape-4208255__340.jpg',
      original:
        'https://cdn.pixabay.com/photo/2019/05/16/21/10/landscape-4208255_1280.jpg',
      description: 'Nature Landscape',
    },
    {
      preview:
        'https://cdn.pixabay.com/photo/2019/05/17/04/35/lighthouse-4208843__340.jpg',
      original:
        'https://cdn.pixabay.com/photo/2019/05/17/04/35/lighthouse-4208843_1280.jpg',
      description: 'Lighthouse Coast Sea',
    },
  ];


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