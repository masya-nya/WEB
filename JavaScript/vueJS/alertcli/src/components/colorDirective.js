let interval;

const mouseOver = event => {
    event.target.style.color = 'darkblue'
}
const mouseOut = event => {
    event.target.style.color = 'darkred'
}

export default {
    mounted(el, binding){
        console.log(el)
        console.log(binding)
        el.style.color = binding.value
        el.style.cursor = 'pointer'

        if(binding.modifiers.blink) {
            interval = setInterval(() => {
                el.style.color = el.style.color === 'darkred' ? 'darkblue' : 'darkred'
            }, 1000)
        }

        if(binding.modifiers.hover) {
            el.addEventListener('mouseover', mouseOver)

            el.addEventListener('mouseout', mouseOut)
        }
    },
    updated(el, binding) {
        console.log(el)
        console.log(binding)
        el.style[binding.arg] = binding.value


        
    },
    unmounted(el) {
        if (interval) {
            clearInterval(interval)
        }
        el.removeEventListener('mouseover', mouseOver)
        el.removeEventListener('mouseout', mouseOut)
    }
}