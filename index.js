const filmsContainer = document.querySelector('.films-container')

fetch('http://www.omdbapi.com/?apikey=9442cef9&s=blade&page=3')
    .then( res => res.json())
    .then(searchData => {

        console.table(searchData)

        const searchResults = searchData.Search

        for(item of searchResults){

            const imdbId = item.imdbID


            fetch(`http://www.omdbapi.com/?apikey=9442cef9&i=${imdbId}`)
            .then(response => response.json())
            .then(filmData =>{

                console.log(filmData)

                filmsContainer.innerHTML += `
                
                <div class="film-card">

                    <img src="${filmData.Poster}" class="film-card-poster"></img>
                    <div class="film-card-text">
                        <div class="card-text-row">
                            <p>${filmData.Title}</p>
                            <p>${filmData.imdbRating}</p>
                        </div>
                        <div class="card-text-row">
                            <p>${filmData.Runtime}</p>
                            <p>${filmData.Genre}</p>
                            <button>Watchlist</button>
                        </div>
                        
                        <p>${filmData.Plot}</p>
                        <hr>

                    </div>
                </div>
         
                `




            })


        }

        
        
        
    })