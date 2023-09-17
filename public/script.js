          let images = ["src/imgg.png"];
          let texts = [[""]];
          
          function createNewSlider() {
        
                new rgbKineticSlider({
                  slideImages: images,
                  itemsTitles: texts,
                  backgroundDisplacementSprite: "src/2.jpg",
                  cursorDisplacementSprite: "src/1.png",
                  cursorScaleIntensity: 0.5,
                  cursorMomentum: 0.14,
          
                  swipe: false,
                  swipeDistance: window.innerWidth * 0.4,
                  swipeScaleIntensity: 2,
          
                  slideTransitionDuration: 0.8,
                  transitionScaleIntensity: 30,
                  transitionScaleAmplitude: 160,
              });
          }

          createNewSlider()



var $text = document.querySelector('.btn-glitch-active'),
    $filter = document.querySelector('.svg-sprite'),
    $turb = $filter.querySelector('#filter feTurbulence'),
    turbVal = { val: 0.000001 },
    turbValX = { val: 0.000001 };

var glitchTimeline = function() {
    var timeline = new TimelineMax({
        repeat: -1,
        repeatDelay: 2,
        paused: true,
        onUpdate: function () {
            $turb.setAttribute('baseFrequency', turbVal.val + ' ' + turbValX.val);
        }
    });

    timeline
        .to(turbValX, 0.1, { val: 0.5 })
        .to(turbVal, 0.1, { val: 0.02 });
    timeline
        .set(turbValX, { val: 0.000001 })
        .set(turbVal, { val: 0.000001 });
    timeline
        .to(turbValX, 0.2, { val: 0.4 }, 0.4)
        .to(turbVal, 0.2, { val: 0.002 }, 0.4);
    timeline
        .set(turbValX, { val: 0.000001 })
        .set(turbVal, { val: 0.000001 });


    return {
        start: function() {
            timeline.play(0);
        },
        stop: function() {
            timeline.pause();
        }
    };
};

btnGlitch = new glitchTimeline();

$('.btn-glitch')
    .on('mouseenter', function () {
          $(this).addClass('btn-glitch-active');
          btnGlitch.start();
    })
    .on('mouseleave', function () {
        var $this = $(this);
        if ( $this.hasClass('btn-glitch-active') ) {
            $this.removeClass('btn-glitch-active');
            btnGlitch.stop();
        }
    });


    const text1 = baffle(".text1")
text1.set(
  {
    characters: '▒░▓ ▒<██/ >▓█░░ ▒█▒ █<░░▒ █░▒░ <▓▓ ▓▒',
    speed:120
}
)

text1.start()
text1.reveal(1000)

setInterval(() => {
    text1.start()
    text1.reveal(1000)

}, 7000);

let write = {
   
    strings: ['grammer.'],
    typeSpeed: 50,
    backSpeed: 50 , 
    backDelay: 7000,
    loop: true,
    
  }
var typed = new Typed('.color2', write );