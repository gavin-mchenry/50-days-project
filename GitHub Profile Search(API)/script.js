const APIURL = 'https://api.github.com/users/'

const form = document.getElementById ('form')

const search = document.getElementById ('search')

const main = document.getElementById ('main')


async function getUser(username) {
    try {
        const {data} = await axios(APIURL + username)

    createUserCard(data)
    getRepos(username)
    } catch(error) {
        if(error.response.status == 404) {
        createErrorCard('No User Found')
        }
    }
    
   
}

async function getRepos (username) {
    try {
        const {data} = await axios(APIURL + username + '/repos?sort=created')

    addRepos(data)

    } catch(error) {
       
        createErrorCard('Repos Not Found')
      
    }
    
}

function createUserCard(user) {
    const cardHtml = `
  
    <div class="card">
        <div><img src="${user.avatar_url}" alt="${user.name}" class="avatar"></div>
   
    <div class="user-info">
        <h2>${user.name}</h2>
        <p>${user.bio } </p>

        <ul>
            <li>${user.followers}<strong>Followers</strong></li>
            <li>${user.following} <strong>Following</strong></li>
            <li>${user.public_repos}<strong>Repos</strong></li>
        </ul>

        <div id="repos">
            
        </div>
    </div>
    </div>

    `

    main.innerHTML = cardHtml
}

function createErrorCard (message) {
    const cardHtml = ` <div class="card"> 
    <h1> ${message}
    </div> `

    main.innerHTML = cardHtml
}

function addRepos (repos) {
    const reposEl = document.getElementById('repos')

    repos.slice(0,10).forEach (repo => {
        const repoEl = document.createElement ('a')

        repoEl.classList.add ('repo')

        repoEl.href = repo.html_url

        repoEl.target = '_blank'

        repoEl.innerText = repo.name

        reposEl.appendChild(repoEl)
    })
}

form.addEventListener('submit', (e) => {
    e.preventDefault()

    const user = search.value 

    if(user) {

        getUser(user)

        search.value = ''
    }

})