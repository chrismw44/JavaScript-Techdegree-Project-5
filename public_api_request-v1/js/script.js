const userUrl = 'https://randomuser.me/api/?results=12';
const galleryDiv = document.getElementById('gallery');

async function getJSON(url) {
    try {
        const response = await fetch(url);
        return await response.json();
    } catch (error) {
        throw error;
    }
}


function galleryHTML(data) {
    data.map(person => {
        const div = document.createElement('div');
        galleryDiv.appendChild(div);
        div.className = 'card';
        div.innerHTML = `
        <div class="card-img-container">
            <img class="card-img" src="${person.picture.large}" alt="profile picture">
        </div>
        <div class="card-info-container">
            <h3 id="name" class="card-name cap">${person.name.first} ${person.name.last}</h3>
            <p class="card-text">${person.email}</p>
            <p class="card-text cap">${person.location.city}, ${person.location.state}</p>
        </div>
        `;
    });
}


getJSON(userUrl)
    .then(data => data.results)
    .then(galleryHTML)
    .catch(err => console.error(err))