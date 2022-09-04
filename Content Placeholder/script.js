const header = document.getElementById('header')
const title = document.getElementById('title')
const excerpt = document.getElementById('excerpt')
const profile_img = document.getElementById('profile_img')
const name = document.getElementById('name')
const date = document.getElementById('date')

const animated_bgs = document.querySelectorAll ('.animated-bg')
const animated_bgs_text = document.querySelectorAll ('.animated-bg-text')


setTimeout(getData, 2500)

function getData () {
    header.innerHTML= '<img src="https://images.unsplash.com/photo-1642122245351-d4e44717d6fb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDQ4fHFQWXNEenZKT1ljfHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=1296&q=60" alt="" >'

    title.innerHTML= 'Lorem ipsum dolor sit amet.'

    excerpt.innerHTML= 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aperiam, accusantium.'

    profile_img.innerHTML= '<img src="https://randomuser.me/api/portraits/men/45.jpg" alt="">'

    name.innerHTML= 'John Doe'

    date.innerHTML= 'Sept 4, 2022'

    animated_bgs.forEach(bg => bg.classList.remove('animated-bg'))
    animated_bgs_text.forEach(bg => bg.classList.remove('animated-bgs-text'))
}