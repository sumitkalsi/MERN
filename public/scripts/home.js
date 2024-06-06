document.querySelector('.ham').addEventListener('click', () => {

  document.querySelector('.nav').classList.toggle('navgo');


})

let n = 0;
const img = document.querySelectorAll('.sliderimages');

function slideimage() {
  img.forEach((img, index) => {
    img.style.transform = `translateX(-${n * 100}vw)`;
  });
}


document.querySelector('.pre').addEventListener('click', () => {


  if (n > 0) {
    n--;
    slideimage();
    console.log(n);
  }
  else {
    n = img.length - 1;
    slideimage();
  }

});


document.querySelector('.next').addEventListener('click', () => {

  if (n < img.length - 1) {
    n++;
    slideimage();

    console.log(n);
  }
  else {
    n = 0;
    slideimage();
  }

});
setInterval(()=>{

  
  
  if (n < img.length - 1) {
    n++;
    slideimage();

    console.log(n);
  }
  else {
    n = 0;
    slideimage();
  }
},5000);




