let searchButton = document.querySelector(".search_button");
let input = document.querySelector(".search_recipe");
let searchResults = document.querySelector(".results");




searchButton.addEventListener("click", function(){
let inputValue = input.value;

  fetch(`https://crossorigin.me/http://www.recipepuppy.com/api/?i=${inputValue}`).then(

      function(response){

        if(response.status !==200){
          console.log(response.status);
          return;
        }

        response.json().then(function(obj){

          obj.results.forEach(function(object){
            console.log("objects are: " ,object);
            let imageSource = object.thumbnail;
            let link = object.href;
            let title = object.title


            let results = `<h3>${title}</h3>
                           <a href="${link}"><img src="${imageSource}" alt="picture of food"></a>`

            searchResults.innerHTML += results;


          })

      });
     }
    )

  .catch(function(err){
  console.log("fetch error :-S", err);
});

});
