export default class Gallery {
  _ulClass;
  _modalImg;
  _closeModal;
  _newElement;
  _lightboxImg;
  _images;
}

constructor(galleryItems) {
  this.makeGallery(galleryItems);
  this.closeBtn();
  this.bindImg();
}

makeGallery(array) {
  this._elementArray = array.map((item) => {
  const createImg = document.createElement('img');
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
  this._ulClass.append(...this.elementArray);
}