fetch("http://localhost:3000/api/teddies")
.then(response => response.json())
.then((items) => {
for (let i = 0; i < items.length; i++) {
    displayElement(items[i]);
}
})

function displayElement(item) {
    let txt = document.querySelector(".elementMain");
    txt.innerHTML += `
    <div class="col-sm-4">
        <div class="panel panel-primary">
            <div class="panel-heading"></div>
                <div class="panel-body"> 
                   <img src="${item.imageUrl}" class="img-responsive" alt="Image"/>
                </div>
                <div class="panel-footer">
                    <p class="name"> ${item.nom}</p>
                    <p class="price"> ${item.price} </p></div>
                </div>
            </div>
        </div>
            
      
    
            

    `;
}
