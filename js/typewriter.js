async function typewriter(el) {
    const textArray = el.innerHTML.split('')
    el.innerHTML = ''
    
   await textArray.forEach((letra, index) => {
        setTimeout(() => {
            el.innerHTML += letra
        }, 75 * index)
        console.log(el.innerHTML = '')
    })
}
async function typewritersubtitle(el) {
    const textArray = el.innerHTML.split('')
    el.innerHTML = ''
    
   await textArray.forEach((letra, index) => {
        setTimeout(() => {
            el.innerHTML += letra
        }, 75 * index)
        console.log(el.innerHTML = '')
    })
}

const title = document.querySelector('.work')
const subtitle = document.querySelector('.about')

// typewriter(title)
typewritersubtitle(subtitle)