// // let movies=[
// // {
// //     name:"farzi",
// //     des:"lorem dsds dsds dsd dsd sds dsd sd sd sd sad sd sd sds d sdsdsd sds dsa dsa ads ds ds ds d sd s ds ds ds dsa dsa",
// //     image:"farzi.jpg"

// // },
// // {
// //     name:"Tu jhoothi me makkar",
// //     des:"lorem dsds dsds dsd dsd sds dsd sd sd sd sad sd sd sds d sdsdsd sds dsa dsa ads ds ds ds d sd s ds ds ds dsa dsa",
// //     image:"tjmm.avif"
// // },
// // {
// //     name:"Money hiest",
// //     des:"lorem dsds dsds dsd dsd sds dsd sd sd sd sad sd sd sds d sdsdsd sds dsa dsa ads ds ds ds d sd s ds ds ds dsa dsa",
// //     image:"money.jpeg"
// // },

// // ];
// // const carousel = document.querySelector('.carousel');
// // let sliders = [];

// // let slideIndex = 0;
// // const createSlide = () => {
// //     if(slideIndex >= movies.length){
// //         slideIndex = 0;
// //     }

// //     // creating DOM element
// //     let slide = document.createElement('div');
// //     let imgElement = document.createElement('img');
// //     let content = document.createElement('div');
// //     let h1 = document.createElement('h1');
// //     let p = document.createElement('p');
// // }
// // {
// //     // attaching all elements
// //     imgElement.appendChild(document.createTextNode(''));
// //     h1.appendChild(document.createTextNode(movies[slideIndex].name));
// //     p.appendChild(document.createTextNode(movies[slideIndex].des));
// //     content.appendChild(h1);
// //     content.appendChild(p);
// //     slide.appendChild(content);
// //     slide.appendChild(imgElement);
// //     carousel.appendChild(slide);
// // }
// // {
// //     // setting up image
// //     imgElement.src = movies[slideIndex].image;
// //     slideIndex++;

// //     // setting elements classname
// //     slide.className = 'slider';
// //     content.className = 'slide-content';
// //     h1.className = 'movie-title';
// //     p.className = 'movie-des';

// //     sliders.push(slide);
// // }
// // {
// //     if(sliders.length){
// //         sliders[0].style.marginLeft = `calc(-${100 * (sliders.length - 2)}% - ${30 * (sliders.length - 2)}px)`;
// //     }

    
// // }
// // for(let i=0;i<3;i++){
// //     createSlide();
// // }
// // setInterval(()=>{
// //     createSlide();
// // },3000)









// let movies = [
//     {
//         name: 'farzi',
//         des: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit porro et veniam excepturi, eaque voluptatem impedit nulla laboriosam facilis ut laboriosam libero!',
//         image: 'farzi.jpg'
//     },
//     {
//         name: 'TJMM',
//         des: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit porro et veniam excepturi, eaque voluptatem impedit nulla laboriosam facilis ut laboriosam libero!',
//         image: 'tjmm.avif'
//     },
//     {
//         name: 'money hiest',
//         des: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit porro et veniam excepturi, eaque voluptatem impedit nulla laboriosam facilis ut laboriosam libero!',
//         image: 'm1.jpg'
//     },
// /// and so on
// ]
// const carousel = document.querySelector('.carousel');
// let sliders = [];

// let slideIndex = 0;
// const createSlide = () => {
//     if(slideIndex >= movies.length){
//         slideIndex = 0;
//     }

//     // creating DOM element
//     let slide = document.createElement('div');
//     let imgElement = document.createElement('img');
//     let content = document.createElement('div');
//     let h1 = document.createElement('h1');
//     let p = document.createElement('p');
// }
// {
//     // attaching all elements
//     imgElement.appendChild(document.createTextNode(''));
//     h1.appendChild(document.createTextNode(movies[slideIndex].name));
//     p.appendChild(document.createTextNode(movies[slideIndex].des));
//     content.appendChild(h1);
//     content.appendChild(p);
//     slide.appendChild(content);
//     slide.appendChild(imgElement);
//     carousel.appendChild(slide);
// }
// {
//     // setting up image
//     imgElement.src = movies[slideIndex].image;
//     slideIndex++;

//     // setting elements classname
//     slide.className = 'slider';
//     content.className = 'slide-content';
//     h1.className = 'movie-title';
//     p.className = 'movie-des';

//     sliders.push(slide);
// }
// {
//     if(sliders.length){
//         sliders[0].style.marginLeft = `calc(-${100 * (sliders.length - 2)}% - ${30 * (sliders.length - 2)}px)`;
//     }
// }
// for(let i = 0; i < 3; i++){
//     createSlide();
// }

// setInterval(() => {
//     createSlide();
// }, 3000);





let cardContainers = [...document.querySelectorAll('.card-container')];
let preBtns = [...document.querySelectorAll('.pre-btn')];
let nxtBtns = [...document.querySelectorAll('.nxt-btn')];

cardContainers.forEach((item, i) => {
    let containerDimensions = item.getBoundingClientRect();
    let containerWidth = containerDimensions.width;

    nxtBtns[i].addEventListener('click', () => {
        item.scrollLeft += containerWidth - 200;
    })

    preBtns[i].addEventListener('click', () => {
        item.scrollLeft -= containerWidth + 200;
    })
})