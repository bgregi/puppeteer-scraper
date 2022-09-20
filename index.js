const searchButton = document.getElementById('search-button');
searchButton.addEventListener('click', getNews);

const inputWebsite = document.getElementById('website-input');

async function getNews() {
	fetch('http://localhost:3000/', {
		method: 'POST',
		headers: {
			Accept: 'application/json',
			'Content-Type': 'application/json',
		},
		body: JSON.stringify({
			url: inputWebsite.value
		}),
	});
}
