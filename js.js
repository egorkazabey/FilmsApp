'use strict';
let numberOfFilms;

function start() {
    numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');
    
    while(numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {

        numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');
    }
}

start();

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

showMyDB()

function rememberMyFilms() {
    for (let i = 0; i < 2; i++) {
        const a = prompt('Один из последних просмотренных фильмов?', ''),
              b = prompt('На сколько оцените его? От 1 до 5', '');
    
            if (a != null && b != null && a != '' && b != '' && a.length < 50 && b.length < 2) {
                personalMovieDB.movies[a] = b;
                console.log('done');
            } else {
                alert('error');
                i--;
            }
    }
}

rememberMyFilms()

function writeYourGenres() {
    for (let i = 1; i < 4; i++) {
        let writeYourGenres = prompt(`Ваш любимый жанр под номером ${i}`)
        personalMovieDB.genres['writeYourGenres'] = writeYourGenres
    }
}


writeYourGenres()

function moviesWatched() {
    if (personalMovieDB.count < 10) {
        console.log('Просмотрено довольно мало фильмов');
    } else if (personalMovieDB.count <= 30) {
        console.log('Вы классический зритель');
    } else if (personalMovieDB.count > 30) {
        console.log('Вы киноман');
    } else {
        console.log('Произошла ошибка');
    }
}

moviesWatched();

function showMyDB() {
    if (personalMovieDB.privat === false) {
        console.log(personalMovieDB);
    }
}

showMyDB()

