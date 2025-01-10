document.addEventListener('DOMContentLoaded', () => {
    const prevButton = document.getElementById('prevBtn');
    const nextButton = document.getElementById('nextBtn');
    const track = document.querySelector('.carousel-track');
    const slides = Array.from(track.children);

    let index = 0;

    function nextSlide(){
        slides[index].classList.add('hidden');
        index++;
        if(index > slides.length - 1){
            index = 0;
        }
        slides[index].classList.remove('hidden');
    }

    function prevSlide(){
        slides[index].classList.add('hidden');
        index--;
        if(index < 0){
            index = slides.length - 1;
        }
        slides[index].classList.remove('hidden');
    }

    nextButton.addEventListener('click', nextSlide);
    prevButton.addEventListener('click', prevSlide);
})

