const titleEl = document.querySelector("#title");
const directorEl = document.querySelector("#director");
const urlEl = document.querySelector("#url");
const addBt = document.querySelector(".btn-danger");
const cardbody = document.querySelectorAll(".card-body")[1];
const clear = document.getElementById("clear-films");

addBt.addEventListener("click", addFilm);
document.addEventListener("DOMContentLoaded", function(){
    let films = Storage.getFilms();
    UI.loadFilms(films);
});
cardbody.addEventListener("click", deleteFilm);
clear.addEventListener("click", clearFilms);


function addFilm(){
    const title = titleEl.value;
    const director = directorEl.value;
    const url = urlEl.value;

    if (title === "" || director === "" || url === ""){
        // Error
        UI.status("Please complete all items..", "danger");
    }
    else{
        // New Film
        const newFilm = new Film(title, director,url);

        UI.AddFilmUI(newFilm);
        Storage.addStorage(newFilm);
        UI.status("Film added is successfull..", "success");
    }

    UI.clearIn(titleEl,directorEl,urlEl);
}

function deleteFilm(e){

    if(e.target.id === "delete-film"){
        UI.deleteFilmUI(e.target);
        Storage.deleteStorage(e.target.parentElement.previousElementSibling.previousElementSibling.textContent);

        UI.status("Removed successfull", "warning");

    }
}

function clearFilms(){
    
    if(confirm("are you sure ?")){
        UI.clearAllUI();
        Storage.clearStorage();
    }
}