async function getMenuData(){
    const response = await fetch("db/guru.json")
    const dataApi =await response.json()
    console.log(dataApi)

   dataApi.Card.forEach((element) => {
    addMenudata(element.Image , element.Namaguru , element.Mapel );
    console.log(element.Image)
   });
}
getMenuData()

const row_menu = document.getElementById("row-menu")
console.log(row_menu) 


const addMenudata = (img , judul , mapel ) => {
    let get = `<div class="col-sm-4 col-12">
    <div class="menu-card">
    <a>
     <div class="menu-icon text-start "><img src="${img}" class="w-100"</div>   
     <h3>Nama:${judul}</h3>
     <h3>Mapel:${mapel}</h3>
     
     </a>
     <div class="row">
     <a href="show.html" class=" mx-3 p-0 ">  <button type="button" class="col-11 btn btn-outline-dark px-4 me-md-2">Show More</button></a>
   </div>
    </div>
    </div>`;

    row_menu.innerHTML += get ;
}