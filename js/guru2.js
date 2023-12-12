async function getMenuData(){
    const response = await fetch("db/guru2.json")
    const dataApi =await response.json()
    console.log(dataApi)

   dataApi.Card.forEach((element) => {
    addMenudata(element.Image , element.Namaguru , element.Mapel , element.Kelas);
    console.log(element.Image)
   });
}
getMenuData()

const row_menu = document.getElementById("row-menu")
console.log(row_menu) 


const addMenudata = (img , judul , mapel , kelas) => {
    let get = `<div class="col-sm-4 col-12">
    <div class="menu-card">
    <a>
     <div class="menu-icon text-start "><img src="${img}" class="w-100"</div>   
     <h3>Nama:${judul}</h3>
     <h3>Mapel:${mapel}</h3>
     <div class="row">
     <a href="show.html" class="col-6 mx-3 p-0">  <button type="button" class="btn btn-dark  px-4 me-md-2">Show More</button></a>
   </div>
     </a>
    </div>
    </div>`;

    row_menu.innerHTML += get ;
}