export default class Gallery {
  _ulClass;
  _modalImg;
  _closeModal;
  _newElement;
  _lightboxImg;
  _images;


constructor(galleryItems) {
  this.makeGallery(galleryItems);
  this.closeBtn();
  this.bindImg();
}

makeGallery(array) {
  this._elementArray = array.map((item) => {
  const createImg = document.createElement('img');
  createImg.src = item.preview;
  createImg.classList.add('gallery__image');
  createImg.dataset.source = item.original;
  createImg.alt = item.description;

  const linkImg = document.createElement('a');
  linkImg.classList.add('gallery__link');
  linkImg.href = item.original;
  linkImg.appendChild(createImg);

  const itemList = document.createElement('li')
  itemList.classList.add('gallery__item');
  itemList.appendChild(linkImg);

  return itemList;
  })

  this._ulClass = document.querySelector('ul.js-gallery');
  this._ulClass.append(...this._elementArray);
}

closeBtn() {
  this._closeModal = document.querySelector('button[data-action="close-lightbox"]');
  this._newElement = document.querySelector('div.lightbox__element');
  this._lightboxImg = document.querySelector('img.lightbox__img');
  this._images = [...document.querySelectorAll('img.gallery__image')];
}

bindImg() {
  this._ulClass.addEventListener('click', this.onClick.bind(this));
  this._closeModal.addEventListener('click', this.closeModal.bind(this));
  this._newElement.addEventListener('click', this.elemClick.bind(this));
}

onClick(e) {
  if (e.target.nodeName !== 'IMG')
  return;
  e.preventDefault();

  this._modalImg = e.target;
  this.openModal();
  this.showImage(e.target.dataset.source, e.target.alt);
}

openModal() {
  window.addEventListener('keydown', this.onPress.bind(this));
  document.querySelector('lightbox').classList.add('is-open');
}

showImage(source, alt) {
  this._lightboxImg.src = source;
  this._lightboxImg.alt = alt;
}

closeModal() {
  window.removeEventListener('keydown', this.onPress);
  document.querySelector('.lightbox').classList.remove('is-open');
  this._lightboxImg.src = '';
  this._lightboxImg.alt = '';
}

elemClick(e) {
  if(e.currentTarget === e.target) this.closeModal();
}

onPress(e) {
  if(e.code === 'Escape') this.closeModal();
  if(e.code === 'ArrowRight') this.nextImg();
  if(e.code === 'ArrowRLeft') this.previousImg();
}

nextImg() {
  let nexus = this._images.indexOf(this._modalImg);
  nexus++;
  if(nexus === this._images.length) nexus = 0;
  this._modalImg = this._images[nexus];
  this.showImage(this._modalImg.dataset.source, this._modalImg.alt);
}

previousImg() {
  let nexus = this._images.indexOf(this._modalImg);
  nexus--;
  if(nexus < 0)
  nexus = this._images.length -1;
  this._modalImg = this._images[nexus];
  this.showImage(this._modalImg.dataset.source, this._modalImg.alt);
}
}