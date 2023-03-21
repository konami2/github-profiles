let url = 'https://api.github.com/users/konami2';
const button = document.querySelector('button');
const search = document.getElementById('search');
const hashtag = document.getElementById('hashtag');
const numberFollowing = document.getElementById('number-following');
const numberFollowrs = document.getElementById('number-followers');
const numberRepos = document.getElementById('number-repos');
const bio = document.getElementById('bio');
const joined = document.querySelector('.date');
const date = document.querySelector('#date');
const login = document.getElementById('login');
const picture = document.getElementById('profile-pic');

const fetchdata = async () => {
	const response = await fetch (url);
	const data = await response.json();
	console.log(data);
	picture.src = data.avatar_url
	login.innerHTML = data.login;
	date.innerHTML = 'joined ' + data.created_at.split('T15:59:05Z').join('')
	if (data.bio == null) {
		bio.innerHTML = 'this profile has no bio'
	}
	else {
		bio.innerHTML = data.bio;
	}
	numberRepos.innerHTML = data.public_repos;
	numberFollowrs.innerHTML = data.followers;
	numberFollowing.innerHTML = data.following
	hashtag.innerHTML = '@' + data.login
}

button.addEventListener('click', ()=> {
	url = 'https://api.github.com/users/' + search.value;
	fetchdata();
})

let flag = 1;
if (flag) {
	fetchdata();
	flag = 0;
}
