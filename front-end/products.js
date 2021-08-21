// récuperation de la chaîne de requete dans l'url

const queryString_url_id = window.location.search;
console.log(queryString_url_id)
//méthode pour extraire l'id

const leId = queryString_url_id.slice(1);

console.log(leId);


// selectionner l'id dans lequel je vais injecter du code via innerHtml

const elementProducts = document.querySelector(".container_Page_Products");

elementProducts.innerHTML += `
<div class="cardProducts">
                <img src="" alt=""/>
                <ul>
                  <li>nom produits :  </li>
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

