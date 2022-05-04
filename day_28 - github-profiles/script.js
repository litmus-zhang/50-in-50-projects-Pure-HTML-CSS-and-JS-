const APIURL = 'https://api.github.com/users/';


getUser('litmus-zhang');
function getUser(username)
{ 
    axios(APIURL + username)
        .then(res => console.log(res.data))
    .catch(err => console.log(err));
}