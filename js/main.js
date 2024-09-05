

const tabsButtons = document.querySelectorAll(".tab-btn")

const tabs = document.querySelectorAll('.tab')


tabsButtons.forEach((item, index) => {
  item.addEventListener('click', () => {
    document.querySelector('.tab-btn.active').classList.remove('active')
    document.querySelector('.tab.active').classList.remove('active')
    item.classList.add('active')
    tabs[index].classList.add('active')
  })
});

const swiper = new Swiper('.swiper', {
  loop: true,
  paralax: true,

  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },


});


const btn = document.querySelectorAll('.btn')

btn.forEach(item => {
  item.addEventListener('click', () => {
    document.querySelector('.contact__popup').classList.add('active')
    document.querySelector('body').classList.add('hidden')

  })
})


document.querySelector('.close').addEventListener("click", () => {
  document.querySelector('.contact__popup').classList.remove('active')
  document.querySelector('body').classList.remove('hidden')

})





const voice = document.querySelectorAll('.voice')
const time = document.querySelectorAll('.timer')

var playing = [false, false];

var rew1 = new Audio('../voice/Japan.mp3');
var rew2 = new Audio('../voice/rew1.ogg');
var rew3 = new Audio('../voice/rew3.ogg');

rew1.preload = "auto";
rew2.preload = "auto";
rew3.preload = "auto";

const player = [rew1, rew2, rew3]
const durationStage = [700, 430]
const duration = [700, 430]



voice.forEach((el, index) => {
  el.addEventListener("click", () => {
    el.classList.toggle('paused')

    player[index].addEventListener('ended', () => {
      playing[index] = false;
      el.classList.remove('paused')
    });
    // const intervalId = setInterval(() => {
    //   if (player[index]) {
    //     duration[index] -= 10
    //     time[index].querySelector('span').style.width = 100 - ((duration[index] / durationStage[index]) * 100) + "%"
    //   }
    // }, 1000);

    if (playing[index]) {
      // clearInterval(intervalId)
      player[index].pause();
    } else {
      player[index].play();

    }
    playing[index] = !playing[index];
  })
})


document.querySelector('.lang').addEventListener('click', () => {
  document.querySelector('.lang').classList.toggle('active')
})