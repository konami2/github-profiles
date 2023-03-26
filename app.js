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
const country = document.getElementById('location');
const login = document.getElementById('login');
const locationIcon = document.querySelector('.fa-location-dot');
const twitterIcon = document.querySelector('.fa-square-twitter');
const githubLink = document.getElementById('github-link');
const twitterr = document.querySelector('#twitter');
const linkIcon = document.querySelector('.fa-paperclip');
const link = document.getElementById('link');
const githubIcon = document.querySelector('fa-github');
const github = document.getElementById('github');
const picture = document.getElementById('profile-pic');

const getDate = (string)=> {
	let index = string.indexOf('T');
	let removedT = string.substring(0, index);
	const date = new Date(removedT);
	const options = { month: 'long', day: 'numeric', year: 'numeric' };
	return date.toLocaleDateString('en-US', options);
}

const changeLocation = (location) => {
	if (!location) {
		country.innerHTML = 'Not available';
		country.style.color = 'grey';
		locationIcon.style.color = 'grey';
	}
	else {
		country.textContent = location;
		country.style.color = 'white';
		locationIcon.style.color = 'white';
	}
}

const changeTwitter = (twitter)=> {
	if (!twitter) {
		twitterr.innerHTML = 'Not available';
		twitterr.style.color = 'grey';
		twitterIcon.style.color = 'grey';
	}
	else {
		country.innerHTML = twitter;
		twitterr.style.color = 'white';
		twitterIcon.style.color = 'white';
	}
}

const changeLink = (blog)=> {
	if (!blog) {
		link.innerHTML = 'Not available';
		link.style.color = 'grey';
		linkIcon.style.color = 'grey';
	}
	else {
		country.innerHTML = twitter;
	}
}

const fetchdata = async () => {
	const response = await fetch (url);
	const data = await response.json();
	console.log(data);
	picture.src = data.avatar_url
	login.innerHTML = data.login;
	date.innerHTML = 'joined ' + getDate(data.created_at);
	if (data.bio == null) {
		bio.innerHTML = 'this profile has no bio'
	}
	else {
		bio.innerHTML = data.bio;
	}
	numberRepos.innerHTML = data.public_repos;
	numberFollowrs.innerHTML = data.followers;
	numberFollowing.innerHTML = data.following;
	hashtag.innerHTML = '@' + data.login;
	githubLink.setAttribute('href', data.html_url);
	changeLocation(data.location);
	changeTwitter(data.twitter_username);
	changeLink(data.blog);
}

button.addEventListener('click', ()=> {
	url = 'https://api.github.com/users/' + search.value;
	fetchdata();
})
search.addEventListener('keypress', (event)=> {
	if (event.key === "Enter" && search.value) {
		url = 'https://api.github.com/users/' + search.value;
		fetchdata();
	}
})
fetchdata();