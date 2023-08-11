Reveal.initialize({
    center: true,
    hash: true,
    controls: false,
    transitionSpeed: 'fast',
    slideNumber: false,
    width: 1920,
    height: 1080,
    plugins: [RevealHighlight, RevealMath.KaTeX],
    autoAnimateStyles: [
        'opacity',
        'color',
        'background-color',
        'padding',
        'font-size',
        'line-height',
        'letter-spacing',
        'border-width',
        'border-color',
        'border-radius',
        'outline',
        'outline-offset'
    ]
});

// slide number hiding from https://stackoverflow.com/questions/31146251/hide-slide-number-on-title-page
Reveal.addEventListener('slidechanged', (event) => {
    const isSnOn = (event.currentSlide.dataset.hideSlideNumber !== 'true' ? 'c/t' : false);
    Reveal.configure({ slideNumber: isSnOn, progress: isSnOn });
});

// video fragment play

function playVid(video) {
    video.currentTime = 0;
    video.play();
}
function pauseVid(video) {
    video.currentTime = 0;
    video.play();
}

function playTarget(targetString) {
    targetVideo = document.querySelector(`#${targetString.replace('play-', '')}`);
    playVid(targetVideo);
}
function pauseTarget(targetString) {
    targetVideo = document.querySelector(`#${targetString.replace('play-', '')}`);
    pauseVid(targetVideo);
}

Reveal.on('fragmentshown', event => {
    if (event.fragment.classList.contains('play-self')) {
        playVid(event.fragment);
    } else if (event.fragment.classList.contains('play-target')) {
        playTarget(event.fragment.id);
    } else {
        switch (event.fragment.id) {
        }
    }
})

Reveal.on('fragmenthidden', event => {
    if (event.fragment.classList.contains('play-self')) {
        pauseVid(event.fragment);
    } else if (event.fragment.classList.contains('play-target')) {
        pauseTarget(event.fragment.id);
    } else {
        switch (event.fragment.id) {
        }
    }
})
