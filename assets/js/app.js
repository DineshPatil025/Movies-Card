const API_URL = 'https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=3fd2be6f0c70a2a598f084ddfb75487c&page=3'

const IMG_PATH = 'https://image.tmdb.org/t/p/w1280'


const moviesContainer = document.getElementById("moviesContainer");


let movieListResult = "";

movieList.forEach( function (mov){


   
    movieListResult += `
    
    <div class="col-md-4">

    <div class="card imdbCard mb-4">

        <figure>
            <img src=${IMG_PATH}${mov.poster_path} alt="poster"
                class="cardImg">

            <figcaption>
                <div class="row">
                    <div class="col-9">
                        <p class="details name">${mov.title}</p>
                    </div>
                    <div class="col-3">
                        <p class="details rating  ${colors(mov.vote_average)}">${mov.vote_average} </p>

                    </div>
                </div>

            </figcaption>
            
            <div class="overvieew">
                <h4 >Overview</h4>
                <p>${mov.overview}</p>
            </div>
        </figure>



    </div>
</div>
    
    ` 
})

function colors(rating){
    if(rating >= 8){
        return "green"
    }else if(rating >= 5){
        return "yellow"
    }else if( rating >= 4){
        return "orange"
    }else{
        return "red"
    }
}

let result =colors(2)
console.log(result)



moviesContainer.innerHTML = movieListResult;
