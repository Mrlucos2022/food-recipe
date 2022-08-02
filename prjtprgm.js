form = document.querySelector("form")

form.addEventListener("submit", function (e){
    e.preventdefault();
    inpvalue = e.target.querySelector("input").value
fetchData4mAPI(inpvalue)
})
async function fetchData4mAPI(inpvalue){
    baseUrl = `https://themealdb.com/api/json/v1/1/search.php?f=a`
    recipecontainer = await fetch(baseUrl);
    data = await recipecontainer.json();
    console.log(datas)
}
