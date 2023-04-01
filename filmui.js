class UI{

    static AddFilmUI(newFilm){   
       const filmList = document.getElementById("films");
     
       filmList.innerHTML += `
       
             <tr>
                 <td><img src="${newFilm.url}" class="img-fluid img-thumbnail"></td>
                 <td>${newFilm.title}</td>
                 <td>${newFilm.director}</td>
                 <td><a href="#" id = "delete-film" class = "btn btn-danger">Remove Film</a></td>
             </tr>
       `;
     }

    static clearIn(e1,e2,e3){
        e1.value = "";
        e2.value = "";
        e3.value = "";
    }

    static status(message,type){
        const cardBody = document.querySelector(".card-body");
    
        const stat = document.createElement("div");
    
        stat.className = `alert alert-${type}`;
        stat.textContent = message;
    
        cardBody.appendChild(stat);
    
    
        setTimeout(function(){
            stat.remove();
    
        },1000);
    }

    static loadFilms(films){

        const filmList = document.getElementById("films");

        films.forEach(film => {
            filmList.innerHTML += `<tr>
            <td><img src="${film.url}" class="img-fluid img-thumbnail"></td>
            <td>${film.title}</td>
            <td>${film.director}</td>
            <td><a href="#" id = "delete-film" class = "btn btn-danger">Filmi Sil</a></td>
        </tr>`;
        });
    }

    static deleteFilmUI(e){
        
        e.parentElement.parentElement.remove();
    
    }

    static clearAllUI(){

        const filmList = document.getElementById("films");

        while(filmList.firstElementChild !== null){
            filmList.firstElementChild.remove();
        }
    }
}