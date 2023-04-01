class Storage{

    static getFilms(){
        
        let films;

        if (localStorage.getItem("films") === null){
            films = [];
        }
        else{
            films = JSON.parse(localStorage.getItem("films"));
        };

        return films;
    }

    static addStorage(newFilm){

        let films = this.getFilms();

        films.push(newFilm);
        localStorage.setItem("films",JSON.stringify(films));
    }

    static deleteStorage(filmTitle){
        let films = this.getFilms();

        films.forEach((film,index) => {
            if(film.title === filmTitle){
                films.splice(index,1);
            }
        });

        localStorage.setItem("films", JSON.stringify(films));
    }

    static clearStorage(){
        localStorage.removeItem("films");
    }
}