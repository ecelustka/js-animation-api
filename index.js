/* Basic animation */
const basicAnimation = document.querySelector('.js-basic')
// element.animate([keyframes], {properties (duration, delay etc..)})
basicAnimation.animate([
    { transform: 'translateX(0)' },
    { transform: 'translateX(200px)' },
], {
    duration: 2000,
    iterations: Infinity,
    easing: 'ease-in-out',
    direction: 'alternate'
})

/* Play & pause animation */
const elementPausePlay = document.querySelector('.js-pause-play')
const animationPausePlay =  elementPausePlay.animate([
    { transform: 'translateX(0)', opacity: 1 },
    { transform: 'translateX(200px)', opacity: 0.25 },
],
{
    duration: 2000,
    iterations: Infinity,
    easing: 'linear',
    direction: 'alternate'
})
document.querySelector('.js-pause-btn').addEventListener('click', () => {
    animationPausePlay.pause()
})
document.querySelector('.js-play-btn').addEventListener('click', () => {
    animationPausePlay.play()
})

/* Animation with promises */
document.querySelector('.js-promises-run').addEventListener('click', async () => {
    const element1 = document.querySelector('.js-promises-1')
    const element2 = document.querySelector('.js-promises-2')
    const element1Animation = element1.animate([
        { transform: 'translateX(0)', },
        { transform: 'translateX(200px)', backgroundColor: 'blue' },
        { transform: 'translateX(0)', },
    ],
    {
        duration: 2000,
        iterations: 2,
        easing: 'linear',
    })
    // await till element1Animation is finished
    await element1Animation.finished

    element2.animate([
        { transform: 'translateX(0)', },
        { transform: 'translateX(200px)', backgroundColor: 'yellow' },
        { transform: 'translateX(0)', },
    ],
    {
        duration: 2000,
        iterations: 2,
        easing: 'linear',
        direction: 'alternate'
    })
})

/* Animations events */
// on finish event
document.querySelector('.js-events-finish-run').addEventListener('click', () => {
    const element = document.querySelector('.js-events-finish')
    const animation = element.animate([
        { transform: 'translateX(0)', },
        { transform: 'translateX(200px) scale(1.1)', },
        { transform: 'translateX(0)', }
    ],
        {
            duration: 2000,
            iterations: 2,
            easing: 'linear',
            direction: 'alternate'
        }
    )

    animation.onfinish = () => {
        alert('onfinish event')
    }
})

// oncancel event
const cancelElement = document.querySelector('.js-events-cancel')
const cancelAnimaton = cancelElement.animate([
    { transform: 'translateX(0)', },
    { transform: 'translateX(200px) scale(0.8)', },
    { transform: 'translateX(0)', }
],
    {
        duration: 2000,
        iterations: Infinity,
        easing: 'linear',
        direction: 'alternate'
    }
)
cancelAnimaton.oncancel = () => {
    alert('oncancel event')
}
document.querySelector('.js-events-cancel-run').addEventListener('click', () => {
    cancelAnimaton.cancel()
})