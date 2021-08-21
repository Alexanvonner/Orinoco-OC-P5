

// récuperation de la chaîne de requete dans l'url

const queryString_url_id = window.location.search;



//méthode pour extraire l'id sans le 1er caractere FACILEMENT
const leId = queryString_url_id.slice(4);
console.log(leId);





// contact Api pour recuperer les information ID
const getTeddies = async function(){
    let response = await fetch('http://localhost:3000/api/teddies/'+ leId)
    .then(response => response.json())
    .then((items) => {
        let teddies = items;
        console.log(teddies);
    })
}

getTeddies();
// selectionner l'id dans lequel je vais injecter du code via innerHtml

const elementProducts = document.querySelector(".container_Page_Products");

elementProducts.innerHTML += `
<div class="cardProducts">
                <img src="" alt=""/>
                <ul>
                  <li>nom produits : </li>
                  <li>description : </li>
                  <li>option 1 : </li>
                  <li>option 2 : </li>
                </ul>
                <form>
                  <label for="optionProducts"></label>
                  <select name="optionsProducts" id="optionsProducts">
                    <option value="option_1">option 1</option>
                    <option value="option_2">option 2</option>
                  </select>
                </form>
                <button id="btn-envoyer" type="submit" name="btn-envoyer">Commander l'article</button>
            </div>`;

