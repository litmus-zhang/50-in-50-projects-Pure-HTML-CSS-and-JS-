const APIURL = 'https://api.github.com/users/';
const form = document.getElementById('form');
const main = document.getElementById('main');
const search = document.getElementById('search');


// getRepos('litmus-zhang');
async function getUser(username)
{ 
   try {
       const { data } = await axios(APIURL + username);
   
       createUserCard(data);
       getRepos(username);
       
   } catch (error) {
      if (error.response.status === 404) {
          createErrorCard("No Profile found with that username");
      }
   }
}

async function getRepos(username)
{
    try {
        const { data } = await axios(`${APIURL}${username}/repos?sort=created`);
        console.log(data);
        addRepos(data);
    } catch (error) {
   
            createErrorCard("Problem fetching the Repositories");
        
    }
}

function addRepos(Repos)
{
    const reposHTML = document.getElementById('repos');
    Repos.slice(0,6).forEach(repo =>
    { 
        const repoLink = document.createElement('a');
        repoLink.classList.add('repo');
        repoLink.href = repo.html_url;
        repoLink.target = '_blank';
        repoLink.textContent = repo.name;
        reposHTML.appendChild(repoLink);
    })
}

function createUserCard(user)
{
    const cardHTML = `
    <div class="card">

         <div class="">
             <img src="${user.avatar_url}"  alt="${user.name}" class="avatar">
     </div>
     <div class="user-info">
         <h2>${user.name}</h2>
         <p>${user.bio}</p>
             <ul>
                 <li>${user.followers} <strong>Followers</strong></li>
                 <li>${user.following} <strong>Following</strong></li>
                 <li>${user.public_repos}<strong>Repositories</strong></li>
                </ul>
                <div id="repos">
                </div>
            </div>
        </div>
    `
    main.innerHTML = cardHTML;
}
function createErrorCard(msg)
{
    const cardHTML = `
    <div class="card">
         <h2>${msg}</h2>
        </div>
    `
    main.innerHTML = cardHTML;
}
form.addEventListener('submit', (e) =>
{ 
    e.preventDefault();
    const user = search.value;
    if (user)
    {     
        getUser(user);
        search.value = '';
    }
})

