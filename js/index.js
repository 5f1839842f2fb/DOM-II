/* // Your code goes here
const funBusImg = document.querySelector('.intro img');
funBusImg.addEventListener('mouseenter', () => {
    event.target.style.transform = 'scale(1.3)';
})
funBusImg.addEventListener('mouseleave', () => {
    event.target.style.transform = '';
})

const imgDrag = document.querySelectorAll('.img-content')
imgDrag[0].addEventListener('drag', () => {
    event.target.style.transform = 'scale(.5)'
})
imgDrag[1].addEventListener('drag', () => {
    event.target.style.transform = 'scale(.5)'
})
const everything = document.querySelectorAll('*')

for(let i = 0; i < everything.length; i++) {
    everything[i].addEventListener('keydown', () => {
        event.target.style.zoom = '1.3'
    })
    everything[i].addEventListener('keyup', () => {
        event.target.style.zoom = '1'
    })
    everything[i].addEventListener('click', () => {
        event.target.style.color = 'blue'
        
    })
    everything[i].addEventListener('contextmenu', () => {
        everything[7].style.backgroundColor = 'yellow'
    })
    everything[i].addEventListener('wheel', () => {
        everything[7].style.backgroundColor = 'green'
    })
    everything[i].addEventListener('select', () => {
        event.target.style.display = 'none'
    })
    everything[i].addEventListener('click', () => {
        event.target.style.backgroundColor = 'teal'
    })
}

const body = document.querySelector('body').addEventListener('dblclick', () => {
    window.location.reload(true);
})  
 */

/*  const test1 = document.querySelector('.text-content p').addEventListener('click', () => {
     event.target.style.color = 'green'
     event.stopPropagation()
 })

 const test2 = document.querySelector('.text-content').addEventListener('click', () => {
    event.target.style.backgroundColor = 'grey'
}) */