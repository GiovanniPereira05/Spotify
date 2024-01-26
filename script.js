const searchInput = document.getElementById('search-input');
const resultsArtists = document.getElementById('result-artists');
const resultPlaylist = document.getElementById('result-playlists')

function requestApi(searchTerm){
    const url = `http://localhost:3000/artists?name_like=${searchTerm}`
    fetch(url)
        .then((response) => response.json())
        .then((result) => displayResults(result))
}   

function displayResults(result){
    resultPlaylist.classList.add('hidden');
    const artistName = document.getElementById('artist-name')
    const artistImage = document.getElementById('artist-img')

    result.forEach(element => {
        artistName.innerText = element.name;
        artistImage.src = element.urlImg;
    });

    resultsArtists.classList.remove('hidden')
}

document.addEventListener('input', function(){
    const searchTerm = searchInput.value.toLowerCase();
    if(searchTerm === ''){
        resultPlaylist.classList.add('hidden');
        resultsArtists.classList.remove('hidden');  
        return;
    }

    requestApi(searchTerm);
});

function carregar(){
var msg = document.getElementById('greeting')
var data = new Date()
var hora = data.getHours()
if (hora < 12 && hora >= 6){
    msg.innerHTML = "Bom dia"
} else if (hora >= 12 && hora < 18){
    msg.innerHTML = "Boa tarde"
} else {
        msg.innerHTML = "Boa noite"
}
}