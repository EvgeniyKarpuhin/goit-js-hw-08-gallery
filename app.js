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

//   const images = document.querySelector('ul.js-gallery');
//   makeImages(galleryItems);

//   function makeImages(newImage) {
//     const array = newImage.map(item => {
//       return
//       `<li class = 'gallery__item'>
//       <img class = 'gallery__image'
//       src = '${item.original}'
//       alt = '${item.description}'
//       width = '320px'
//       >
//       </li>`
//     }).join('');
//     images.innerHTML = array;
//   }

//   const newImage = document.querySelectorAll('img.gallery__image');

//   const options = {
//     root: null,
//     rootMargin: "0px",
//     threshold: 1.0,
//   }

//   const img = (opened, obsrver) => {
//     e.forEach(open => {
//       if(open.isInterecting) {
//         open.target.src = open.target.dataset.src;
//         open.target.classList.add('show')
//       }
//     });
//   }

// const observ = new IntersectionObserver(img, options);
// newImage.forEach(item => {
// observ.observe(item);
// });

const containerLazyImages = document.querySelector('ul.feed');
makeMarkupForLazyImages(galleryItems);

function makeMarkupForLazyImages(imagesArray) {
  const markup = imagesArray.map(item => {
    return `
    <li class="feed_item">
      <img
        class='lazyload'            
        data-src='${item.original}'
        alt='${item.description}'
        width='320px'
        height='240px'
      >
      
    </li>
    `
  }).join('');

  containerLazyImages.innerHTML = markup;
}



const imagesArray = document.querySelectorAll('img.lazyload');

const options = {
  root: null,
  rootMargin: "0px",
  threshold: 1.0,
}

const observFunc = (entries, observer) => {
  entries.forEach(entry => {

    if (entry.isIntersecting) {
      console.log('intersecting');
      console.log(entry.target);
        entry.target.src = entry.target.dataset.src;
        entry.target.classList.add('appear');
      // observer.disconnect();
    }
  });
}

const observer = new IntersectionObserver(observFunc, options);

imagesArray.forEach(item => {
  observer.observe(item);
});