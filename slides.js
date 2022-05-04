const slidecontainer= document.querySelector('.slider-container');
const slideRight= document.querySelector('.right-slide');
const slideLeft= document.querySelector('.left-slide');
const UpButton= document.querySelector('.up-button');
const DownButton= document.querySelector('.down-button');
const slideimages = slideRight.querySelectorAll('div').length


let activeslideindex=0
slideLeft.style.top=`-${(slideimages -1) * 100}vh`
UpButton.addEventListener('click', () => changeSlide('up'))
DownButton.addEventListener('click', () => changeSlide('down'))

const changeSlide =(direction) => {
     const sliderHeight= slidecontainer.clientHeight
     if (direction === 'up'){
         activeslideindex++
         if (activeslideindex > slideimages -1){
             activeslideindex=0
         }
     } else if (direction === 'down'){
            activeslideindex--
            if (activeslideindex < 0){
                activeslideindex= slideimages -1
            }
        }
     slideRight.style.transform = `translateY(-${activeslideindex * sliderHeight}px)`
     slideLeft.style.transform = `translateY(${activeslideindex * sliderHeight}px)`
}